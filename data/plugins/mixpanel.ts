import { Plugin } from "./index";

export const Mixpanel: Plugin = {
  name: "Mixpanel",
  description:
    "Grouparoo's Mixpanel integration allows you to sync all of your customer data that lives in your data warehouse into Mixpanel.",
  priority: 20,
  slug: "mixpanel",
  logo: "mixpanel.png",
  primaryType: "destination",
  otherTypes: [],
  category: "analytics tool",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/mixpanel",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Mixpanel.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Mixpanel.",
  },
  useCasesList: [
    "Create and update your Mixpanel User Profiles as new users sign up in your core product",
    "Update existing Fields on User Profiles objects such as email and first name and also create new custom Fields on your own terms without needing engineering help",
    "Keep User Profiles Fields up-to-date automatically",
    "Have better control over how you segment your User Profiles",
  ],
  dataModelTitle: "An Overview of Mixpanel's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate with Mixpanel? Here’s an overview for how Mixpanel defines customers.",
    "The core object in Mixpanel is a User Profile. User Profiles have one required attribute, which is their email address.",
    "Mixpanel calls attributes of a User Profile a User Property. Mixpanel pre-defines a number of Fields like $email, $first_name and $last_name for example, but you can define as many Fields as you'd like in the Mixpanel website or straight from Grouparoo.",
  ],
  destinationRecord: "Mixpanel User Profiles",
  destinationProperty: "Mixpanel User Profiles Properties",
  destinationGroup: "Mixpanel Groups",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Mixpanel",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support or special training.",
      imageSrc: "/images/home/integrations/mixpanel/grouparoo-to-mixpanel.png",
      imageAlt: "Map data to Mixpanel",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header:
        "Grouparoo keeps your User Profiles data in Mixpanel updated in real-time",
      description:
        "Empower your sales team to make the right actions based on analytics now that all of your User Profiles information is up-to-date in Mixpanel",
      imageSrc: "/images/home/integrations/mixpanel/mixpanel-users.png",
      imageAlt: "Users in Mixpanel",
      imageWidth: 742,
      imageHeight: 738,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these services into Mixpanel",
  narrative: {
    p1: "Connect your data warehouse with Mixpanel using Grouparoo.  Grouparoo enables you to read data from multiple resources and sync it straight to Mixpanel for your marketing team to access. No overbuilt systems or spending time and engineering resources to build your own data management pipeline.  Our application features over 20 integration plugins including our Google BigQuery integration and our Postgres integration, so you can connect all your external applications to gather a singular view of your data -- even if your tools change over time.",
    p2: "Our user experience includes both UI and CLI options, making it the best option for your entire team -- whether they’re using it to drive products, content, or marketing. Having a single view of your data in a data warehouse is powerful, but connecting it with your CRM will enable you to do your best work. Security is no issue -- Grouparoo can be either self-hosted, or used as a Software as a Service tool. With Grouparoo, you can rest knowing your data integration solution is helping lead the Reverse ETL space. Even if you’re still early on in your search for a data pipeline solution, check out our documentation to view all that Grouparoo can do, or get started with a Free Trial of our hosting offering today!",
  },
};
