// Auto-generated from src\model\SearchItemsResponse.js
declare class SearchItemsResponse {
  constructor();
  "SearchResult"?: InstanceType<typeof import("./SearchResult")>;
  "Errors"?: Array<InstanceType<typeof import("./ErrorData")>>;
  static constructFromObject(data: any, obj?: SearchItemsResponse): SearchItemsResponse;
}
export = SearchItemsResponse;
