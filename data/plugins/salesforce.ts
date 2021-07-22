import { Plugin } from "./index";

export const Salesforce: Plugin = {
  name: "Salesforce",
  description:
    "Grouparoo's Salesforce data integration allows you to sync all of your customer data that lives in your data warehouse into Salesforce.",
  priority: 100,
  slug: "salesforce",
  logo: "salesforce.png",
  primaryType: "destination",
  otherTypes: [],
  category: "crm",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/salesforce",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Salesforce.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Salesforce.",
  },
  useCasesList: [
    "Create and update any profileObject in Salesforce such as Contacts, Leads, or Individuals as new users sign up in your core product",
    "Update existing Fields on people objects such as email and first name and also create new custom Fields on your own terms without needing engineering help",
    "Automatically create Campaigns or add people to Campaigns in Salesforce",
    "Keep Lead Fields up-to-date automatically",
    "Have better control over how you segment your Leads and Contacts",
  ],
  dataModelTitle: "An Overview of Salesforce's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Salesforce? Here’s an overview for how Salesforce defines customer objects.",
    "At its core, Salesforce is a database, and a very flexible one at that. While most of the objects we name here are the primary default ways to use Salesforce, you can map Grouparoo profiles to just about any kind of object in Salesforce.",
    "Salesforce has a few primary objects: Leads, Contacts, and Individuals. Each of those three previous objects represents an individual person who might be a lead or a customer. These objects all have two required fields: Email and LastName",
  ],
  destinationProfile: "Salesforce Lead/Contact",
  destinationProperty: "Salesforce Lead/Contact Fields",
  destinationGroup: "Salesforce Campaigns",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Salesforce",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support or special training.",
      imageSrc:
        "/images/home/integrations/salesforce/grouparoo-to-salesforce.png",
      imageAlt: "Map data to Salesforce",
      imageWidth: 742,
      imageHeight: 487,
    },
    {
      header:
        "Grouparoo keeps your contact and lead data in Salesforce updated in real-time",
      description:
        "Empower your sales team to make the right actions based on analytics now that all of your lead and contact information is up-to-date in Salesforce",
      imageSrc: "/images/home/integrations/salesforce/salesforce-campaign.png",
      imageAlt: "Campaign in Salesforce",
      imageWidth: 742,
      imageHeight: 506,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these services into Salesforce",
  narrative: {
    p1: "Connect your data warehouse with Salesforce using Grouparoo.  Grouparoo enables you to read data from multiple resources and sync it straight to Salesforce for your marketing team to access. No overbuilt systems or spending time and engineering resources to build your own data management pipeline.  Our application features over 20 integration plugins including our Google BigQuery integration and our Postgres integration, so you can connect all your external applications to gather a singular view of your data -- even if your tools change over time.",
    p2: "Our user experience includes both UI and  CLI options, making it the best option for your entire team -- whether they’re using it to drive products, content, or marketing.  Having a single view of your data in a data warehouse is powerful, but connecting it with your CRM will enable you to do your best work. Security is no issue -- Grouparoo can be either self-hosted, or used as a Software as a Service tool. With Grouparoo, you can rest knowing your data integration solution is helping lead the Reverse ETL space.  Even if you’re still early on in your search for a data pipeline solution, check out our documentation to view all that Grouparoo can do, or get started with a Free Trial of our hosting offering today!",
  },
};
