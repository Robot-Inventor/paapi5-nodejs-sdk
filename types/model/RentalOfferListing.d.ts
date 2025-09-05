// Auto-generated from src\model\RentalOfferListing.js
declare class RentalOfferListing {
  constructor();
  "Availability"?: InstanceType<typeof import("./OfferAvailability")>;
  "BasePrice"?: InstanceType<typeof import("./DurationPrice")>;
  "Condition"?: InstanceType<typeof import("./OfferCondition")>;
  "DeliveryInfo"?: InstanceType<typeof import("./OfferDeliveryInfo")>;
  "Id"?: string;
  "MerchantInfo"?: InstanceType<typeof import("./OfferMerchantInfo")>;
  static constructFromObject(data: any, obj?: RentalOfferListing): RentalOfferListing;
}
export = RentalOfferListing;
