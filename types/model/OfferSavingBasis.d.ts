// Auto-generated from src\model\OfferSavingBasis.js
declare class OfferSavingBasis {
  constructor();
  "Money"?: InstanceType<typeof import("./Money").default>;
  "SavingBasisType"?: typeof import("./SavingBasisType").default[keyof typeof import("./SavingBasisType").default];
  "SavingBasisTypeLabel"?: string;
  static constructFromObject(data: any, obj?: OfferSavingBasis): OfferSavingBasis;
}
export default OfferSavingBasis;
