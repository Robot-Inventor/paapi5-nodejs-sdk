// Auto-generated from src\model\OfferListingV2.js
declare class OfferListingV2 {
  constructor();
  "Availability"?: InstanceType<typeof import("./OfferAvailabilityV2").default>;
  "Condition"?: InstanceType<typeof import("./OfferConditionV2").default>;
  "DealDetails"?: InstanceType<typeof import("./DealDetails").default>;
  "IsBuyBoxWinner"?: boolean;
  "LoyaltyPoints"?: InstanceType<typeof import("./OfferLoyaltyPointsV2").default>;
  "MerchantInfo"?: InstanceType<typeof import("./OfferMerchantInfoV2").default>;
  "Price"?: InstanceType<typeof import("./OfferPriceV2").default>;
  "Type"?: typeof import("./OfferType").default[keyof typeof import("./OfferType").default];
  "ViolatesMAP"?: boolean;
  static constructFromObject(data: any, obj?: OfferListingV2): OfferListingV2;
}
export default OfferListingV2;
