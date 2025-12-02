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
import OfferListingsV2 from './OfferListingsV2.js';

const exports = (() => {
'use strict';




  /**
   * The OffersV2 model module.
   * @module model/OffersV2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OffersV2</code>.
   * @alias module:model/OffersV2
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OffersV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OffersV2} obj Optional instance to populate.
   * @return {module:model/OffersV2} The populated <code>OffersV2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Listings')) {
        obj['Listings'] = OfferListingsV2.constructFromObject(data['Listings']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OfferListingsV2} Listings
   */
  exports.prototype['Listings'] = undefined;



  
  return exports;
})();

export default exports;
