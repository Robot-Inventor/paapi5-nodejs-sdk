// Auto-generated from src\model\ProductInfo.js
declare class ProductInfo {
  constructor();
  "Color"?: InstanceType<typeof import("./SingleStringValuedAttribute").default>;
  "IsAdultProduct"?: InstanceType<typeof import("./SingleBooleanValuedAttribute").default>;
  "ItemDimensions"?: InstanceType<typeof import("./DimensionBasedAttribute").default>;
  "ReleaseDate"?: InstanceType<typeof import("./SingleStringValuedAttribute").default>;
  "Size"?: InstanceType<typeof import("./SingleStringValuedAttribute").default>;
  "UnitCount"?: InstanceType<typeof import("./SingleIntegerValuedAttribute").default>;
  static constructFromObject(data: any, obj?: ProductInfo): ProductInfo;
}
export default ProductInfo;
