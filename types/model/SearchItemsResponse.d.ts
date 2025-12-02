// Auto-generated from src\model\SearchItemsResponse.js
declare class SearchItemsResponse {
  constructor();
  "SearchResult"?: InstanceType<typeof import("./SearchResult").default>;
  "Errors"?: Array<InstanceType<typeof import("./ErrorData").default>>;
  static constructFromObject(data: any, obj?: SearchItemsResponse): SearchItemsResponse;
}
export default SearchItemsResponse;
