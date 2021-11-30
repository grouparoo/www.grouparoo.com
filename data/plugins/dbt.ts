import { Plugin } from "./index";

export const dbt: Plugin = {
  name: "dbt",
  description:
    "Grouparoo's dbt integration allows you to share configuration between Grouparoo and your dbt project.  You can then sync data from your dbt project with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
  priority: 80,
  slug: "dbt",
  logo: "dbt.png",
  primaryType: null,
  otherTypes: [],
  category: "data transformation",
  badge: "",
  showLink: false,
  packageName: "@grouparoo/dbt",
};
