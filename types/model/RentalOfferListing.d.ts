// Auto-generated from src\model\RentalOfferListing.js
declare class RentalOfferListing {
  constructor();
  "Availability"?: InstanceType<typeof import("./OfferAvailability").default>;
  "BasePrice"?: InstanceType<typeof import("./DurationPrice").default>;
  "Condition"?: InstanceType<typeof import("./OfferCondition").default>;
  "DeliveryInfo"?: InstanceType<typeof import("./OfferDeliveryInfo").default>;
  "Id"?: string;
  "MerchantInfo"?: InstanceType<typeof import("./OfferMerchantInfo").default>;
  static constructFromObject(data: any, obj?: RentalOfferListing): RentalOfferListing;
}
export default RentalOfferListing;
