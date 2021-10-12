import { Plugin } from "./index";

export const Intercom: Plugin = {
  name: "Intercom",
  description:
    "Grouparoo's Intercom integration allows you to sync all of your customer data that lives in your data warehouse into Intercom.",
  priority: 80,
  slug: "intercom",
  logo: "intercom.png",
  primaryType: "destination",
  otherTypes: [],
  category: "crm",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/intercom",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Intercom.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Intercom.",
  },
  useCasesList: [
    "Automatically create Contacts in Intercom as new users sign up in your core product",
    "Create new Users and Leads in Intercom, or update existing Users and Leads",
    "Trigger email campaigns based on Contact Lists",
    "Keep Contact Attribute values up-to-date automatically",
    "Have better control over how you segment your Users and Leads",
  ],
  dataModelTitle: "An Overview of Intercom's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Intercom? Here’s an overview for how Intercom defines Contacts, Users, and Leads.",
    "The core object in Intercom is a Contact. A Contact represents an individual person who might be a Lead or a User. Leads have one required attribute: <code>email</code>. Users on the other hand have two required attributes: <code>email</code> and <code>external_id</code>.",
    "All of these Leads and Users have additional attributes that you can set, like name, role, phone, as well as custom attributes.",
  ],
  destinationRecord: "Intercom Contacts",
  destinationProperty: "Intercom User/Lead Attributes",
  destinationGroup: "Intercom Tags",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Intercom",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/intercom/grouparoo-to-intercom.png",
      imageAlt: "Intercom Destination settings",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header: "Grouparoo keeps your Contacts in Intercom updated in real-time",
      description:
        "Run campaigns in Intercom based on the Contacts, Leads, and Users that you've synced",
      imageSrc: "/images/home/integrations/intercom/intercom-list.png",
      imageAlt: "List in Intercom",
      imageWidth: 742,
      imageHeight: 549,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Intercom",
  configOptions: {
    token: {
      required: true,
      description: "Access token from your private App in the developer hub",
    },
  },
};
