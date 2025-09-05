// Auto-generated from src\model\OfferPrice.js
declare class OfferPrice {
  constructor();
  "Amount"?: number;
  "Currency"?: string;
  "DisplayAmount"?: string;
  "PricePerUnit"?: number;
  "PriceType"?: typeof import("./PriceType")[keyof typeof import("./PriceType")];
  "PriceTypeLabel"?: string;
  "Savings"?: InstanceType<typeof import("./OfferSavings")>;
  static constructFromObject(data: any, obj?: OfferPrice): OfferPrice;
}
export = OfferPrice;
