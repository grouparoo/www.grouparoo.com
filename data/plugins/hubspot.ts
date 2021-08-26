import { Plugin } from "./index";

export const Hubspot: Plugin = {
  name: "Hubspot",
  description:
    "Grouparoo's Hubspot integration allows you to sync all of your customer data that lives in your data warehouse into Hubspot.",
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
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Hubspot.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Hubspot.",
  },
  useCasesList: [
    "Automatically create Contacts in Hubspot as new users sign up in your core product",
    "Send new Contact Properties to Hubspot without needing engineering help",
    "Trigger email campaigns based on Contact Lists",
    "Keep Contact Property values up-to-date automatically",
    "Have better control over how you segment your leads and contacts",
  ],
  dataModelTitle: "An Overview of Hubspot's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Hubspot? Here’s an overview for how Hubspot defines customers and leads.",
    "The core object in Hubspot is a Contact. A Contact represents an individual person who might be a lead or a customer. Contacts have one required attribute, which is their email address.",
    "Hubspot calls attributes of a Contact a Contact Property. Hubspot pre-defines a number of Contact Properties like <code>firstname</code> and <code>lastname</code> for example, but you can create new Contact Properties as you'd like using Grouparoo or in the Hubspot website.",
  ],
  destinationProfile: "Hubspot Contacts",
  destinationProperty: "Hubspot Contact Properties",
  destinationGroup: "Hubspot Contact Lists",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Hubspot",
      description:
        "Grouparoo is low-code, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/hubspot/grouparoo-to-hubspot.png",
      imageAlt: "Map data to Hubspot",
      imageWidth: 742,
      imageHeight: 412,
    },
    {
      header:
        "Grouparoo keeps your contact and customer data in Hubspot updated in real-time",
      description:
        "Run campaigns in Hubspot based on the Contacts and Contact Properties that you've mapped from Grouparoo.",
      imageSrc: "/images/home/integrations/hubspot/hubspot-list.png",
      imageAlt: "List in Hubspot",
      imageWidth: 742,
      imageHeight: 455,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Hubspot",
};
