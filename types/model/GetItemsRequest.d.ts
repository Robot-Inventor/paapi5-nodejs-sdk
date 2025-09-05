// Auto-generated from src\model\GetItemsRequest.js
declare class GetItemsRequest {
  constructor(itemIds: Array<string>, partnerTag: string, partnerType: typeof import("./PartnerType")[keyof typeof import("./PartnerType")]);
  "Condition"?: typeof import("./Condition")[keyof typeof import("./Condition")];
  "CurrencyOfPreference"?: string;
  "ItemIds"?: Array<string>;
  "ItemIdType"?: typeof import("./ItemIdType")[keyof typeof import("./ItemIdType")];
  "LanguagesOfPreference"?: Array<string>;
  "Marketplace"?: string;
  "Merchant"?: typeof import("./Merchant")[keyof typeof import("./Merchant")];
  "OfferCount"?: InstanceType<typeof import("./OfferCount")>;
  "PartnerTag"?: string;
  "PartnerType"?: typeof import("./PartnerType")[keyof typeof import("./PartnerType")];
  "Properties"?: InstanceType<typeof import("./Properties")>;
  "Resources"?: Array<typeof import("./GetItemsResource")[keyof typeof import("./GetItemsResource")]>;
  static constructFromObject(data: any, obj?: GetItemsRequest): GetItemsRequest;
}
export = GetItemsRequest;
