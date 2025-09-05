// Auto-generated typings for DefaultApi
declare class DefaultApi {
  constructor(apiClient?: import('../ApiClient'));

  getBrowseNodesWithHttpInfo(
    getBrowseNodesRequest: InstanceType<typeof import('../model/GetBrowseNodesRequest')>
  ): Promise<{ data: InstanceType<typeof import('../model/GetBrowseNodesResponse')>; response: any }>;

  getBrowseNodes(
    getBrowseNodesRequest: InstanceType<typeof import('../model/GetBrowseNodesRequest')>
  ): Promise<InstanceType<typeof import('../model/GetBrowseNodesResponse')>>;

  getItemsWithHttpInfo(
    getItemsRequest: InstanceType<typeof import('../model/GetItemsRequest')>
  ): Promise<{ data: InstanceType<typeof import('../model/GetItemsResponse')>; response: any }>;

  getItems(
    getItemsRequest: InstanceType<typeof import('../model/GetItemsRequest')>
  ): Promise<InstanceType<typeof import('../model/GetItemsResponse')>>;

  getVariationsWithHttpInfo(
    getVariationsRequest: InstanceType<typeof import('../model/GetVariationsRequest')>
  ): Promise<{ data: InstanceType<typeof import('../model/GetVariationsResponse')>; response: any }>;

  getVariations(
    getVariationsRequest: InstanceType<typeof import('../model/GetVariationsRequest')>
  ): Promise<InstanceType<typeof import('../model/GetVariationsResponse')>>;

  searchItemsWithHttpInfo(
    searchItemsRequest: InstanceType<typeof import('../model/SearchItemsRequest')>
  ): Promise<{ data: InstanceType<typeof import('../model/SearchItemsResponse')>; response: any }>;

  searchItems(
    searchItemsRequest: InstanceType<typeof import('../model/SearchItemsRequest')>
  ): Promise<InstanceType<typeof import('../model/SearchItemsResponse')>>;
}
export = DefaultApi;
