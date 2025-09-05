// Auto-generated from src\model\Item.js
declare class Item {
  constructor();
  "ASIN"?: string;
  "BrowseNodeInfo"?: InstanceType<typeof import("./BrowseNodeInfo")>;
  "CustomerReviews"?: InstanceType<typeof import("./CustomerReviews")>;
  "DetailPageURL"?: string;
  "Images"?: InstanceType<typeof import("./Images")>;
  "ItemInfo"?: InstanceType<typeof import("./ItemInfo")>;
  "Offers"?: InstanceType<typeof import("./Offers")>;
  "OffersV2"?: InstanceType<typeof import("./OffersV2")>;
  "ParentASIN"?: string;
  "RentalOffers"?: InstanceType<typeof import("./RentalOffers")>;
  "Score"?: number;
  "VariationAttributes"?: Array<InstanceType<typeof import("./VariationAttribute")>>;
  static constructFromObject(data: any, obj?: Item): Item;
}
export = Item;
