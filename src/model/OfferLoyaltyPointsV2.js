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

const exports = (() => {
'use strict';




  /**
   * The OfferLoyaltyPointsV2 model module.
   * @module model/OfferLoyaltyPointsV2
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OfferLoyaltyPointsV2</code>.
   * @alias module:model/OfferLoyaltyPointsV2
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>OfferLoyaltyPointsV2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferLoyaltyPointsV2} obj Optional instance to populate.
   * @return {module:model/OfferLoyaltyPointsV2} The populated <code>OfferLoyaltyPointsV2</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Points')) {
        obj['Points'] = ApiClient.convertToType(data['Points'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Points
   */
  exports.prototype['Points'] = undefined;



  
  return exports;
})();

export default exports;
