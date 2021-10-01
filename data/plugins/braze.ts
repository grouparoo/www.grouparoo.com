import { Plugin } from "./index";

export const Braze: Plugin = {
  name: "Braze",
  description:
    "Grouparoo's Braze integration allows you to sync all of your customer data that lives in your data warehouse into Braze.",
  priority: 20,
  slug: "braze",
  logo: "braze.png",
  primaryType: "destination",
  otherTypes: [],
  category: "marketing automation",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/braze",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Braze.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Braze.",
  },
  useCasesList: [
    "Create and update your Braze Users as new users sign up in your core product",
    "Update existing Attributes on Users objects such as email and first name and also create new custom Fields on your own terms without needing engineering help",
    "Keep User Attributes up-to-date automatically",
    "Have better control over how you segment your User Attributes",
  ],
  dataModelTitle: "An Overview of Braze's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate with Braze? Here’s an overview for how Braze defines customers.",
    "The core object in Braze is a User. Users have one required attribute, which is their external_id attribute.",
    "Braze calls the properties of a User a User Attribute. Braze pre-defines a number of Fields like email, first_name and last_name for example, but you can define as many Fields as you'd like in the Braze website or straight from Grouparoo.",
  ],
  destinationProfile: "Braze ",
  destinationProperty: "Braze User Attributes",
  destinationGroup: "Groups",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Braze",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support or special training.",
      imageSrc: "/images/home/integrations/braze/grouparoo-to-braze.png",
      imageAlt: "Map data to Braze",
      imageWidth: 742,
      imageHeight: 512,
    },
    {
      header:
        "Grouparoo keeps your User Profiles data in Braze updated in real-time",
      description:
        "Empower your sales team to make the right actions based on analytics now that all of your User information is up-to-date in Braze",
      imageSrc: "/images/home/integrations/braze/braze-user.png",
      imageAlt: "User details in Braze",
      imageWidth: 742,
      imageHeight: 481,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these services into Braze",
  narrative: {
    p1: "Connect your data warehouse with Braze using Grouparoo.  Grouparoo enables you to read data from multiple resources and sync it straight to Braze for your marketing team to access. No overbuilt systems or spending time and engineering resources to build your own data management pipeline.  Our application features over 20 integration plugins including our Google BigQuery integration and our Postgres integration, so you can connect all your external applications to gather a singular view of your data -- even if your tools change over time.",
    p2: "Our user experience includes both UI and CLI options, making it the best option for your entire team -- whether they’re using it to drive products, content, or marketing. Having a single view of your data in a data warehouse is powerful, but connecting it with your CRM will enable you to do your best work. Security is no issue -- Grouparoo can be either self-hosted, or used as a Software as a Service tool. With Grouparoo, you can rest knowing your data integration solution is helping lead the Reverse ETL space. Even if you’re still early on in your search for a data pipeline solution, check out our documentation to view all that Grouparoo can do, or get started with a Free Trial of our hosting offering today!",
  },
};
