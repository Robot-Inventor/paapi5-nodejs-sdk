

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.resolve(process.cwd(), 'src');
const OUT_DIR = path.resolve(process.cwd(), 'types');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content.replace(/\r?\n/g, '\n'));
}

function mapJsDocTypeToTs(rawType, currentFolder) {
  const t = (rawType || '').trim();
  const mapPrim = (x) => ({
    'String': 'string',
    'Number': 'number',
    'Integer': 'number',
    'Boolean': 'boolean',
    'Date': 'Date',
    'Object': 'any',
    'Blob': 'any',
    'Array': 'any[]'
  })[x] || null;

  // Array.<...>
  let m = t.match(/^Array\.<(.+)>$/);
  if (m) {
    const inner = mapJsDocTypeToTs(m[1], currentFolder);
    return `Array<${inner}>`;
  }

  // module:model/Foo or module:api/DefaultApi or module:ApiClient
  m = t.match(/^module:(model|api)\/(.+)$/) || t.match(/^module:(ApiClient)$/);
  if (m) {
    let rel;
    if (m[1] === 'ApiClient') {
      rel = path.relative(currentFolder, path.join(OUT_DIR, 'ApiClient')).replace(/\\/g, '/');
    } else {
      rel = path.relative(currentFolder, path.join(OUT_DIR, m[1], m[2])).replace(/\\/g, '/');
    }
    if (!rel.startsWith('.')) rel = './' + rel;
    // For models (classes) we want instance type. For enums/objects, value union. We cannot easily know here,
    // so return a flexible type that works for both: for classes, InstanceType<...>, for enums just the value type.
    // Callers (property emitters) decide how to wrap.
    return `typeof import("${rel}")`;
  }

  const prim = mapPrim(t);
  if (prim) return prim;

  // Fallback to any
  return 'any';
}

function parseEnumValues(src) {
  const values = new Set();
  // Capture lines like "Key": "Value" or Key: 'Value'
  const enumBlockStart = src.indexOf('var exports = {');
  if (enumBlockStart !== -1) {
    const after = src.slice(enumBlockStart);
    const end = after.indexOf('};');
    const block = after.slice(0, end);
    const re = /\n\s*(?:"([^"]+)"|'([^']+)'|([A-Za-z0-9_\.]+))\s*:\s*(?:"([^"]+)"|'([^']+)'|([A-Za-z0-9_\.]+))\s*,?/g;
    let m;
    while ((m = re.exec(block))) {
      const key = m[1] || m[2] || m[3];
      const val = m[4] || m[5] || m[6];
      if (!key) continue;
      // Only keep entries where value is present (skip comments, trailing braces)
      if (typeof val === 'string') {
        values.add(val);
      }
    }
  }
  return Array.from(values);
}

function generateEnumDts(name, srcPath, outPath) {
  const src = read(srcPath);
  const values = parseEnumValues(src);
  const props = values.map(v => `  ${JSON.stringify(v)}: ${JSON.stringify(v)};`).join('\n');
  const content = `// Auto-generated from ${path.relative(process.cwd(), srcPath)}
declare const ${name}: {
${props}
  constructFromObject(object: any): any;
};
export = ${name};
`;
  write(outPath, content);
}

function parseMembers(src) {
  // Find all JSDoc @member {Type} Name blocks
  const members = [];
  const re = /\*\*\s*\n(?:[^*]|\*(?!\/))*?@member\s+\{([^}]+)\}\s+([A-Za-z0-9_\[\]"']+)\s*[\s\S]*?\*\/[\s\r\n]*exports\.prototype\[([^\]]+)\]\s*=\s*undefined;/g;
  let m;
  while ((m = re.exec(src))) {
    const rawType = m[1].trim();
    let name = m[2].trim();
    // Normalize name from quotes or brackets
    name = name.replace(/^['"]|['"]$/g, '');
    members.push({ name, rawType });
  }
  return members;
}

function parseConstructorParams(src, className) {
  const params = [];
  // Support both "@param {Type} name" and "@param name {Type}"
  const re = /@param\s+(?:\{([^}]+)\}\s*([A-Za-z0-9_]+)|([A-Za-z0-9_]+)\s*\{([^}]+)\})/g;
  let m;
  // Narrow strictly to the constructor JSDoc block: "Constructs a new <code>ClassName</code>"
  const marker = `Constructs a new <code>${className}</code>`;
  const start = src.indexOf(marker);
  if (start === -1) return params;
  const after = src.slice(start);
  const endBlock = after.indexOf('*/');
  const section = endBlock !== -1 ? after.slice(0, endBlock) : after;
  while ((m = re.exec(section))) {
    const type = (m[1] || m[4] || '').trim();
    const name = (m[2] || m[3] || '').trim();
    if (name) params.push({ name, rawType: type });
  }
  return params;
}

function generateModelDts(name, srcPath, outPath, enumNames) {
  const src = read(srcPath);
  const currentFolder = path.dirname(outPath);
  const members = parseMembers(src);
  const ctorParams = parseConstructorParams(src, name);

  // Detect array-like models (runtime extends Array) and infer element type
  const isArrayModel = /@extends\s+Array/.test(src);
  let arrayElementTs = 'any';
  if (isArrayModel) {
    const m = src.match(/constructFromObject\(data, obj, ['"]([A-Za-z0-9_]+)['"]\)/);
    if (m) {
      const refName = m[1];
      const modTs = mapJsDocTypeToTs(`module:model/${refName}`, currentFolder);
      if (enumNames.has(refName)) {
        arrayElementTs = `${modTs}[keyof ${modTs}]`;
      } else {
        arrayElementTs = `InstanceType<${modTs}>`;
      }
    } else {
      arrayElementTs = 'any';
    }
  }

  const fields = members.map(({ name, rawType }) => {
    let tsType;
    if (/^module:/.test(rawType)) {
      const modTs = mapJsDocTypeToTs(rawType, currentFolder);
      if (/module:model\//.test(rawType)) {
        const refName = rawType.replace(/^module:model\//, '').trim();
        if (enumNames.has(refName)) {
          tsType = `${modTs}[keyof ${modTs}]`;
        } else {
          tsType = `InstanceType<${modTs}>`;
        }
      } else {
        tsType = modTs;
      }
    } else if (/^Array\.</.test(rawType)) {
      // Recursively map
      const inner = rawType.replace(/^Array\.</, '').replace(/>$/, '');
      if (/^module:/.test(inner)) {
        const modTs = mapJsDocTypeToTs(inner, currentFolder);
        if (/module:model\//.test(inner)) {
          const refName = inner.replace(/^module:model\//, '').trim();
          if (enumNames.has(refName)) {
            tsType = `Array<${modTs}[keyof ${modTs}]>`;
          } else {
            tsType = `Array<InstanceType<${modTs}>>`;
          }
        } else {
          tsType = `Array<${modTs}>`;
        }
      } else {
        tsType = mapJsDocTypeToTs(rawType, currentFolder);
      }
    } else {
      tsType = mapJsDocTypeToTs(rawType, currentFolder);
    }
    return `  ${JSON.stringify(name)}?: ${tsType};`;
  }).join('\n');

  const ctorSig = (() => {
    if (!ctorParams.length) return '  constructor();\n';
    const parts = ctorParams.map(p => {
      const ts = mapJsDocTypeToTs(p.rawType, currentFolder);
      let finalTs = ts;
      if (/module:model\//.test(p.rawType)) {
        const refName = p.rawType.replace(/^module:model\//, '').trim();
        finalTs = enumNames.has(refName) ? `${ts}[keyof ${ts}]` : `InstanceType<${ts}>`;
      }
      return `${p.name}: ${finalTs}`;
    }).join(', ');
    return `  constructor(${parts});\n`;
  })();

  const classHeader = isArrayModel
    ? `declare class ${name} extends Array<${arrayElementTs}> {\n`
    : `declare class ${name} {\n`;

  const content = `// Auto-generated from ${path.relative(process.cwd(), srcPath)}
${classHeader}${ctorSig}${fields ? fields + '\n' : ''}  static constructFromObject(data: any, obj?: ${name}): ${name};
}
export = ${name};
`;
  write(outPath, content);
}

function generateApiClientDts(outPath) {
  const content = `// Auto-generated typings for ApiClient
declare class ApiClient {
  constructor();
  basePath: string;
  accessKey: string | null;
  secretKey: string | null;
  host: string;
  region: string;
  authentications: Record<string, any>;
  defaultHeaders: Record<string, string>;
  timeout: number;
  cache: boolean;
  enableCookies: boolean;
  agent?: any;

  buildUrl(path: string, pathParams: Record<string, any>): string;
  buildCollectionParam(param: any[] | null, collectionFormat: string): string | any[] | null;
  deserialize(response: any, returnType: any): any;
  paramToString(param: any): string;
  isFileParam(param: any): boolean;
  normalizeParams(params: Record<string, any>): Record<string, any>;
  callApi(
    path: string,
    httpMethod: string,
    apiName: string,
    pathParams: Record<string, any>,
    queryParams: Record<string, any>,
    collectionQueryParams: Record<string, any>,
    headerParams: Record<string, any>,
    formParams: Record<string, any>,
    bodyParam: any,
    authNames: string[],
    contentTypes: string[],
    accepts: string[],
    returnType: any
  ): Promise<{ data: any; response: any }>;

  static readonly CollectionFormatEnum: {
    CSV: string;
    SSV: string;
    TSV: string;
    PIPES: string;
    MULTI: 'multi';
  };
  static parseDate(str: string): Date;
  static convertToType<T = any>(data: any, type: any): T;
  static constructFromObject(data: any, obj: any, itemType: any): void;
  static instance: ApiClient;
}
export = ApiClient;
`;
  write(outPath, content);
}

function generateDefaultApiDts(outPath) {
  const content = `// Auto-generated typings for DefaultApi
declare class DefaultApi {
  constructor(apiClient?: import('../ApiClient'));

  getBrowseNodesWithHttpInfo(
    getBrowseNodesRequest: InstanceType<typeof import('../model/GetBrowseNodesRequest')>
  ): Promise<{ data: InstanceType<typeof import('../model/GetBrowseNodesResponse')>; response: any }>;

  getBrowseNodes(
    getBrowseNodesRequest: InstanceType<typeof import('../model/GetBrowseNodesRequest')>
  ): Promise<InstanceType<typeof import('../model/GetBrowseNodesResponse')>>;

  getItemsWithHttpInfo(
    getItemsRequest: InstanceType<typeof import('../model/GetItemsRequest')>
  ): Promise<{ data: InstanceType<typeof import('../model/GetItemsResponse')>; response: any }>;

  getItems(
    getItemsRequest: InstanceType<typeof import('../model/GetItemsRequest')>
  ): Promise<InstanceType<typeof import('../model/GetItemsResponse')>>;

  getVariationsWithHttpInfo(
    getVariationsRequest: InstanceType<typeof import('../model/GetVariationsRequest')>
  ): Promise<{ data: InstanceType<typeof import('../model/GetVariationsResponse')>; response: any }>;

  getVariations(
    getVariationsRequest: InstanceType<typeof import('../model/GetVariationsRequest')>
  ): Promise<InstanceType<typeof import('../model/GetVariationsResponse')>>;

  searchItemsWithHttpInfo(
    searchItemsRequest: InstanceType<typeof import('../model/SearchItemsRequest')>
  ): Promise<{ data: InstanceType<typeof import('../model/SearchItemsResponse')>; response: any }>;

  searchItems(
    searchItemsRequest: InstanceType<typeof import('../model/SearchItemsRequest')>
  ): Promise<InstanceType<typeof import('../model/SearchItemsResponse')>>;
}
export = DefaultApi;
`;
  write(outPath, content);
}

function generateSignHelperDts(outPath) {
  const content = `// Auto-generated typings for auth/SignHelper
declare const SignHelper: {
  createAuthorizationHeader(
    accessKey: string,
    secretKey: string,
    requestHeaders: Record<string, string>,
    httpMethod: string,
    path: string,
    payload: any,
    region: string,
    service: string,
    timestamp: number | string | Date
  ): string;
  createAuthorizationHeaders(
    timestamp: number | string | Date,
    accessKey: string,
    region: string,
    service: string,
    signedHeaders: string,
    signature: string
  ): string;
  createCanonicalRequest(
    method: string,
    pathname: string,
    query: Record<string, any>,
    headers: Record<string, any>,
    payload: any
  ): string;
  createCanonicalQueryString(params: Record<string, any>): string;
  createCanonicalHeaders(headers: Record<string, any>): string;
  createSignedHeaders(headers: Record<string, any>): string;
  createCredentialScope(time: number | string | Date, region: string, service: string): string;
  createStringToSign(time: number | string | Date, region: string, service: string, request: string): string;
  createSignature(
    secret: string,
    time: number | string | Date,
    region: string,
    service: string,
    stringToSign: string
  ): string;
  toAmzDate(time: number | string | Date): string;
};
export = SignHelper;
`;
  write(outPath, content);
}

function parseIndexExports(src) {
  // Parse object literal defining the exported surface in index.js
  const out = [];
  const start = src.indexOf('var exports = {');
  if (start === -1) return out;
  const after = src.slice(start);
  const end = after.indexOf('};');
  const block = after.slice(0, end);
  const re = /\n\s*\/\*\*[\s\S]*?\*\/\s*([A-Za-z0-9_]+)\s*:\s*([A-Za-z0-9_]+)\s*,?/g;
  let m;
  while ((m = re.exec(block))) {
    out.push({ exportedName: m[1], localName: m[2] });
  }
  return out;
}

function generateIndexDts(srcPath, outPath) {
  const src = read(srcPath);
  const entries = parseIndexExports(src);
  const lines = entries.map(({ exportedName }) => {
    let rel;
    if (exportedName === 'ApiClient') rel = './ApiClient';
    else if (exportedName === 'DefaultApi') rel = './api/DefaultApi';
    else rel = `./model/${exportedName}`;
    return `  ${exportedName}: typeof import(${JSON.stringify(rel)});`;
  });
  const content = `// Auto-generated typings for index.js aggregate
declare const ProductAdvertisingAPIv1: {
${lines.join('\n')}
};
export = ProductAdvertisingAPIv1;
`;
  write(outPath, content);
}

function main() {
  ensureDir(OUT_DIR);

  // Generate ApiClient
  generateApiClientDts(path.join(OUT_DIR, 'ApiClient.d.ts'));

  // Generate DefaultApi
  generateDefaultApiDts(path.join(OUT_DIR, 'api', 'DefaultApi.d.ts'));

  // Generate SignHelper
  generateSignHelperDts(path.join(OUT_DIR, 'auth', 'SignHelper.d.ts'));

  // Scan models for enum vs class
  const modelDir = path.join(SRC_DIR, 'model');
  const files = fs.readdirSync(modelDir).filter(f => f.endsWith('.js'));
  const enumNames = new Set(files
    .map(f => ({ name: path.basename(f, '.js'), code: read(path.join(modelDir, f)) }))
    .filter(x => x.code.includes('@enum'))
    .map(x => x.name));
  for (const f of files) {
    const name = path.basename(f, '.js');
    const srcPath = path.join(modelDir, f);
    const code = read(srcPath);
    const isEnum = code.includes('@enum');
    if (isEnum) {
      generateEnumDts(name, srcPath, path.join(OUT_DIR, 'model', `${name}.d.ts`));
    } else {
      generateModelDts(name, srcPath, path.join(OUT_DIR, 'model', `${name}.d.ts`), enumNames);
    }
  }

  // Index aggregate
  generateIndexDts(path.join(SRC_DIR, 'index.js'), path.join(OUT_DIR, 'index.d.ts'));

  // Done
}

main();
