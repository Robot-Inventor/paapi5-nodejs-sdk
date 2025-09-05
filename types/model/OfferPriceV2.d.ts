// Auto-generated from src\model\OfferPriceV2.js
declare class OfferPriceV2 {
  constructor();
  "Money"?: InstanceType<typeof import("./Money")>;
  "PricePerUnit"?: InstanceType<typeof import("./Money")>;
  "Savings"?: InstanceType<typeof import("./OfferSavingsV2")>;
  "SavingBasis"?: InstanceType<typeof import("./OfferSavingBasis")>;
  static constructFromObject(data: any, obj?: OfferPriceV2): OfferPriceV2;
}
export = OfferPriceV2;
