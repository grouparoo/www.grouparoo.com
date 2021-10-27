import { Plugin } from "./index";

export const Facebook: Plugin = {
  name: "Facebook",
  description:
    "Grouparoo's Facebook integration allows you to sync all of your customer data that lives in your data warehouse into Facebook.",
  priority: 60,
  slug: "facebook",
  logo: "facebook.png",
  primaryType: "destination",
  otherTypes: [],
  category: "ad platform",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/facebook",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Mailchimp.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Mailchimp.",
  },
  useCasesList: [
    "Automatically create Contacts in Facebook Audiences as new users sign up in your core product",
    "Send new Contact Properties to Facebook without needing engineering help",
    "Trigger email campaigns based on Contact Lists",
    "Keep Contact Property values up-to-date automatically",
    "Have better control over how you segment your leads and contacts",
  ],
  dataModelTitle: "An Overview of Facebook's Audience Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Facebook? Here’s an overview for how Facebook defines users and audiences.",
    "The core object in Facebook is a User. A User represents an individual person who might be a lead or a customer. Contacts have one required attribute, which is their email address.",
    "On every User are various keys and values such as <code>EMAIL</code>, <code>FN</code> (first name), <code>LN</code> (last name).",
    "You can also create new custom keys and values on every User",
  ],
  destinationRecord: "Facebook Users",
  destinationProperty: "Facebook User Keys",
  destinationGroup: "Facebook Custom Audiences",
  otherPluginsHeading:
    "Import your customer data from these tools into Facebook",
};
