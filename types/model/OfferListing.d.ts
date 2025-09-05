// Auto-generated from src\model\OfferListing.js
declare class OfferListing {
  constructor();
  "Availability"?: InstanceType<typeof import("./OfferAvailability")>;
  "Condition"?: InstanceType<typeof import("./OfferCondition")>;
  "DeliveryInfo"?: InstanceType<typeof import("./OfferDeliveryInfo")>;
  "Id"?: string;
  "IsBuyBoxWinner"?: boolean;
  "LoyaltyPoints"?: InstanceType<typeof import("./OfferLoyaltyPoints")>;
  "MerchantInfo"?: InstanceType<typeof import("./OfferMerchantInfo")>;
  "Price"?: InstanceType<typeof import("./OfferPrice")>;
  "ProgramEligibility"?: InstanceType<typeof import("./OfferProgramEligibility")>;
  "Promotions"?: Array<InstanceType<typeof import("./OfferPromotion")>>;
  "SavingBasis"?: InstanceType<typeof import("./OfferPrice")>;
  "ViolatesMAP"?: boolean;
  static constructFromObject(data: any, obj?: OfferListing): OfferListing;
}
export = OfferListing;
