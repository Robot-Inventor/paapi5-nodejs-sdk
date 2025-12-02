// Auto-generated from src\model\Item.js
declare class Item {
  constructor();
  "ASIN"?: string;
  "BrowseNodeInfo"?: InstanceType<typeof import("./BrowseNodeInfo").default>;
  "CustomerReviews"?: InstanceType<typeof import("./CustomerReviews").default>;
  "DetailPageURL"?: string;
  "Images"?: InstanceType<typeof import("./Images").default>;
  "ItemInfo"?: InstanceType<typeof import("./ItemInfo").default>;
  "Offers"?: InstanceType<typeof import("./Offers").default>;
  "OffersV2"?: InstanceType<typeof import("./OffersV2").default>;
  "ParentASIN"?: string;
  "RentalOffers"?: InstanceType<typeof import("./RentalOffers").default>;
  "Score"?: number;
  "VariationAttributes"?: Array<InstanceType<typeof import("./VariationAttribute").default>>;
  static constructFromObject(data: any, obj?: Item): Item;
}
export default Item;
