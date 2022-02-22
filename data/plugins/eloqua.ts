import { Plugin } from "./index";

export const Eloqua: Plugin = {
  name: "Eloqua",
  description:
    "Grouparoo's Eloqua integration allows you to sync all of your customer data that lives in your data warehouse into Eloqua.",
  priority: 10,
  slug: "eloqua",
  logo: "eloqua.png",
  primaryType: "destination",
  otherTypes: [],
  category: "crm",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/eloqua",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Eloqua.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Eloqua.",
  },
  useCasesList: [
    "Automatically create Contacts in Eloqua as new users sign up in your core product",
    "Trigger email campaigns based on changes to your Contacts",
    "Keep Contact Attribute values up-to-date automatically",
    "Have better control over how you segment your Contacts and send better campaigns",
  ],
  dataModelTitle: "An Overview of Eloqua's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Eloqua? Here’s an overview for how Eloqua defines Contacts.",
    "The core object in Eloqua is a Contact. A Contact represents an individual person who might be a Lead or a User.",
  ],
  destinationMappings: [
    {
      record: "Eloqua Contacts",
      property: "Eloqua Contact Attributes",
      group: "Eloqua Segments",
    },
  ],
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Eloqua",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/eloqua/grouparoo-to-eloqua.jpg",
      imageAlt: "Eloqua Destination settings",
      imageWidth: 1480,
      imageHeight: 919,
    },
    {
      header: "Grouparoo keeps your Contacts in Eloqua updated in real-time",
      description:
        "Run campaigns in Eloqua based on the Contacts and attributes that you've synced",
      imageSrc: "/images/home/integrations/eloqua/eloqua-list.jpg",
      imageAlt: "List in Eloqua",
      imageWidth: 1485,
      imageHeight: 919,
    },
  ],
  otherPluginsHeading: "Import your customer data from these tools into Eloqua",
};
