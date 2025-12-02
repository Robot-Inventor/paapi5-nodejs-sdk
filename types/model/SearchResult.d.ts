// Auto-generated from src\model\SearchResult.js
declare class SearchResult {
  constructor();
  "TotalResultCount"?: number;
  "SearchURL"?: string;
  "Items"?: Array<InstanceType<typeof import("./Item").default>>;
  "SearchRefinements"?: InstanceType<typeof import("./SearchRefinements").default>;
  static constructFromObject(data: any, obj?: SearchResult): SearchResult;
}
export default SearchResult;
