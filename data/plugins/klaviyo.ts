import { Plugin } from "./index";

export const Klaviyo: Plugin = {
  name: "Klaviyo",
  description:
    "Grouparoo's Klaviyo integration allows you to sync all of your customer data that lives in your data warehouse into Klaviyo.",
  priority: 20,
  slug: "klaviyo",
  logo: "klaviyo.png",
  primaryType: "destination",
  otherTypes: [],
  category: "customer data platform",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/klaviyo",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Klaviyo.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Klaviyo.",
  },
  useCasesList: [
    "Automatically create Klaviyo Profiles as new users sign up in your core product",
    "Segment your Profiles dynamically based on up-to-date data",
  ],
  dataModelTitle: "An Overview of Klaviyo's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate with Klaviyo? Here’s an overview for how Klaviyo defines profiles.",
    "The core object in Klaviyo is a Profile. A Profile represents an individual person that may be a part of one or more lists or segments. Profiles have one required attribute, which is their email address.",
    "Klaviyo calls attributes of a Profile a Property. Klaviyo pre-defines a number of Properties like <code>phone_number</code>  and <code>region</code> for example, but you can define as many Properties as you'd like using Grouparoo or in the Klaviyo website.",
  ],
  destinationMappings: [
    {
      record: "Klaviyo Profiles",
      property: "Klaviyo Properties",
      group: "Klaviyo Lists",
    },
  ],
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Klaviyo",
      description:
        "Grouparoo is low-code, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/klaviyo/grouparoo-to-klaviyo.png",
      imageAlt: "Map data to Klaviyo",
      imageWidth: 932,
      imageHeight: 496,
    },
    {
      header:
        "Grouparoo keeps your customer data in Klaviyo updated in real-time",
      description:
        "Run campaigns in Klaviyo based on the Properties and Lists that you've mapped from Grouparoo.",
      imageSrc: "/images/home/integrations/klaviyo/klaviyo-profiles.png",
      imageAlt: "Klaviyo profiles list",
      imageWidth: 742,
      imageHeight: 396,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Klaviyo",
};
