// Auto-generated from src\model\GetBrowseNodesRequest.js
declare class GetBrowseNodesRequest {
  constructor(browseNodeIds: Array<string>, partnerTag: string, partnerType: typeof import("./PartnerType").default[keyof typeof import("./PartnerType").default]);
  "BrowseNodeIds"?: Array<string>;
  "LanguagesOfPreference"?: Array<string>;
  "Marketplace"?: string;
  "PartnerTag"?: string;
  "PartnerType"?: typeof import("./PartnerType").default[keyof typeof import("./PartnerType").default];
  "Resources"?: Array<typeof import("./GetBrowseNodesResource").default[keyof typeof import("./GetBrowseNodesResource").default]>;
  static constructFromObject(data: any, obj?: GetBrowseNodesRequest): GetBrowseNodesRequest;
}
export default GetBrowseNodesRequest;
