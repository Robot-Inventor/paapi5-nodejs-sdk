// Auto-generated from src\model\Money.js
declare class Money {
  constructor();
  "Amount"?: InstanceType<typeof import("./BigDecimal").default>;
  "Currency"?: string;
  "DisplayAmount"?: string;
  static constructFromObject(data: any, obj?: Money): Money;
}
export default Money;
