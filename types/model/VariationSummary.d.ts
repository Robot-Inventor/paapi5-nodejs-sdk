// Auto-generated from src\model\VariationSummary.js
declare class VariationSummary {
  constructor();
  "PageCount"?: number;
  "Price"?: InstanceType<typeof import("./Price").default>;
  "VariationCount"?: number;
  "VariationDimensions"?: Array<InstanceType<typeof import("./VariationDimension").default>>;
  static constructFromObject(data: any, obj?: VariationSummary): VariationSummary;
}
export default VariationSummary;
