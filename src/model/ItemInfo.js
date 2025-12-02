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
import ByLineInfo from './ByLineInfo.js';
import Classifications from './Classifications.js';
import ContentInfo from './ContentInfo.js';
import ContentRating from './ContentRating.js';
import ExternalIds from './ExternalIds.js';
import ManufactureInfo from './ManufactureInfo.js';
import MultiValuedAttribute from './MultiValuedAttribute.js';
import ProductInfo from './ProductInfo.js';
import SingleStringValuedAttribute from './SingleStringValuedAttribute.js';
import TechnicalInfo from './TechnicalInfo.js';
import TradeInInfo from './TradeInInfo.js';

const exports = (() => {
'use strict';




  /**
   * The ItemInfo model module.
   * @module model/ItemInfo
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ItemInfo</code>.
   * @alias module:model/ItemInfo
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>ItemInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemInfo} obj Optional instance to populate.
   * @return {module:model/ItemInfo} The populated <code>ItemInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ByLineInfo')) {
        obj['ByLineInfo'] = ByLineInfo.constructFromObject(data['ByLineInfo']);
      }
      if (data.hasOwnProperty('Classifications')) {
        obj['Classifications'] = Classifications.constructFromObject(data['Classifications']);
      }
      if (data.hasOwnProperty('ContentInfo')) {
        obj['ContentInfo'] = ContentInfo.constructFromObject(data['ContentInfo']);
      }
      if (data.hasOwnProperty('ContentRating')) {
        obj['ContentRating'] = ContentRating.constructFromObject(data['ContentRating']);
      }
      if (data.hasOwnProperty('ExternalIds')) {
        obj['ExternalIds'] = ExternalIds.constructFromObject(data['ExternalIds']);
      }
      if (data.hasOwnProperty('Features')) {
        obj['Features'] = MultiValuedAttribute.constructFromObject(data['Features']);
      }
      if (data.hasOwnProperty('ManufactureInfo')) {
        obj['ManufactureInfo'] = ManufactureInfo.constructFromObject(data['ManufactureInfo']);
      }
      if (data.hasOwnProperty('ProductInfo')) {
        obj['ProductInfo'] = ProductInfo.constructFromObject(data['ProductInfo']);
      }
      if (data.hasOwnProperty('TechnicalInfo')) {
        obj['TechnicalInfo'] = TechnicalInfo.constructFromObject(data['TechnicalInfo']);
      }
      if (data.hasOwnProperty('Title')) {
        obj['Title'] = SingleStringValuedAttribute.constructFromObject(data['Title']);
      }
      if (data.hasOwnProperty('TradeInInfo')) {
        obj['TradeInInfo'] = TradeInInfo.constructFromObject(data['TradeInInfo']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ByLineInfo} ByLineInfo
   */
  exports.prototype['ByLineInfo'] = undefined;
  /**
   * @member {module:model/Classifications} Classifications
   */
  exports.prototype['Classifications'] = undefined;
  /**
   * @member {module:model/ContentInfo} ContentInfo
   */
  exports.prototype['ContentInfo'] = undefined;
  /**
   * @member {module:model/ContentRating} ContentRating
   */
  exports.prototype['ContentRating'] = undefined;
  /**
   * @member {module:model/ExternalIds} ExternalIds
   */
  exports.prototype['ExternalIds'] = undefined;
  /**
   * @member {module:model/MultiValuedAttribute} Features
   */
  exports.prototype['Features'] = undefined;
  /**
   * @member {module:model/ManufactureInfo} ManufactureInfo
   */
  exports.prototype['ManufactureInfo'] = undefined;
  /**
   * @member {module:model/ProductInfo} ProductInfo
   */
  exports.prototype['ProductInfo'] = undefined;
  /**
   * @member {module:model/TechnicalInfo} TechnicalInfo
   */
  exports.prototype['TechnicalInfo'] = undefined;
  /**
   * @member {module:model/SingleStringValuedAttribute} Title
   */
  exports.prototype['Title'] = undefined;
  /**
   * @member {module:model/TradeInInfo} TradeInInfo
   */
  exports.prototype['TradeInInfo'] = undefined;



  
  return exports;
})();

export default exports;
