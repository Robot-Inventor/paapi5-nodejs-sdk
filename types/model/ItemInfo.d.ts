// Auto-generated from src\model\ItemInfo.js
declare class ItemInfo {
  constructor();
  "ByLineInfo"?: InstanceType<typeof import("./ByLineInfo").default>;
  "Classifications"?: InstanceType<typeof import("./Classifications").default>;
  "ContentInfo"?: InstanceType<typeof import("./ContentInfo").default>;
  "ContentRating"?: InstanceType<typeof import("./ContentRating").default>;
  "ExternalIds"?: InstanceType<typeof import("./ExternalIds").default>;
  "Features"?: InstanceType<typeof import("./MultiValuedAttribute").default>;
  "ManufactureInfo"?: InstanceType<typeof import("./ManufactureInfo").default>;
  "ProductInfo"?: InstanceType<typeof import("./ProductInfo").default>;
  "TechnicalInfo"?: InstanceType<typeof import("./TechnicalInfo").default>;
  "Title"?: InstanceType<typeof import("./SingleStringValuedAttribute").default>;
  "TradeInInfo"?: InstanceType<typeof import("./TradeInInfo").default>;
  static constructFromObject(data: any, obj?: ItemInfo): ItemInfo;
}
export default ItemInfo;
