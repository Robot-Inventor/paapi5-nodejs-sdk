// Auto-generated from src\model\OfferPriceV2.js
declare class OfferPriceV2 {
  constructor();
  "Money"?: InstanceType<typeof import("./Money").default>;
  "PricePerUnit"?: InstanceType<typeof import("./Money").default>;
  "Savings"?: InstanceType<typeof import("./OfferSavingsV2").default>;
  "SavingBasis"?: InstanceType<typeof import("./OfferSavingBasis").default>;
  static constructFromObject(data: any, obj?: OfferPriceV2): OfferPriceV2;
}
export default OfferPriceV2;
