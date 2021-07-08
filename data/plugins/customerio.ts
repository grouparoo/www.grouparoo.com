import { Plugin } from "./index";

export const Customerio: Plugin = {
  name: "Customer.io",
  description:
    "Grouparoo's Customer.io integration allows you to sync all of your customer data that lives in your data warehouse into Customer.io.",
  priority: 60,
  slug: "customerio",
  logo: "customerio.png",
  primaryType: "destination",
  otherTypes: [],
  category: "marketing automation",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/customerio",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Customer.io.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to Customer.io.",
  },
  useCasesList: [
    "Automatically enrich People in Customer.io as users interact in your core product",
    "Keep Attributes with calculated properties up-to-date automatically",
    "Create Segments in Customer.io based on data from multiple sources",
    "Have better control over how you segment your users",
    "Run automated Campaigns based on People Attributes that are dynamically synced",
  ],
  dataModelTitle: "An Overview of Customer.io's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with Customer.io? Here’s an overview for how Customer.io defines People and Segments",
    "The core object in Customer.io are People, though the API endpoint is Customer. People have one required field: <code>customer_id</code>.",
    "Once Grouparoo is connected to Customer.io based on the <code>customer_id</code>, Grouparoo can set Attributes with data like email, name, lifetime value, and any other details about the groups these Customers might be in.",
  ],
  destinationProfile: "Customer.io People",
  destinationProperty: "Customer.io Attributes",
  destinationGroup: "Customer.io Attributes",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in Customer.io",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc:
        "/images/home/integrations/customerio/grouparoo-to-customerio.png",
      imageAlt: "Customer.io destination settings",
      imageWidth: 1253,
      imageHeight: 801,
    },
    {
      header:
        "Grouparoo keeps your Segments in Customer.io updated in real-time",
      description:
        "Run campaigns in Customer.io based on the People and Attributes that you've synced",
      imageSrc: "/images/home/integrations/customerio/customerio-person.png",
      imageAlt: "A Profile in CustomerIO",
      imageWidth: 1100,
      imageHeight: 656,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into Customer.io",
};
