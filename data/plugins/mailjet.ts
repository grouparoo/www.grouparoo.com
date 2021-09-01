import { Plugin } from "./index";

export const Mailjet: Plugin = {
  name: "Mailjet",
  description:
    "Grouparoo's Mailjet integration allows you to sync all of your customer data that lives in your data warehouse into Mailjet.",
  priority: 20,
  slug: "mailjet",
  logo: "mailjet.png",
  primaryType: "destination",
  otherTypes: [],
  category: "email marketing",
  badge: "",
  showLink: false,
  packageName: "@grouparoo/mailjet",
};
