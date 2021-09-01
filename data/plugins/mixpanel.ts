import { Plugin } from "./index";

export const Mixpanel: Plugin = {
  name: "Mixpanel",
  description:
    "Grouparoo's Mixpanel integration allows you to sync all of your customer data that lives in your data warehouse into Mixpanel.",
  priority: 20,
  slug: "mixpanel",
  logo: "mixpanel.png",
  primaryType: "destination",
  otherTypes: [],
  category: "analytics tool",
  badge: "",
  showLink: false,
  packageName: "@grouparoo/mixpanel",
};
