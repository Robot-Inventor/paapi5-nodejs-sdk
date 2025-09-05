// Auto-generated from src\model\ProductInfo.js
declare class ProductInfo {
  constructor();
  "Color"?: InstanceType<typeof import("./SingleStringValuedAttribute")>;
  "IsAdultProduct"?: InstanceType<typeof import("./SingleBooleanValuedAttribute")>;
  "ItemDimensions"?: InstanceType<typeof import("./DimensionBasedAttribute")>;
  "ReleaseDate"?: InstanceType<typeof import("./SingleStringValuedAttribute")>;
  "Size"?: InstanceType<typeof import("./SingleStringValuedAttribute")>;
  "UnitCount"?: InstanceType<typeof import("./SingleIntegerValuedAttribute")>;
  static constructFromObject(data: any, obj?: ProductInfo): ProductInfo;
}
export = ProductInfo;
