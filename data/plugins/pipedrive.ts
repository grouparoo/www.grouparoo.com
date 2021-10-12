import { Plugin } from "./index";

export const Pipedrive: Plugin = {
  name: "Pipedrive",
  description:
    "Grouparoo's Pipedrive integration allows you to sync all of your customer data that lives in your data warehouse into Pipedrive.",
  priority: 80,
  slug: "pipedrive",
  logo: "pipedrive.png",
  primaryType: "destination",
  otherTypes: [],
  category: "crm",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/pipedrive",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Pipedrive.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Pipedrive.",
  },
  useCasesList: [
    "Automatically enrich People and Contacts in Pipedrive as users interact in your core product",
    "Keep Tags with calculated properties up-to-date automatically",
    "Create Filters in Pipedrive based on data from multiple sources",
    "Have better control over how you segment your users",
  ],
  dataModelTitle: "An Overview of Pipedrive's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Pipedrive? Here’s an overview for how Pipedrive defines Persons, Fields, and Filters",
    "The core object in Pipedrive is a Lead. A Lead is a potential deal, and Leads need to be associated with a Person or an Organization. A Person represents an individual, and requires an <code>email</code> and a <code>name</code>.",
    "With an <code>email</code> and a <code>name</code> set, Grouparoo can then update the Fields on a Person with data like products purchased, lifetime value, and whether or not a Person is in a segment or Group.",
  ],
  destinationRecord: "Pipedrive Person",
  destinationProperty: "Pipedrive Fields",
  destinationGroup: "Pipedrive Filters",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Pipedrive",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc:
        "/images/home/integrations/pipedrive/grouparoo-to-pipedrive.png",
      imageAlt: "Pipedrive Destination settings",
      imageWidth: 1026,
      imageHeight: 801,
    },
    {
      header:
        "Grouparoo keeps your Persons and Filters in Pipedrive updated in real-time",
      description:
        "Enrich your Persons in Pipedrive and run campaigns on the Fields and Filters that you've synced",
      imageSrc: "/images/home/integrations/pipedrive/pipedrive-persons.png",
      imageAlt: "See all Persons in Pipedrive",
      imageWidth: 826,
      imageHeight: 466,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Pipedrive",
};
