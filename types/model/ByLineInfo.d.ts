// Auto-generated from src\model\ByLineInfo.js
declare class ByLineInfo {
  constructor();
  "Brand"?: InstanceType<typeof import("./SingleStringValuedAttribute").default>;
  "Contributors"?: Array<InstanceType<typeof import("./Contributor").default>>;
  "Manufacturer"?: InstanceType<typeof import("./SingleStringValuedAttribute").default>;
  static constructFromObject(data: any, obj?: ByLineInfo): ByLineInfo;
}
export default ByLineInfo;
