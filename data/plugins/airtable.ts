import { Plugin } from "./index";

export const Airtable: Plugin = {
  name: "Airtable",
  description:
    "Grouparoo's Airtable integration allows you to sync all of your customer data that lives in your data warehouse into Airtable.",
  priority: 20,
  slug: "airtable",
  logo: "airtable.png",
  primaryType: "destination",
  otherTypes: [],
  category: "data tool",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/airtable",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Airtable.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Airtable.",
  },
  useCasesList: [
    "Create and update your Airtable Records as new users sign up in your core product",
    "Update existing Fields on Record objects such as email and first name and also create new custom Fields on your own terms without needing engineering help",
    "Keep Record Fields up-to-date automatically",
    "Have better control over how you segment your Record Fields",
  ],
  dataModelTitle: "An Overview of Airtable's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate with Airtable? Here’s an overview for how Airtable defines Records.",
    "The core object in Airtable is a Record. Records have one required Field, which is their Primary Field.",
  ],
  destinationMappings: [
    {
      record: "Record",
      property: "Field",
    },
  ],
  pluginScreenshots: [
    {
      header: "Define what data you want in Airtable",
      description:
        "Grouparoo can be configured in our web UI so non-technical team members can modify what data they send to different tools without needing engineering support or special training.",
      imageSrc: "/images/home/integrations/airtable/grouparoo-to-airtable.png",
      imageAlt: "Map data to Airtable",
      imageWidth: 932,
      imageHeight: 512,
    },
    {
      header: "Grouparoo keeps your data in Airtable updated in real-time",
      description:
        "Run your business with up-to-date Records in Airtable powered by Grouparoo",
      imageSrc: "/images/home/integrations/airtable/airtable-records.png",
      imageAlt: "Record details in Airtable",
      imageWidth: 742,
      imageHeight: 409,
    },
  ],
  otherPluginsHeading: "Import your data from these services into Airtable",
};
