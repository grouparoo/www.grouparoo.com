import { Plugin } from "./index";

export const CalculatedProperty: Plugin = {
  name: "Calculated Property",
  description:
    "Grouparoo's Calculated Property plugin allows you to transform data from your warehouse before you export to various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
  priority: 0,
  slug: "calculated-property",
  logo: "calculated-property.png",
  primaryType: "source",
  otherTypes: [],
  category: "transform tool",
  badge: "",
  showLink: false,
  packageName: "@grouparoo/calculated-property",
  toDisplay: false,
};
