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
import Item from './Item.js';
import SearchRefinements from './SearchRefinements.js';

const exports = (() => {
'use strict';




  /**
   * The SearchResult model module.
   * @module model/SearchResult
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SearchResult</code>.
   * @alias module:model/SearchResult
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResult} obj Optional instance to populate.
   * @return {module:model/SearchResult} The populated <code>SearchResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TotalResultCount')) {
        obj['TotalResultCount'] = ApiClient.convertToType(data['TotalResultCount'], 'Number');
      }
      if (data.hasOwnProperty('SearchURL')) {
        obj['SearchURL'] = ApiClient.convertToType(data['SearchURL'], 'String');
      }
      if (data.hasOwnProperty('Items')) {
        obj['Items'] = ApiClient.convertToType(data['Items'], [Item]);
      }
      if (data.hasOwnProperty('SearchRefinements')) {
        obj['SearchRefinements'] = SearchRefinements.constructFromObject(data['SearchRefinements']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} TotalResultCount
   */
  exports.prototype['TotalResultCount'] = undefined;
  /**
   * @member {String} SearchURL
   */
  exports.prototype['SearchURL'] = undefined;
  /**
   * @member {Array.<module:model/Item>} Items
   */
  exports.prototype['Items'] = undefined;
  /**
   * @member {module:model/SearchRefinements} SearchRefinements
   */
  exports.prototype['SearchRefinements'] = undefined;



  
  return exports;
})();

export default exports;
