import { Plugin } from "./index";

export const Iterable: Plugin = {
  name: "Iterable",
  description:
    "Grouparoo's Iterable integration allows you to sync all of your customer data that lives in your data warehouse into Iterable.",
  priority: 80,
  slug: "iterable",
  logo: "iterable.png",
  primaryType: "destination",
  otherTypes: [],
  category: "email marketing",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/iterable",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Iterable.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Iterable.",
  },
  useCasesList: [
    "Automatically create Users in Iterable as new users sign up in your core product",
    "Automatically update Audiences",
    "Keep User Fields up-to-date automatically",
    "Have better control over how you segment your Users",
  ],
  dataModelTitle: "An Overview of Iterable's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Iterable? Here’s an overview for how Iterable defines Users and Audiences",
    "The core object in Iterable is a User. A User represents an individual person. Users have one required user field: <code>email</code>.",
    "All of these Users have additional user fields that you can set, like name, role, phone, as well as custom fields.",
  ],
  destinationRecord: "Iterable Users",
  destinationProperty: "Iterable User Fields",
  destinationGroup: "Iterable Audiences",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Iterable",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/iterable/grouparoo-to-iterable.png",
      imageAlt: "Iterable destination settings",
      imageWidth: 1184,
      imageHeight: 879,
    },
    {
      header: "Grouparoo keeps your Users in Iterable updated in real-time",
      description:
        "Run campaigns in Iterable based on the Users and Audiences that you've synced",
      imageSrc: "/images/home/integrations/iterable/iterable-audience.png",
      imageAlt: "Audience in Iterable",
      imageWidth: 1184,
      imageHeight: 879,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Iterable",
};
