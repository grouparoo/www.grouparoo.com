import { Plugin } from "./index";

export const Hubspot: Plugin = {
  name: "Hubspot",
  description:
    "Grouparoo's Hubspot integration allows you to sync all of your data that lives in your data warehouse into Hubspot.",
  priority: 70,
  slug: "hubspot",
  logo: "hubspot.png",
  primaryType: "destination",
  otherTypes: [],
  category: "email marketing",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/hubspot",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep data in-sync between your data warehouse and 3rd party tools such as Hubspot.",
    paragraphTwo:
      "Grouparoo pulls data in real-time from all of your data sources and warehouse and keeps that data synced to Hubspot.",
  },
  useCasesList: [
    "Keep Contact, Company, or Custom Object Property values up-to-date with your data warehouse",
    "Automatically create Contacts in Hubspot as new users sign up in your core product",
    "Update Companies with data to better drive Sales motions",
    "Trigger email campaigns based on Contact Lists",
  ],
  dataModelTitle: "An Overview of Hubspot's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Hubspot? Here’s an overview for how Hubspot works with Grouparoo.",
    "Hubspot has Contacts that often belong to Companies. It also has other Objects including Custom Objects of your own design.",
    "Each Hubspot Object has attributes called Properties. For example, a Contact has Contact Properties. Hubspot pre-defines a number of Contact Properties like email, first name, and last name. However, you can create new Contact Properties on the Hubspot website. The same is true for other Objects like Companies.",
  ],
  destinationMappings: [
    {
      record: "Hubspot Contacts",
      property: "Hubspot Contact Properties",
      group: "Hubspot Contact Lists",
    },
    {
      record: "Hubspot Companies",
      property: "Hubspot Company Properties",
    },
    {
      record: "Hubspot Custom Objects",
      property: "Hubspot Custom Object Properties",
    },
  ],
  pluginScreenshots: [
    {
      header: "Define what data you want in Hubspot",
      description:
        "Grouparoo is low-code, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/hubspot/grouparoo-to-hubspot.png",
      imageAlt: "Map data to Hubspot",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header:
        "Grouparoo keeps your contact and data in Hubspot updated in real-time",
      description:
        "Run campaigns in Hubspot based on the Contacts and Contact Properties that you've mapped from Grouparoo.",
      imageSrc: "/images/home/integrations/hubspot/hubspot-list.png",
      imageAlt: "List in Hubspot",
      imageWidth: 742,
      imageHeight: 455,
    },
  ],
  otherPluginsHeading: "Import your data from these tools into Hubspot",
};
