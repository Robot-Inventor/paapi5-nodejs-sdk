// Auto-generated from src\model\GetBrowseNodesRequest.js
declare class GetBrowseNodesRequest {
  constructor(browseNodeIds: Array<string>, partnerTag: string, partnerType: typeof import("./PartnerType")[keyof typeof import("./PartnerType")]);
  "BrowseNodeIds"?: Array<string>;
  "LanguagesOfPreference"?: Array<string>;
  "Marketplace"?: string;
  "PartnerTag"?: string;
  "PartnerType"?: typeof import("./PartnerType")[keyof typeof import("./PartnerType")];
  "Resources"?: Array<typeof import("./GetBrowseNodesResource")[keyof typeof import("./GetBrowseNodesResource")]>;
  static constructFromObject(data: any, obj?: GetBrowseNodesRequest): GetBrowseNodesRequest;
}
export = GetBrowseNodesRequest;
