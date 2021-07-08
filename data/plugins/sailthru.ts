import { Plugin } from "./index";

export const Sailthru: Plugin = {
  name: "Sailthru",
  description:
    "Grouparoo's Sailthru integration allows you to sync all of your customer data that lives in your data warehouse into Sailthru.",
  priority: 50,
  slug: "sailthru",
  logo: "sailthru.png",
  primaryType: "destination",
  otherTypes: [],
  category: "email marketing",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/sailthru",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Sailthru.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Sailthru.",
  },
  useCasesList: [
    "Automatically create Users or User objects in Sailthru as new users sign up in your core product",
    "Send new User Vars to Sailthru without needing engineering help",
    "Automatically create Lists or add Users to Lists in Sailthru",
    "Trigger automated emails based on User Lists through the Lifecycle Optimizer",
    "Keep User Vars up-to-date automatically",
    "Have better control over how you segment your Users",
  ],
  dataModelTitle: "An Overview of Sailthru's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Sailthru? Here’s an overview for how Sailthru defines customer objects.",
    "The core object in Sailthru is a User. A User represents an individual person who might be a lead or a customer. Users have one required variable, which is their email address.",
    "Sailthru calls attributes of a User a User Var or User Variable. The two default User Vars in Sailthru are <code>email</code> and <code>extId</code>, which stands for external ID. We recommend passing through an identifying value from your system like a user ID to this User Var. You can also create more User Vars based on the Grouparoo Profile Properties that you define.",
  ],
  destinationProfile: "Sailthru Users",
  destinationProperty: "Sailthru Users Vars",
  destinationGroup: "Sailthru Lists",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Sailthru",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/sailthru/grouparoo-to-sailthru.png",
      imageAlt: "Map data to Sailthru",
      imageWidth: 742,
      imageHeight: 506,
    },
    {
      header:
        "Grouparoo keeps your contact and customer data in Sailthru updated in real-time",
      description:
        "Run automated lifecycle campaigns in Sailthru based on the Users and Lists that you've mapped from Grouparoo.",
      imageSrc: "/images/home/integrations/sailthru/sailthru-list.png",
      imageAlt: "List in Sailthru",
      imageWidth: 742,
      imageHeight: 546,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Sailthru",
};
