// Auto-generated from src\model\VariationSummary.js
declare class VariationSummary {
  constructor();
  "PageCount"?: number;
  "Price"?: InstanceType<typeof import("./Price")>;
  "VariationCount"?: number;
  "VariationDimensions"?: Array<InstanceType<typeof import("./VariationDimension")>>;
  static constructFromObject(data: any, obj?: VariationSummary): VariationSummary;
}
export = VariationSummary;
