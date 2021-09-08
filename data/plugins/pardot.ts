import { Plugin } from "./index";

export const Pardot: Plugin = {
  name: "Pardot",
  description: "",
  priority: 40,
  slug: "pardot",
  logo: "pardot.png",
  primaryType: "destination",
  otherTypes: [""],
  category: "marketing automation",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/pardot",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Pardot.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Pardot.",
  },
  useCasesList: [
    "Create and update your Pardot Prospects as new users sign up in your core product",
    "Update existing Fields on Prospects objects such as email and first name and also create new custom Fields on your own terms without needing engineering help",
    "Automatically create Lists or add Prospects to Lists in Pardot",
    "Keep Prospects Fields up-to-date automatically",
    "Have better control over how you segment your Prospects",
  ],
  dataModelTitle: "An Overview of Pardot's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate with Pardot? Here’s an overview for how Pardot defines customers.",
    "The core object in Pardot is a Prospect. Prospect have one required attribute, which is their email address.",
    "Pardot calls attributes of a Prospect a Field. Pardot pre-defines a number of Fields like salutation, first_name and last_name for example, but you can define as many Fields as you'd like in the Pardot website.",
  ],
  destinationProfile: "Pardot Prospect",
  destinationProperty: "Pardot Prospect Fields",
  destinationGroup: "Pardot Lists",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Pardot",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support or special training.",
      imageSrc: "/images/home/integrations/pardot/grouparoo-to-pardot.png",
      imageAlt: "Map data to Pardot",
      imageWidth: 742,
      imageHeight: 479,
    },
    {
      header:
        "Grouparoo keeps your Prospects data in Pardot updated in real-time",
      description:
        "Empower your sales team to make the right actions based on analytics now that all of your Prospects information is up-to-date in Pardot",
      imageSrc: "/images/home/integrations/pardot/pardot-lists.png",
      imageAlt: "Lists in Pardot",
      imageWidth: 742,
      imageHeight: 550,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these services into Pardot",
  narrative: {
    p1: "Connect your data warehouse with Pardot using Grouparoo.  Grouparoo enables you to read data from multiple resources and sync it straight to Pardot for your marketing team to access. No overbuilt systems or spending time and engineering resources to build your own data management pipeline.  Our application features over 20 integration plugins including our Google BigQuery integration and our Postgres integration, so you can connect all your external applications to gather a singular view of your data -- even if your tools change over time.",
    p2: "Our user experience includes both UI and CLI options, making it the best option for your entire team -- whether they’re using it to drive products, content, or marketing. Having a single view of your data in a data warehouse is powerful, but connecting it with your CRM will enable you to do your best work. Security is no issue -- Grouparoo can be either self-hosted, or used as a Software as a Service tool. With Grouparoo, you can rest knowing your data integration solution is helping lead the Reverse ETL space. Even if you’re still early on in your search for a data pipeline solution, check out our documentation to view all that Grouparoo can do, or get started with a Free Trial of our hosting offering today!",
  },
};
