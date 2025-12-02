// Auto-generated from src\model\OfferListing.js
declare class OfferListing {
  constructor();
  "Availability"?: InstanceType<typeof import("./OfferAvailability").default>;
  "Condition"?: InstanceType<typeof import("./OfferCondition").default>;
  "DeliveryInfo"?: InstanceType<typeof import("./OfferDeliveryInfo").default>;
  "Id"?: string;
  "IsBuyBoxWinner"?: boolean;
  "LoyaltyPoints"?: InstanceType<typeof import("./OfferLoyaltyPoints").default>;
  "MerchantInfo"?: InstanceType<typeof import("./OfferMerchantInfo").default>;
  "Price"?: InstanceType<typeof import("./OfferPrice").default>;
  "ProgramEligibility"?: InstanceType<typeof import("./OfferProgramEligibility").default>;
  "Promotions"?: Array<InstanceType<typeof import("./OfferPromotion").default>>;
  "SavingBasis"?: InstanceType<typeof import("./OfferPrice").default>;
  "ViolatesMAP"?: boolean;
  static constructFromObject(data: any, obj?: OfferListing): OfferListing;
}
export default OfferListing;
