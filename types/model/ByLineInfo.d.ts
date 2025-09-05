// Auto-generated from src\model\ByLineInfo.js
declare class ByLineInfo {
  constructor();
  "Brand"?: InstanceType<typeof import("./SingleStringValuedAttribute")>;
  "Contributors"?: Array<InstanceType<typeof import("./Contributor")>>;
  "Manufacturer"?: InstanceType<typeof import("./SingleStringValuedAttribute")>;
  static constructFromObject(data: any, obj?: ByLineInfo): ByLineInfo;
}
export = ByLineInfo;
