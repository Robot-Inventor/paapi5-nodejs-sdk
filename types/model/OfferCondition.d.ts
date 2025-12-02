// Auto-generated from src\model\OfferCondition.js
declare class OfferCondition {
  constructor();
  "DisplayValue"?: string;
  "Label"?: string;
  "Locale"?: string;
  "Value"?: string;
  "SubCondition"?: InstanceType<typeof import("./OfferSubCondition").default>;
  "ConditionNote"?: InstanceType<typeof import("./OfferConditionNote").default>;
  static constructFromObject(data: any, obj?: OfferCondition): OfferCondition;
}
export default OfferCondition;
