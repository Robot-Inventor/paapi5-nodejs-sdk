// Auto-generated from src\model\BrowseNode.js
declare class BrowseNode {
  constructor();
  "Ancestor"?: InstanceType<typeof import("./BrowseNodeAncestor")>;
  "Children"?: Array<InstanceType<typeof import("./BrowseNodeChild")>>;
  "ContextFreeName"?: string;
  "DisplayName"?: string;
  "Id"?: string;
  "IsRoot"?: boolean;
  "SalesRank"?: number;
  static constructFromObject(data: any, obj?: BrowseNode): BrowseNode;
}
export = BrowseNode;
