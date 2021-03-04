import { Plugin } from "./index";

export const Salesforce: Plugin = {
  name: "Salesforce",
  description:
    "Grouparoo's Salesforce integration allows you to sync all of your customer data that lives in various sources into Salesforce.",
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
      "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Salesforce.",
  },
  useCasesList: [
    "Create and update any profileObject in Salesforce such as Contacts, Leads, or Individuals as new users sign up in your core product",
    "Update existing Fields on people objects such as email and first name and also create new custom Fields without needing engineering help",
    "Automatically create Campaigns or add people to Campaigns in Salesforce",
    "Keep Lead Fields up-to-date automatically",
    "Have better control over how you segment your Leads and Contacts",
  ],
  dataModelTitle: "An Overview of Salesforce's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Salesforce? Here’s an overview for how Salesforce defines customer objects.",
    "At its core, Salesforce is a database, and a very flexible one at that. While most of the objects we name here are the primary default ways to use Salesforce, you can map Grouparoo profiles to just about any kind of object in Salesforce.",
    "Salesforce has a few primary objects: Leads, Contacts, and Individuals. Each of those three previous objects represents an individual person who might be a lead or a customer. These objects all have three required fields: Email and LastName",
  ],
  destinationProfile: "Salesforce Lead/Contact",
  destinationProperty: "Salesforce Lead/Contact Fields",
  destinationGroup: "Salesforce Campaigns",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Salesforce",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
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
        "Empower your sales team to make the right actions now that all of your lead and contact information is up-to-date in Salesforce",
      imageSrc: "/images/home/integrations/salesforce/salesforce-campaign.png",
      imageAlt: "Campaign in Salesforce",
      imageWidth: 742,
      imageHeight: 506,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Salesforce",
};
