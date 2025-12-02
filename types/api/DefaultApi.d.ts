// Auto-generated typings for DefaultApi
declare class DefaultApi {
  constructor(apiClient?: import('../ApiClient').default);

  getBrowseNodesWithHttpInfo(
    getBrowseNodesRequest: InstanceType<typeof import('../model/GetBrowseNodesRequest').default>
  ): Promise<{ data: InstanceType<typeof import('../model/GetBrowseNodesResponse').default>; response: any }>;

  getBrowseNodes(
    getBrowseNodesRequest: InstanceType<typeof import('../model/GetBrowseNodesRequest').default>
  ): Promise<InstanceType<typeof import('../model/GetBrowseNodesResponse').default>>;

  getItemsWithHttpInfo(
    getItemsRequest: InstanceType<typeof import('../model/GetItemsRequest').default>
  ): Promise<{ data: InstanceType<typeof import('../model/GetItemsResponse').default>; response: any }>;

  getItems(
    getItemsRequest: InstanceType<typeof import('../model/GetItemsRequest').default>
  ): Promise<InstanceType<typeof import('../model/GetItemsResponse').default>>;

  getVariationsWithHttpInfo(
    getVariationsRequest: InstanceType<typeof import('../model/GetVariationsRequest').default>
  ): Promise<{ data: InstanceType<typeof import('../model/GetVariationsResponse').default>; response: any }>;

  getVariations(
    getVariationsRequest: InstanceType<typeof import('../model/GetVariationsRequest').default>
  ): Promise<InstanceType<typeof import('../model/GetVariationsResponse').default>>;

  searchItemsWithHttpInfo(
    searchItemsRequest: InstanceType<typeof import('../model/SearchItemsRequest').default>
  ): Promise<{ data: InstanceType<typeof import('../model/SearchItemsResponse').default>; response: any }>;

  searchItems(
    searchItemsRequest: InstanceType<typeof import('../model/SearchItemsRequest').default>
  ): Promise<InstanceType<typeof import('../model/SearchItemsResponse').default>>;
}
export default DefaultApi;
