// Auto-generated from src\model\GetVariationsRequest.js
declare class GetVariationsRequest {
  constructor(ASIN: string, partnerTag: string, partnerType: typeof import("./PartnerType").default[keyof typeof import("./PartnerType").default]);
  "ASIN"?: string;
  "Condition"?: typeof import("./Condition").default[keyof typeof import("./Condition").default];
  "CurrencyOfPreference"?: string;
  "LanguagesOfPreference"?: Array<string>;
  "Marketplace"?: string;
  "Merchant"?: typeof import("./Merchant").default[keyof typeof import("./Merchant").default];
  "OfferCount"?: InstanceType<typeof import("./OfferCount").default>;
  "PartnerTag"?: string;
  "PartnerType"?: typeof import("./PartnerType").default[keyof typeof import("./PartnerType").default];
  "Properties"?: InstanceType<typeof import("./Properties").default>;
  "Resources"?: Array<typeof import("./GetVariationsResource").default[keyof typeof import("./GetVariationsResource").default]>;
  "VariationCount"?: number;
  "VariationPage"?: number;
  static constructFromObject(data: any, obj?: GetVariationsRequest): GetVariationsRequest;
}
export default GetVariationsRequest;
