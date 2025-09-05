// Auto-generated from src\model\OfferSummary.js
declare class OfferSummary {
  constructor();
  "Condition"?: InstanceType<typeof import("./OfferCondition")>;
  "HighestPrice"?: InstanceType<typeof import("./OfferPrice")>;
  "LowestPrice"?: InstanceType<typeof import("./OfferPrice")>;
  "OfferCount"?: number;
  static constructFromObject(data: any, obj?: OfferSummary): OfferSummary;
}
export = OfferSummary;
