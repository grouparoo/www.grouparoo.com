import { Plugin } from "./index";

export const Sendgrid: Plugin = {
  name: "Sendgrid",
  description:
    "Grouparoo's Sendgrid integration allows you to sync all of your customer data that lives in various sources into Sendgrid.",
  priority: 70,
  slug: "sendgrid",
  logo: "sendgrid.png",
  primaryType: "destination",
  otherTypes: [],
  category: "email",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/sendgrid",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Sendgrid.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Sendgrid.",
  },
  useCasesList: [
    "Automatically create Contacts in Sendgrid as new users sign up in your core product",
    "Automatically update Contact Lists",
    "Keep Contact Fields up-to-date automatically",
    "Dynamically create Custom Contact Fields",
    "Have better control over how you segment your Users",
  ],
  dataModelTitle: "An Overview of Sendgrid's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Sendgrid? Here’s an overview for how Sendgrid defines Contacts and Contact Lists",
    "The core object in Sendgrid is a Contact. A Contact represents an individual person. Contacts have one required user field: <code>email</code>.",
    "All of these Contacts have Reserved Fields that you can set, like First Name, Last Name, and Phone Number. Contacts also have custom fields.",
  ],
  destinationProfile: "Sendgrid Users",
  destinationProperty: "Sendgrid User Fields",
  destinationGroup: "Sendgrid Audiences",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Sendgrid",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/sendgrid/grouparoo-to-sendgrid.png",
      imageAlt: "Sendgrid destination settings",
      imageWidth: 1184,
      imageHeight: 937,
    },
    {
      header: "Grouparoo keeps your Users in Sendgrid updated in real-time",
      description:
        "Run campaigns in Sendgrid based on the Users and Audiences that you've synced",
      imageSrc: "/images/home/integrations/sendgrid/sendgrid-lists.png",
      imageAlt: "Audience in Sendgrid",
      imageWidth: 1184,
      imageHeight: 937,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Sendgrid",
};
