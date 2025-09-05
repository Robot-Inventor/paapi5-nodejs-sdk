// Auto-generated from src\model\GetVariationsRequest.js
declare class GetVariationsRequest {
  constructor(ASIN: string, partnerTag: string, partnerType: typeof import("./PartnerType")[keyof typeof import("./PartnerType")]);
  "ASIN"?: string;
  "Condition"?: typeof import("./Condition")[keyof typeof import("./Condition")];
  "CurrencyOfPreference"?: string;
  "LanguagesOfPreference"?: Array<string>;
  "Marketplace"?: string;
  "Merchant"?: typeof import("./Merchant")[keyof typeof import("./Merchant")];
  "OfferCount"?: InstanceType<typeof import("./OfferCount")>;
  "PartnerTag"?: string;
  "PartnerType"?: typeof import("./PartnerType")[keyof typeof import("./PartnerType")];
  "Properties"?: InstanceType<typeof import("./Properties")>;
  "Resources"?: Array<typeof import("./GetVariationsResource")[keyof typeof import("./GetVariationsResource")]>;
  "VariationCount"?: number;
  "VariationPage"?: number;
  static constructFromObject(data: any, obj?: GetVariationsRequest): GetVariationsRequest;
}
export = GetVariationsRequest;
