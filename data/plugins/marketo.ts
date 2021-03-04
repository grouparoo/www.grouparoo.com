import { Plugin } from "./index";

export const Marketo: Plugin = {
  name: "Marketo",
  description:
    "Grouparoo's Marketo integration allows you to sync all of your customer data that lives in various sources into Marketo.",
  priority: 80,
  slug: "marketo",
  logo: "marketo.png",
  primaryType: "destination",
  otherTypes: [],
  category: "marketing automation",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/marketo",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Marketo.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Marketo.",
  },
  useCasesList: [
    "Automatically create Lead (also known as People or Person) objects in Marketo as new users sign up in your core product",
    "Update existing Fields on a Lead such as email and first name and also create new custom Fields without needing engineering help",
    "Automatically create Lists or add Leads to Lists in Marketo",
    "Keep Lead Fields up-to-date automatically",
    "Have better control over how you segment your Users",
  ],
  dataModelTitle: "An Overview of Marketo's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Marketo? Here’s an overview for how Marketo defines customer objects.",
    "The core object in Marketo is a Lead. A Lead represents an individual person who might be a lead or a customer. Leads have one required field, which is their email address.",
    "Marketo calls attributes of a Lead a Field. The one required Field in Marketo is <code>email</code>.",
  ],
  destinationProfile: "Marketo Leads",
  destinationProperty: "Marketo Lead Fields",
  destinationGroup: "Marketo Lists",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Marketo",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc: "/images/home/integrations/marketo/grouparoo-to-marketo.png",
      imageAlt: "Map data to Marketo",
      imageWidth: 742,
      imageHeight: 506,
    },
    {
      header:
        "Grouparoo keeps your contact and customer data in Marketo updated in real-time",
      description:
        "Run automated lifecycle campaigns in Marketo based on the Users and Lists that you've mapped from Grouparoo.",
      imageSrc: "/images/home/integrations/marketo/marketo-list.png",
      imageAlt: "List in Marketo",
      imageWidth: 742,
      imageHeight: 506,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Marketo",
};
