// Auto-generated from src\model\ContentInfo.js
declare class ContentInfo {
  constructor();
  "Edition"?: InstanceType<typeof import("./SingleStringValuedAttribute")>;
  "Languages"?: InstanceType<typeof import("./Languages")>;
  "PagesCount"?: InstanceType<typeof import("./SingleIntegerValuedAttribute")>;
  "PublicationDate"?: InstanceType<typeof import("./SingleStringValuedAttribute")>;
  static constructFromObject(data: any, obj?: ContentInfo): ContentInfo;
}
export = ContentInfo;
