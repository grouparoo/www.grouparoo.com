import { Plugin } from "./index";

export const Vero: Plugin = {
  name: "Vero",
  description:
    "Grouparoo's Vero integration allows you to sync all of your customer data that lives in your data warehouse into Vero.",
  priority: 20,
  slug: "vero",
  logo: "vero.png",
  primaryType: "destination",
  otherTypes: [],
  category: "email marketing",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/vero",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Vero.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Vero.",
  },
  useCasesList: [
    "Automatically create Vero Customer Profiles as new users sign up in your core product",
    "Generate Tags and Properties without needing engineering help",
    "Trigger workflows and newsletters based on dynamic Audiences",
    "Keep Tags and Properties up-to-date automatically",
  ],
  dataModelTitle: "An Overview of Vero's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate with Vero? Here’s an overview for how Vero defines customers.",
    "The core object in Vero is a Customer (also known as a Profile). A Profile represents an individual person and may be a part of one or more Segments and have one or more Tags. Customers have one required attribute, which is an id.",
    "Vero calls attributes of a Customer a Property. Vero only has two pre-defined Properties -- id and e-mail, but you can define as many Properties as you'd like using Grouparoo or in the Vero website.",
  ],
  destinationMappings: [
    {
      record: "Vero Customers",
      property: "Vero Properties",
      group: "Vero Tags",
    },
  ],
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Vero",
      description:
        "Grouparoo is low-code, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/vero/grouparoo-to-vero.png",
      imageAlt: "Map data to Vero",
      imageWidth: 932,
      imageHeight: 462,
    },
    {
      header: "Grouparoo keeps your customer data in Vero updated in real-time",
      description:
        "Run campaigns in Vero based on the Properties and Tags that you've mapped from Grouparoo.",
      imageSrc: "/images/home/integrations/vero/vero-contacts.png",
      imageAlt: "Mailchimp audience populated",
      imageWidth: 742,
      imageHeight: 368,
    },
  ],
  otherPluginsHeading: "Import your customer data from these tools into Vero",
};
