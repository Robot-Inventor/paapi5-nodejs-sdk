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
import ApiClient from '../ApiClient.js';
import Condition from './Condition.js';
import GetItemsResource from './GetItemsResource.js';
import ItemIdType from './ItemIdType.js';
import Merchant from './Merchant.js';
import OfferCount from './OfferCount.js';
import PartnerType from './PartnerType.js';
import Properties from './Properties.js';

const exports = (() => {
'use strict';




  /**
   * The GetItemsRequest model module.
   * @module model/GetItemsRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GetItemsRequest</code>.
   * @alias module:model/GetItemsRequest
   * @class
   * @param itemIds {Array.<String>} 
   * @param partnerTag {String} 
   * @param partnerType {module:model/PartnerType} 
   */
  var exports = function(itemIds, partnerTag, partnerType) {
    var _this = this;



    _this['ItemIds'] = itemIds;





    _this['PartnerTag'] = partnerTag;
    _this['PartnerType'] = partnerType;


  };

  /**
   * Constructs a <code>GetItemsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetItemsRequest} obj Optional instance to populate.
   * @return {module:model/GetItemsRequest} The populated <code>GetItemsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Condition')) {
        obj['Condition'] = Condition.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('CurrencyOfPreference')) {
        obj['CurrencyOfPreference'] = ApiClient.convertToType(data['CurrencyOfPreference'], 'String');
      }
      if (data.hasOwnProperty('ItemIds')) {
        obj['ItemIds'] = ApiClient.convertToType(data['ItemIds'], ['String']);
      }
      if (data.hasOwnProperty('ItemIdType')) {
        obj['ItemIdType'] = ItemIdType.constructFromObject(data['ItemIdType']);
      }
      if (data.hasOwnProperty('LanguagesOfPreference')) {
        obj['LanguagesOfPreference'] = ApiClient.convertToType(data['LanguagesOfPreference'], ['String']);
      }
      if (data.hasOwnProperty('Marketplace')) {
        obj['Marketplace'] = ApiClient.convertToType(data['Marketplace'], 'String');
      }
      if (data.hasOwnProperty('Merchant')) {
        obj['Merchant'] = Merchant.constructFromObject(data['Merchant']);
      }
      if (data.hasOwnProperty('OfferCount')) {
        obj['OfferCount'] = OfferCount.constructFromObject(data['OfferCount']);
      }
      if (data.hasOwnProperty('PartnerTag')) {
        obj['PartnerTag'] = ApiClient.convertToType(data['PartnerTag'], 'String');
      }
      if (data.hasOwnProperty('PartnerType')) {
        obj['PartnerType'] = PartnerType.constructFromObject(data['PartnerType']);
      }
      if (data.hasOwnProperty('Properties')) {
        obj['Properties'] = Properties.constructFromObject(data['Properties']);
      }
      if (data.hasOwnProperty('Resources')) {
        obj['Resources'] = ApiClient.convertToType(data['Resources'], [GetItemsResource]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Condition} Condition
   */
  exports.prototype['Condition'] = undefined;
  /**
   * @member {String} CurrencyOfPreference
   */
  exports.prototype['CurrencyOfPreference'] = undefined;
  /**
   * @member {Array.<String>} ItemIds
   */
  exports.prototype['ItemIds'] = undefined;
  /**
   * @member {module:model/ItemIdType} ItemIdType
   */
  exports.prototype['ItemIdType'] = undefined;
  /**
   * @member {Array.<String>} LanguagesOfPreference
   */
  exports.prototype['LanguagesOfPreference'] = undefined;
  /**
   * @member {String} Marketplace
   */
  exports.prototype['Marketplace'] = undefined;
  /**
   * @member {module:model/Merchant} Merchant
   */
  exports.prototype['Merchant'] = undefined;
  /**
   * @member {module:model/OfferCount} OfferCount
   */
  exports.prototype['OfferCount'] = undefined;
  /**
   * @member {String} PartnerTag
   */
  exports.prototype['PartnerTag'] = undefined;
  /**
   * @member {module:model/PartnerType} PartnerType
   */
  exports.prototype['PartnerType'] = undefined;
  /**
   * @member {module:model/Properties} Properties
   */
  exports.prototype['Properties'] = undefined;
  /**
   * @member {Array.<module:model/GetItemsResource>} Resources
   */
  exports.prototype['Resources'] = undefined;



  
  return exports;
})();

export default exports;
