import { Plugin } from "./index";

export const Mailchimp: Plugin = {
  name: "Mailchimp",
  description:
    "Grouparoo's Mailchimp integration allows you to sync all of your customer data that lives in various sources into Mailchimp.",
  priority: 80,
  slug: "mailchimp",
  logo: "mailchimp.svg",
  primaryType: "destination",
  otherTypes: [],
  category: "email marketing",
  badge: "popular",
  showLink: true,
  packageName: "@grouparoo/mailchimp",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Mailchimp.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Mailchimp.",
  },
  useCasesList: [
    "Automatically create Customers as new users sign up in your core product",
    "Create new Merge Fields in Mailchimp without needing engineering help",
    "Trigger email campaigns based on dynamic Audiences",
    "Keep Merge Field values up-to-date automatically",
  ],
  dataModelTitle: "An Overview of Mailchimp’s Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate with Mailchimp? Here’s an overview for how Mailchimp defines customers.",
    "The core object in Mailchimp is a Contact (also known as a Member). A Contact represents an individual person that lives on a List or Audience. Contacts have one required attribute, which is their email address.",
    "Mailchimp calls attributes of a Contact a Merge Field (formerly a Merge Var). MailChimp pre-defines a number of Merge Fields like <code>FNAME</code> (first name) and <code>LNAME</code> (last name) for example, but you can define as many Merge Fields as you'd like using Grouparoo or in the Mailchimp website.",
  ],
  destinationProfile: "Mailchimp Contacts",
  destinationProperty: "Mailchimp Merge Vars",
  destinationGroup: "Mailchimp Tags",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Mailchimp",
      description:
        "Grouparoo is low-code, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc:
        "/images/home/integrations/mailchimp/grouparoo-to-mailchimp.png",
      imageAlt: "Map data to Mailchimp",
      imageWidth: 742,
      imageHeight: 506,
    },
    {
      header:
        "Grouparoo keeps your customer data in Mailchimp updated in real-time",
      description:
        "Run campaigns in Mailchimp based on the Merge Fields and Tags that you've mapped from Grouparoo.",
      imageSrc: "/images/home/integrations/mailchimp/mailchimp-audience.png",
      imageAlt: "Mailchimp audience populated",
      imageWidth: 742,
      imageHeight: 518,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Mailchimp",
};
