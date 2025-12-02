// Auto-generated from src\model\SearchItemsRequest.js
declare class SearchItemsRequest {
  constructor(partnerTag: string, partnerType: typeof import("./PartnerType").default[keyof typeof import("./PartnerType").default]);
  "Actor"?: string;
  "Artist"?: string;
  "Author"?: string;
  "Availability"?: typeof import("./Availability").default[keyof typeof import("./Availability").default];
  "Brand"?: string;
  "BrowseNodeId"?: string;
  "Condition"?: typeof import("./Condition").default[keyof typeof import("./Condition").default];
  "CurrencyOfPreference"?: string;
  "DeliveryFlags"?: Array<typeof import("./DeliveryFlag").default[keyof typeof import("./DeliveryFlag").default]>;
  "ItemCount"?: number;
  "ItemPage"?: number;
  "Keywords"?: string;
  "LanguagesOfPreference"?: Array<string>;
  "Marketplace"?: string;
  "MaxPrice"?: InstanceType<typeof import("./MaxPrice").default>;
  "Merchant"?: typeof import("./Merchant").default[keyof typeof import("./Merchant").default];
  "MinPrice"?: InstanceType<typeof import("./MinPrice").default>;
  "MinReviewsRating"?: InstanceType<typeof import("./MinReviewsRating").default>;
  "MinSavingPercent"?: InstanceType<typeof import("./MinSavingPercent").default>;
  "OfferCount"?: InstanceType<typeof import("./OfferCount").default>;
  "PartnerTag"?: string;
  "PartnerType"?: typeof import("./PartnerType").default[keyof typeof import("./PartnerType").default];
  "Properties"?: InstanceType<typeof import("./Properties").default>;
  "Resources"?: Array<typeof import("./SearchItemsResource").default[keyof typeof import("./SearchItemsResource").default]>;
  "SearchIndex"?: string;
  "SortBy"?: typeof import("./SortBy").default[keyof typeof import("./SortBy").default];
  "Title"?: string;
  static constructFromObject(data: any, obj?: SearchItemsRequest): SearchItemsRequest;
}
export default SearchItemsRequest;
