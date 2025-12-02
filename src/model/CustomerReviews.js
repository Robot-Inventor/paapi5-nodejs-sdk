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
import Rating from './Rating.js';

const exports = (() => {
'use strict';




  /**
   * The CustomerReviews model module.
   * @module model/CustomerReviews
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CustomerReviews</code>.
   * @alias module:model/CustomerReviews
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CustomerReviews</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CustomerReviews} obj Optional instance to populate.
   * @return {module:model/CustomerReviews} The populated <code>CustomerReviews</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Number');
      }
      if (data.hasOwnProperty('StarRating')) {
        obj['StarRating'] = Rating.constructFromObject(data['StarRating']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} Count
   */
  exports.prototype['Count'] = undefined;
  /**
   * @member {module:model/Rating} StarRating
   */
  exports.prototype['StarRating'] = undefined;



  
  return exports;
})();

export default exports;
