// Auto-generated from src\model\OfferDeliveryInfo.js
declare class OfferDeliveryInfo {
  constructor();
  "IsAmazonFulfilled"?: boolean;
  "IsFreeShippingEligible"?: boolean;
  "IsPrimeEligible"?: boolean;
  "ShippingCharges"?: Array<InstanceType<typeof import("./OfferShippingCharge")>>;
  static constructFromObject(data: any, obj?: OfferDeliveryInfo): OfferDeliveryInfo;
}
export = OfferDeliveryInfo;
