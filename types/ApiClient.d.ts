// Auto-generated typings for ApiClient
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
export default ApiClient;
