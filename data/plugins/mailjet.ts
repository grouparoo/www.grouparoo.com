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
  showLink: true,
  packageName: "@grouparoo/mailjet",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Mailjet.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Mailjet.",
  },
  useCasesList: [
    "Automatically create Contacts as new users sign up in your core product",
    "Trigger email campaigns based on dynamic Audiences",
  ],
  dataModelTitle: "An Overview of Mailjet’s Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate with Mailjet? Here’s an overview for how Mailjet defines customers.",
    "The core object in Mailjet is a Contact. A Contact represents an individual person that lives on a Contact list. Contacts have one required attribute, which is their email address.",
    "Mailjet calls attributes of a Contact a Contact Property. Mailjet pre-defines a number of Contact Properties such as <code>firstname</code> and <code>country</code>, but you can define as many Contact Properties as you'd like in Mailjet.",
  ],
  destinationMappings: [
    {
      record: "Mailjet Contacts",
      property: "Mailjet Contact Properties",
      group: "Mailjet Lists",
    },
  ],
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Mailjet",
      description:
        "Grouparoo is low-code, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/mailjet/grouparoo-to-mailjet.png",
      imageAlt: "Map data to Mailjet",
      imageWidth: 1172,
      imageHeight: 645,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Mailjet",
};
