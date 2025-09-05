// Auto-generated from src\model\OfferCondition.js
declare class OfferCondition {
  constructor();
  "DisplayValue"?: string;
  "Label"?: string;
  "Locale"?: string;
  "Value"?: string;
  "SubCondition"?: InstanceType<typeof import("./OfferSubCondition")>;
  "ConditionNote"?: InstanceType<typeof import("./OfferConditionNote")>;
  static constructFromObject(data: any, obj?: OfferCondition): OfferCondition;
}
export = OfferCondition;
