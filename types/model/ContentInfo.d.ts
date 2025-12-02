// Auto-generated from src\model\ContentInfo.js
declare class ContentInfo {
  constructor();
  "Edition"?: InstanceType<typeof import("./SingleStringValuedAttribute").default>;
  "Languages"?: InstanceType<typeof import("./Languages").default>;
  "PagesCount"?: InstanceType<typeof import("./SingleIntegerValuedAttribute").default>;
  "PublicationDate"?: InstanceType<typeof import("./SingleStringValuedAttribute").default>;
  static constructFromObject(data: any, obj?: ContentInfo): ContentInfo;
}
export default ContentInfo;
