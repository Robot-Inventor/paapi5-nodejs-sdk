// Auto-generated from src\model\OfferListingV2.js
declare class OfferListingV2 {
  constructor();
  "Availability"?: InstanceType<typeof import("./OfferAvailabilityV2")>;
  "Condition"?: InstanceType<typeof import("./OfferConditionV2")>;
  "DealDetails"?: InstanceType<typeof import("./DealDetails")>;
  "IsBuyBoxWinner"?: boolean;
  "LoyaltyPoints"?: InstanceType<typeof import("./OfferLoyaltyPointsV2")>;
  "MerchantInfo"?: InstanceType<typeof import("./OfferMerchantInfoV2")>;
  "Price"?: InstanceType<typeof import("./OfferPriceV2")>;
  "Type"?: typeof import("./OfferType")[keyof typeof import("./OfferType")];
  "ViolatesMAP"?: boolean;
  static constructFromObject(data: any, obj?: OfferListingV2): OfferListingV2;
}
export = OfferListingV2;
