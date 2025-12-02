// Auto-generated from src\model\OfferPrice.js
declare class OfferPrice {
  constructor();
  "Amount"?: number;
  "Currency"?: string;
  "DisplayAmount"?: string;
  "PricePerUnit"?: number;
  "PriceType"?: typeof import("./PriceType").default[keyof typeof import("./PriceType").default];
  "PriceTypeLabel"?: string;
  "Savings"?: InstanceType<typeof import("./OfferSavings").default>;
  static constructFromObject(data: any, obj?: OfferPrice): OfferPrice;
}
export default OfferPrice;
