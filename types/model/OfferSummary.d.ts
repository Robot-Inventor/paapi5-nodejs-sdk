// Auto-generated from src\model\OfferSummary.js
declare class OfferSummary {
  constructor();
  "Condition"?: InstanceType<typeof import("./OfferCondition").default>;
  "HighestPrice"?: InstanceType<typeof import("./OfferPrice").default>;
  "LowestPrice"?: InstanceType<typeof import("./OfferPrice").default>;
  "OfferCount"?: number;
  static constructFromObject(data: any, obj?: OfferSummary): OfferSummary;
}
export default OfferSummary;
