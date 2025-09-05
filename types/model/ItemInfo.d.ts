// Auto-generated from src\model\ItemInfo.js
declare class ItemInfo {
  constructor();
  "ByLineInfo"?: InstanceType<typeof import("./ByLineInfo")>;
  "Classifications"?: InstanceType<typeof import("./Classifications")>;
  "ContentInfo"?: InstanceType<typeof import("./ContentInfo")>;
  "ContentRating"?: InstanceType<typeof import("./ContentRating")>;
  "ExternalIds"?: InstanceType<typeof import("./ExternalIds")>;
  "Features"?: InstanceType<typeof import("./MultiValuedAttribute")>;
  "ManufactureInfo"?: InstanceType<typeof import("./ManufactureInfo")>;
  "ProductInfo"?: InstanceType<typeof import("./ProductInfo")>;
  "TechnicalInfo"?: InstanceType<typeof import("./TechnicalInfo")>;
  "Title"?: InstanceType<typeof import("./SingleStringValuedAttribute")>;
  "TradeInInfo"?: InstanceType<typeof import("./TradeInInfo")>;
  static constructFromObject(data: any, obj?: ItemInfo): ItemInfo;
}
export = ItemInfo;
