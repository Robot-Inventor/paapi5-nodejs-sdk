// Auto-generated from src\model\SearchItemsRequest.js
declare class SearchItemsRequest {
  constructor(partnerTag: string, partnerType: typeof import("./PartnerType")[keyof typeof import("./PartnerType")]);
  "Actor"?: string;
  "Artist"?: string;
  "Author"?: string;
  "Availability"?: typeof import("./Availability")[keyof typeof import("./Availability")];
  "Brand"?: string;
  "BrowseNodeId"?: string;
  "Condition"?: typeof import("./Condition")[keyof typeof import("./Condition")];
  "CurrencyOfPreference"?: string;
  "DeliveryFlags"?: Array<typeof import("./DeliveryFlag")[keyof typeof import("./DeliveryFlag")]>;
  "ItemCount"?: number;
  "ItemPage"?: number;
  "Keywords"?: string;
  "LanguagesOfPreference"?: Array<string>;
  "Marketplace"?: string;
  "MaxPrice"?: InstanceType<typeof import("./MaxPrice")>;
  "Merchant"?: typeof import("./Merchant")[keyof typeof import("./Merchant")];
  "MinPrice"?: InstanceType<typeof import("./MinPrice")>;
  "MinReviewsRating"?: InstanceType<typeof import("./MinReviewsRating")>;
  "MinSavingPercent"?: InstanceType<typeof import("./MinSavingPercent")>;
  "OfferCount"?: InstanceType<typeof import("./OfferCount")>;
  "PartnerTag"?: string;
  "PartnerType"?: typeof import("./PartnerType")[keyof typeof import("./PartnerType")];
  "Properties"?: InstanceType<typeof import("./Properties")>;
  "Resources"?: Array<typeof import("./SearchItemsResource")[keyof typeof import("./SearchItemsResource")]>;
  "SearchIndex"?: string;
  "SortBy"?: typeof import("./SortBy")[keyof typeof import("./SortBy")];
  "Title"?: string;
  static constructFromObject(data: any, obj?: SearchItemsRequest): SearchItemsRequest;
}
export = SearchItemsRequest;
