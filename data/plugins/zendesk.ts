import { Plugin } from "./index";

export const Zendesk: Plugin = {
  name: "Zendesk",
  description:
    "Grouparoo's Zendesk integration allows you to sync all of your customer data that lives in various sources into Zendesk.",
  priority: 80,
  slug: "zendesk",
  logo: "zendesk.svg",
  primaryType: "destination",
  otherTypes: [],
  category: "customer support",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/zendesk",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Zendesk.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Zendesk.",
  },
  useCasesList: [
    "Automatically create Users in Zendesk as new users sign up in your core product",
    "Create dynamic Tags or User Fields in Zendesk without needing engineering help",
    "Automatically create Lists or add Users to Lists in Zendesk",
    "Route Users to different queues automatically based on their Tags and User Fields",
    "Keep Tags and User Fields up-to-date automatically",
  ],
  dataModelTitle: "An Overview of Zendesk's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Zendesk? Here’s an overview for how Zendesk defines customer objects.",
    "The core object in Zendesk is a User. A User represents an individual person who might contact you or be a customer. Users have two required User Fields: <code>external_id</code> and <code>name</code>. The <code>external_id</code> can be something like your unique user ID, and name can be the person's name.",
    "To add details on a User, you can add and update User Fields. Zendesk also has a concept of Tags. Users can have any number of Tags, and you can create automated workflows and triggers based on these Tags.",
  ],
  destinationProfile: "Zendesk Users",
  destinationProperty: "Zendesk User Fields",
  destinationGroup: "Zendesk Tags",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Zendesk",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/zendesk/grouparoo-to-zendesk.png",
      imageAlt: "Zendesk destination settings",
      imageWidth: 742,
      imageHeight: 506,
    },
    {
      header:
        "Grouparoo keeps your contact and customer data in Zendesk updated in real-time",
      description: "Keep customer data accurate and up-to-date in Zendesk",
      imageSrc: "/images/home/integrations/zendesk/zendesk-users.png",
      imageAlt: "Users in Zendesk",
      imageWidth: 742,
      imageHeight: 432,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Zendesk",
};
