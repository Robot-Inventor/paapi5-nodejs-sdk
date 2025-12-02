/**
 * Copyright 2024 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

 /**
 * ProductAdvertisingAPI
 * https://webservices.amazon.com/paapi5/documentation/index.html
 *
 */
import ApiClient from './ApiClient.js';
import Availability from './model/Availability.js';
import BigDecimal from './model/BigDecimal.js';
import BrowseNode from './model/BrowseNode.js';
import BrowseNodeAncestor from './model/BrowseNodeAncestor.js';
import BrowseNodeChild from './model/BrowseNodeChild.js';
import BrowseNodeInfo from './model/BrowseNodeInfo.js';
import BrowseNodesResult from './model/BrowseNodesResult.js';
import ByLineInfo from './model/ByLineInfo.js';
import Classifications from './model/Classifications.js';
import Condition from './model/Condition.js';
import ContentInfo from './model/ContentInfo.js';
import ContentRating from './model/ContentRating.js';
import Contributor from './model/Contributor.js';
import CustomerReviews from './model/CustomerReviews.js';
import DealDetails from './model/DealDetails.js';
import DeliveryFlag from './model/DeliveryFlag.js';
import DimensionBasedAttribute from './model/DimensionBasedAttribute.js';
import DurationPrice from './model/DurationPrice.js';
import ErrorData from './model/ErrorData.js';
import ExternalIds from './model/ExternalIds.js';
import GetBrowseNodesRequest from './model/GetBrowseNodesRequest.js';
import GetBrowseNodesResource from './model/GetBrowseNodesResource.js';
import GetBrowseNodesResponse from './model/GetBrowseNodesResponse.js';
import GetItemsRequest from './model/GetItemsRequest.js';
import GetItemsResource from './model/GetItemsResource.js';
import GetItemsResponse from './model/GetItemsResponse.js';
import GetVariationsRequest from './model/GetVariationsRequest.js';
import GetVariationsResource from './model/GetVariationsResource.js';
import GetVariationsResponse from './model/GetVariationsResponse.js';
import ImageSize from './model/ImageSize.js';
import ImageType from './model/ImageType.js';
import Images from './model/Images.js';
import Item from './model/Item.js';
import ItemIdType from './model/ItemIdType.js';
import ItemInfo from './model/ItemInfo.js';
import ItemsResult from './model/ItemsResult.js';
import LanguageType from './model/LanguageType.js';
import Languages from './model/Languages.js';
import ManufactureInfo from './model/ManufactureInfo.js';
import MaxPrice from './model/MaxPrice.js';
import Merchant from './model/Merchant.js';
import MinPrice from './model/MinPrice.js';
import MinReviewsRating from './model/MinReviewsRating.js';
import MinSavingPercent from './model/MinSavingPercent.js';
import Money from './model/Money.js';
import MultiValuedAttribute from './model/MultiValuedAttribute.js';
import OfferAvailability from './model/OfferAvailability.js';
import OfferAvailabilityV2 from './model/OfferAvailabilityV2.js';
import OfferCondition from './model/OfferCondition.js';
import OfferConditionNote from './model/OfferConditionNote.js';
import OfferConditionV2 from './model/OfferConditionV2.js';
import OfferCount from './model/OfferCount.js';
import OfferDeliveryInfo from './model/OfferDeliveryInfo.js';
import OfferListing from './model/OfferListing.js';
import OfferListingV2 from './model/OfferListingV2.js';
import OfferListings from './model/OfferListings.js';
import OfferListingsV2 from './model/OfferListingsV2.js';
import OfferLoyaltyPoints from './model/OfferLoyaltyPoints.js';
import OfferLoyaltyPointsV2 from './model/OfferLoyaltyPointsV2.js';
import OfferMerchantInfo from './model/OfferMerchantInfo.js';
import OfferMerchantInfoV2 from './model/OfferMerchantInfoV2.js';
import OfferPrice from './model/OfferPrice.js';
import OfferPriceV2 from './model/OfferPriceV2.js';
import OfferProgramEligibility from './model/OfferProgramEligibility.js';
import OfferPromotion from './model/OfferPromotion.js';
import OfferSavingBasis from './model/OfferSavingBasis.js';
import OfferSavings from './model/OfferSavings.js';
import OfferSavingsV2 from './model/OfferSavingsV2.js';
import OfferShippingCharge from './model/OfferShippingCharge.js';
import OfferSubCondition from './model/OfferSubCondition.js';
import OfferSummary from './model/OfferSummary.js';
import OfferType from './model/OfferType.js';
import Offers from './model/Offers.js';
import OffersV2 from './model/OffersV2.js';
import PartnerType from './model/PartnerType.js';
import Price from './model/Price.js';
import PriceType from './model/PriceType.js';
import ProductAdvertisingAPIClientException from './model/ProductAdvertisingAPIClientException.js';
import ProductAdvertisingAPIServiceException from './model/ProductAdvertisingAPIServiceException.js';
import ProductInfo from './model/ProductInfo.js';
import Properties from './model/Properties.js';
import Rating from './model/Rating.js';
import Refinement from './model/Refinement.js';
import RefinementBin from './model/RefinementBin.js';
import RentalOfferListing from './model/RentalOfferListing.js';
import RentalOffers from './model/RentalOffers.js';
import SavingBasisType from './model/SavingBasisType.js';
import SearchIndex from './model/SearchIndex.js';
import SearchItemsRequest from './model/SearchItemsRequest.js';
import SearchItemsResource from './model/SearchItemsResource.js';
import SearchItemsResponse from './model/SearchItemsResponse.js';
import SearchRefinements from './model/SearchRefinements.js';
import SearchResult from './model/SearchResult.js';
import SingleBooleanValuedAttribute from './model/SingleBooleanValuedAttribute.js';
import SingleIntegerValuedAttribute from './model/SingleIntegerValuedAttribute.js';
import SingleStringValuedAttribute from './model/SingleStringValuedAttribute.js';
import SortBy from './model/SortBy.js';
import TechnicalInfo from './model/TechnicalInfo.js';
import TradeInInfo from './model/TradeInInfo.js';
import TradeInPrice from './model/TradeInPrice.js';
import UnitBasedAttribute from './model/UnitBasedAttribute.js';
import VariationAttribute from './model/VariationAttribute.js';
import VariationDimension from './model/VariationDimension.js';
import VariationSummary from './model/VariationSummary.js';
import VariationsResult from './model/VariationsResult.js';
import WebsiteSalesRank from './model/WebsiteSalesRank.js';
import DefaultApi from './api/DefaultApi.js';

const exports = (() => {
'use strict';

  /**
   * ProductAdvertisingAPI 5.0 NodeJS SDK.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var ProductAdvertisingAPIv1 = require('index'); // See note below*.
   * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Availability model constructor.
     * @property {module:model/Availability}
     */
    Availability: Availability,
    /**
     * The BigDecimal model constructor.
     * @property {module:model/BigDecimal}
     */
    BigDecimal: BigDecimal,
    /**
     * The BrowseNode model constructor.
     * @property {module:model/BrowseNode}
     */
    BrowseNode: BrowseNode,
    /**
     * The BrowseNodeAncestor model constructor.
     * @property {module:model/BrowseNodeAncestor}
     */
    BrowseNodeAncestor: BrowseNodeAncestor,
    /**
     * The BrowseNodeChild model constructor.
     * @property {module:model/BrowseNodeChild}
     */
    BrowseNodeChild: BrowseNodeChild,
    /**
     * The BrowseNodeInfo model constructor.
     * @property {module:model/BrowseNodeInfo}
     */
    BrowseNodeInfo: BrowseNodeInfo,
    /**
     * The BrowseNodesResult model constructor.
     * @property {module:model/BrowseNodesResult}
     */
    BrowseNodesResult: BrowseNodesResult,
    /**
     * The ByLineInfo model constructor.
     * @property {module:model/ByLineInfo}
     */
    ByLineInfo: ByLineInfo,
    /**
     * The Classifications model constructor.
     * @property {module:model/Classifications}
     */
    Classifications: Classifications,
    /**
     * The Condition model constructor.
     * @property {module:model/Condition}
     */
    Condition: Condition,
    /**
     * The ContentInfo model constructor.
     * @property {module:model/ContentInfo}
     */
    ContentInfo: ContentInfo,
    /**
     * The ContentRating model constructor.
     * @property {module:model/ContentRating}
     */
    ContentRating: ContentRating,
    /**
     * The Contributor model constructor.
     * @property {module:model/Contributor}
     */
    Contributor: Contributor,
    /**
     * The CustomerReviews model constructor.
     * @property {module:model/CustomerReviews}
     */
    CustomerReviews: CustomerReviews,
    /**
     * The DealDetails model constructor.
     * @property {module:model/DealDetails}
     */
    DealDetails: DealDetails,
    /**
     * The DeliveryFlag model constructor.
     * @property {module:model/DeliveryFlag}
     */
    DeliveryFlag: DeliveryFlag,
    /**
     * The DimensionBasedAttribute model constructor.
     * @property {module:model/DimensionBasedAttribute}
     */
    DimensionBasedAttribute: DimensionBasedAttribute,
    /**
     * The DurationPrice model constructor.
     * @property {module:model/DurationPrice}
     */
    DurationPrice: DurationPrice,
    /**
     * The ErrorData model constructor.
     * @property {module:model/ErrorData}
     */
    ErrorData: ErrorData,
    /**
     * The ExternalIds model constructor.
     * @property {module:model/ExternalIds}
     */
    ExternalIds: ExternalIds,
    /**
     * The GetBrowseNodesRequest model constructor.
     * @property {module:model/GetBrowseNodesRequest}
     */
    GetBrowseNodesRequest: GetBrowseNodesRequest,
    /**
     * The GetBrowseNodesResource model constructor.
     * @property {module:model/GetBrowseNodesResource}
     */
    GetBrowseNodesResource: GetBrowseNodesResource,
    /**
     * The GetBrowseNodesResponse model constructor.
     * @property {module:model/GetBrowseNodesResponse}
     */
    GetBrowseNodesResponse: GetBrowseNodesResponse,
    /**
     * The GetItemsRequest model constructor.
     * @property {module:model/GetItemsRequest}
     */
    GetItemsRequest: GetItemsRequest,
    /**
     * The GetItemsResource model constructor.
     * @property {module:model/GetItemsResource}
     */
    GetItemsResource: GetItemsResource,
    /**
     * The GetItemsResponse model constructor.
     * @property {module:model/GetItemsResponse}
     */
    GetItemsResponse: GetItemsResponse,
    /**
     * The GetVariationsRequest model constructor.
     * @property {module:model/GetVariationsRequest}
     */
    GetVariationsRequest: GetVariationsRequest,
    /**
     * The GetVariationsResource model constructor.
     * @property {module:model/GetVariationsResource}
     */
    GetVariationsResource: GetVariationsResource,
    /**
     * The GetVariationsResponse model constructor.
     * @property {module:model/GetVariationsResponse}
     */
    GetVariationsResponse: GetVariationsResponse,
    /**
     * The ImageSize model constructor.
     * @property {module:model/ImageSize}
     */
    ImageSize: ImageSize,
    /**
     * The ImageType model constructor.
     * @property {module:model/ImageType}
     */
    ImageType: ImageType,
    /**
     * The Images model constructor.
     * @property {module:model/Images}
     */
    Images: Images,
    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item: Item,
    /**
     * The ItemIdType model constructor.
     * @property {module:model/ItemIdType}
     */
    ItemIdType: ItemIdType,
    /**
     * The ItemInfo model constructor.
     * @property {module:model/ItemInfo}
     */
    ItemInfo: ItemInfo,
    /**
     * The ItemsResult model constructor.
     * @property {module:model/ItemsResult}
     */
    ItemsResult: ItemsResult,
    /**
     * The LanguageType model constructor.
     * @property {module:model/LanguageType}
     */
    LanguageType: LanguageType,
    /**
     * The Languages model constructor.
     * @property {module:model/Languages}
     */
    Languages: Languages,
    /**
     * The ManufactureInfo model constructor.
     * @property {module:model/ManufactureInfo}
     */
    ManufactureInfo: ManufactureInfo,
    /**
     * The MaxPrice model constructor.
     * @property {module:model/MaxPrice}
     */
    MaxPrice: MaxPrice,
    /**
     * The Merchant model constructor.
     * @property {module:model/Merchant}
     */
    Merchant: Merchant,
    /**
     * The MinPrice model constructor.
     * @property {module:model/MinPrice}
     */
    MinPrice: MinPrice,
    /**
     * The MinReviewsRating model constructor.
     * @property {module:model/MinReviewsRating}
     */
    MinReviewsRating: MinReviewsRating,
    /**
     * The MinSavingPercent model constructor.
     * @property {module:model/MinSavingPercent}
     */
    MinSavingPercent: MinSavingPercent,
    /**
     * The Money model constructor.
     * @property {module:model/Money}
     */
    Money: Money,
    /**
     * The MultiValuedAttribute model constructor.
     * @property {module:model/MultiValuedAttribute}
     */
    MultiValuedAttribute: MultiValuedAttribute,
    /**
     * The OfferAvailability model constructor.
     * @property {module:model/OfferAvailability}
     */
    OfferAvailability: OfferAvailability,
    /**
     * The OfferAvailabilityV2 model constructor.
     * @property {module:model/OfferAvailabilityV2}
     */
    OfferAvailabilityV2: OfferAvailabilityV2,
    /**
     * The OfferCondition model constructor.
     * @property {module:model/OfferCondition}
     */
    OfferCondition: OfferCondition,
    /**
     * The OfferConditionNote model constructor.
     * @property {module:model/OfferConditionNote}
     */
    OfferConditionNote: OfferConditionNote,
    /**
     * The OfferConditionV2 model constructor.
     * @property {module:model/OfferConditionV2}
     */
    OfferConditionV2: OfferConditionV2,
    /**
     * The OfferCount model constructor.
     * @property {module:model/OfferCount}
     */
    OfferCount: OfferCount,
    /**
     * The OfferDeliveryInfo model constructor.
     * @property {module:model/OfferDeliveryInfo}
     */
    OfferDeliveryInfo: OfferDeliveryInfo,
    /**
     * The OfferListing model constructor.
     * @property {module:model/OfferListing}
     */
    OfferListing: OfferListing,
    /**
     * The OfferListingV2 model constructor.
     * @property {module:model/OfferListingV2}
     */
    OfferListingV2: OfferListingV2,
    /**
     * The OfferListings model constructor.
     * @property {module:model/OfferListings}
     */
    OfferListings: OfferListings,
    /**
     * The OfferListingsV2 model constructor.
     * @property {module:model/OfferListingsV2}
     */
    OfferListingsV2: OfferListingsV2,
    /**
     * The OfferLoyaltyPoints model constructor.
     * @property {module:model/OfferLoyaltyPoints}
     */
    OfferLoyaltyPoints: OfferLoyaltyPoints,
    /**
     * The OfferLoyaltyPointsV2 model constructor.
     * @property {module:model/OfferLoyaltyPointsV2}
     */
    OfferLoyaltyPointsV2: OfferLoyaltyPointsV2,
    /**
     * The OfferMerchantInfo model constructor.
     * @property {module:model/OfferMerchantInfo}
     */
    OfferMerchantInfo: OfferMerchantInfo,
    /**
     * The OfferMerchantInfoV2 model constructor.
     * @property {module:model/OfferMerchantInfoV2}
     */
    OfferMerchantInfoV2: OfferMerchantInfoV2,
    /**
     * The OfferPrice model constructor.
     * @property {module:model/OfferPrice}
     */
    OfferPrice: OfferPrice,
    /**
     * The OfferPriceV2 model constructor.
     * @property {module:model/OfferPriceV2}
     */
    OfferPriceV2: OfferPriceV2,
    /**
     * The OfferProgramEligibility model constructor.
     * @property {module:model/OfferProgramEligibility}
     */
    OfferProgramEligibility: OfferProgramEligibility,
    /**
     * The OfferPromotion model constructor.
     * @property {module:model/OfferPromotion}
     */
    OfferPromotion: OfferPromotion,
    /**
     * The OfferSavingBasis model constructor.
     * @property {module:model/OfferSavingBasis}
     */
    OfferSavingBasis: OfferSavingBasis,
    /**
     * The OfferSavings model constructor.
     * @property {module:model/OfferSavings}
     */
    OfferSavings: OfferSavings,
    /**
     * The OfferSavingsV2 model constructor.
     * @property {module:model/OfferSavingsV2}
     */
    OfferSavingsV2: OfferSavingsV2,
    /**
     * The OfferShippingCharge model constructor.
     * @property {module:model/OfferShippingCharge}
     */
    OfferShippingCharge: OfferShippingCharge,
    /**
     * The OfferSubCondition model constructor.
     * @property {module:model/OfferSubCondition}
     */
    OfferSubCondition: OfferSubCondition,
    /**
     * The OfferSummary model constructor.
     * @property {module:model/OfferSummary}
     */
    OfferSummary: OfferSummary,
    /**
     * The OfferType model constructor.
     * @property {module:model/OfferType}
     */
    OfferType: OfferType,
    /**
     * The Offers model constructor.
     * @property {module:model/Offers}
     */
    Offers: Offers,
    /**
     * The OffersV2 model constructor.
     * @property {module:model/OffersV2}
     */
    OffersV2: OffersV2,
    /**
     * The PartnerType model constructor.
     * @property {module:model/PartnerType}
     */
    PartnerType: PartnerType,
    /**
     * The Price model constructor.
     * @property {module:model/Price}
     */
    Price: Price,
    /**
     * The PriceType model constructor.
     * @property {module:model/PriceType}
     */
    PriceType: PriceType,
    /**
     * The ProductAdvertisingAPIClientException model constructor.
     * @property {module:model/ProductAdvertisingAPIClientException}
     */
    ProductAdvertisingAPIClientException: ProductAdvertisingAPIClientException,
    /**
     * The ProductAdvertisingAPIServiceException model constructor.
     * @property {module:model/ProductAdvertisingAPIServiceException}
     */
    ProductAdvertisingAPIServiceException: ProductAdvertisingAPIServiceException,
    /**
     * The ProductInfo model constructor.
     * @property {module:model/ProductInfo}
     */
    ProductInfo: ProductInfo,
    /**
     * The Properties model constructor.
     * @property {module:model/Properties}
     */
    Properties: Properties,
    /**
     * The Rating model constructor.
     * @property {module:model/Rating}
     */
    Rating: Rating,
    /**
     * The Refinement model constructor.
     * @property {module:model/Refinement}
     */
    Refinement: Refinement,
    /**
     * The RefinementBin model constructor.
     * @property {module:model/RefinementBin}
     */
    RefinementBin: RefinementBin,
    /**
     * The RentalOfferListing model constructor.
     * @property {module:model/RentalOfferListing}
     */
    RentalOfferListing: RentalOfferListing,
    /**
     * The RentalOffers model constructor.
     * @property {module:model/RentalOffers}
     */
    RentalOffers: RentalOffers,
    /**
     * The SavingBasisType model constructor.
     * @property {module:model/SavingBasisType}
     */
    SavingBasisType: SavingBasisType,
    /**
     * The SearchIndex model constructor.
     * @property {module:model/SearchIndex}
     */
    SearchIndex: SearchIndex,
    /**
     * The SearchItemsRequest model constructor.
     * @property {module:model/SearchItemsRequest}
     */
    SearchItemsRequest: SearchItemsRequest,
    /**
     * The SearchItemsResource model constructor.
     * @property {module:model/SearchItemsResource}
     */
    SearchItemsResource: SearchItemsResource,
    /**
     * The SearchItemsResponse model constructor.
     * @property {module:model/SearchItemsResponse}
     */
    SearchItemsResponse: SearchItemsResponse,
    /**
     * The SearchRefinements model constructor.
     * @property {module:model/SearchRefinements}
     */
    SearchRefinements: SearchRefinements,
    /**
     * The SearchResult model constructor.
     * @property {module:model/SearchResult}
     */
    SearchResult: SearchResult,
    /**
     * The SingleBooleanValuedAttribute model constructor.
     * @property {module:model/SingleBooleanValuedAttribute}
     */
    SingleBooleanValuedAttribute: SingleBooleanValuedAttribute,
    /**
     * The SingleIntegerValuedAttribute model constructor.
     * @property {module:model/SingleIntegerValuedAttribute}
     */
    SingleIntegerValuedAttribute: SingleIntegerValuedAttribute,
    /**
     * The SingleStringValuedAttribute model constructor.
     * @property {module:model/SingleStringValuedAttribute}
     */
    SingleStringValuedAttribute: SingleStringValuedAttribute,
    /**
     * The SortBy model constructor.
     * @property {module:model/SortBy}
     */
    SortBy: SortBy,
    /**
     * The TechnicalInfo model constructor.
     * @property {module:model/TechnicalInfo}
     */
    TechnicalInfo: TechnicalInfo,
    /**
     * The TradeInInfo model constructor.
     * @property {module:model/TradeInInfo}
     */
    TradeInInfo: TradeInInfo,
    /**
     * The TradeInPrice model constructor.
     * @property {module:model/TradeInPrice}
     */
    TradeInPrice: TradeInPrice,
    /**
     * The UnitBasedAttribute model constructor.
     * @property {module:model/UnitBasedAttribute}
     */
    UnitBasedAttribute: UnitBasedAttribute,
    /**
     * The VariationAttribute model constructor.
     * @property {module:model/VariationAttribute}
     */
    VariationAttribute: VariationAttribute,
    /**
     * The VariationDimension model constructor.
     * @property {module:model/VariationDimension}
     */
    VariationDimension: VariationDimension,
    /**
     * The VariationSummary model constructor.
     * @property {module:model/VariationSummary}
     */
    VariationSummary: VariationSummary,
    /**
     * The VariationsResult model constructor.
     * @property {module:model/VariationsResult}
     */
    VariationsResult: VariationsResult,
    /**
     * The WebsiteSalesRank model constructor.
     * @property {module:model/WebsiteSalesRank}
     */
    WebsiteSalesRank: WebsiteSalesRank,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  
  return exports;
})();

export default exports;
