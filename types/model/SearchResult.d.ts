// Auto-generated from src\model\SearchResult.js
declare class SearchResult {
  constructor();
  "TotalResultCount"?: number;
  "SearchURL"?: string;
  "Items"?: Array<InstanceType<typeof import("./Item")>>;
  "SearchRefinements"?: InstanceType<typeof import("./SearchRefinements")>;
  static constructFromObject(data: any, obj?: SearchResult): SearchResult;
}
export = SearchResult;
