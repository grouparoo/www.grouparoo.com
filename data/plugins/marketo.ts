import { Plugin } from "./index";

export const Marketo: Plugin = {
  name: "Marketo",
  description:
    "Grouparoo's Marketo integration allows you to sync all of your customer data that lives in your data warehouse into Marketo.",
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
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Marketo.",
  },
  useCasesList: [
    "Automatically create Lead (also known as People or Person) objects in Marketo as new users sign up in your core product",
    "Update existing Fields on a Lead such as email and first name and also create new custom Fields on your own terms without needing engineering help",
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
      imageHeight: 406,
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
  narrative: {
    p1: "Data is the center of your business, let us help you set yourself up for success.  Connect your data warehouse with Marketo using Grouparoo.  Grouparoo enables you to read data from multiple resources and sync it straight to Marketo for your marketing team to access. No overbuilt systems or spending time and engineering resources to build your own data management pipeline.  Our application features over 20 integration plugins including our Google BigQuery integration and our Postgres database integration, so you can connect all your external applications to gather a singular view of your data -- even if your tools change over time.",
    p2: "Our user experience includes both a UI client and CLI options, making it the best option for your entire team -- whether they’re using it to drive products, content, services, or marketing.  Bring together your data from events, user engagement, sales, and more to turn up your business analytics and enable all of your teams to better please customers.  Having a single view of your data in a data warehouse is powerful, but connecting it with your CRM will enable you to do your best work. Security is no issue -- Grouparoo can be either self-hosted, or used as a Software as a Service tool online. With Grouparoo, you can rest knowing your data integration solution is helping lead the Reverse ETL space.  Save time and increase access to your company's powerful data insights.  Even if you’re still early on in your search for a data pipeline solution, check out our documentation to view all that Grouparoo can do, or get started with a Free Trial of our hosting offering today!",
  },
};
