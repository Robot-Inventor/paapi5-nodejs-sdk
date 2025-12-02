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
import OfferListing from './OfferListing.js';
import OfferSummary from './OfferSummary.js';

const exports = (() => {
'use strict';




  /**
   * The Offers model module.
   * @module model/Offers
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Offers</code>.
   * @alias module:model/Offers
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Offers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Offers} obj Optional instance to populate.
   * @return {module:model/Offers} The populated <code>Offers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Listings')) {
        obj['Listings'] = ApiClient.convertToType(data['Listings'], [OfferListing]);
      }
      if (data.hasOwnProperty('Summaries')) {
        obj['Summaries'] = ApiClient.convertToType(data['Summaries'], [OfferSummary]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/OfferListing>} Listings
   */
  exports.prototype['Listings'] = undefined;
  /**
   * @member {Array.<module:model/OfferSummary>} Summaries
   */
  exports.prototype['Summaries'] = undefined;



  
  return exports;
})();

export default exports;
