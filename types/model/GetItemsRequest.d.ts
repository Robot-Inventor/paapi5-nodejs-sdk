// Auto-generated from src\model\GetItemsRequest.js
declare class GetItemsRequest {
  constructor(itemIds: Array<string>, partnerTag: string, partnerType: typeof import("./PartnerType").default[keyof typeof import("./PartnerType").default]);
  "Condition"?: typeof import("./Condition").default[keyof typeof import("./Condition").default];
  "CurrencyOfPreference"?: string;
  "ItemIds"?: Array<string>;
  "ItemIdType"?: typeof import("./ItemIdType").default[keyof typeof import("./ItemIdType").default];
  "LanguagesOfPreference"?: Array<string>;
  "Marketplace"?: string;
  "Merchant"?: typeof import("./Merchant").default[keyof typeof import("./Merchant").default];
  "OfferCount"?: InstanceType<typeof import("./OfferCount").default>;
  "PartnerTag"?: string;
  "PartnerType"?: typeof import("./PartnerType").default[keyof typeof import("./PartnerType").default];
  "Properties"?: InstanceType<typeof import("./Properties").default>;
  "Resources"?: Array<typeof import("./GetItemsResource").default[keyof typeof import("./GetItemsResource").default]>;
  static constructFromObject(data: any, obj?: GetItemsRequest): GetItemsRequest;
}
export default GetItemsRequest;
