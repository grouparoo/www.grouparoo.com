import { Plugin } from "./index";

export const OneSignal: Plugin = {
  name: "OneSignal",
  description:
    "Grouparoo's OneSignal integration allows you to sync all of your customer data that lives in your data warehouse into OneSignal.",
  priority: 80,
  slug: "onesignal",
  logo: "onesignal.png",
  primaryType: "destination",
  otherTypes: [],
  category: "marketing automation",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/onesignal",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as OneSignal.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from all of your data sources and warehouse and keeps that data synced to OneSignal.",
  },
  useCasesList: [
    "Automatically enrich Devices in OneSignal as users interact in your core product",
    "Keep Tags with calculated properties up-to-date automatically",
    "Create Segments in OneSignal based on data from multiple sources",
    "Have better control over how you segment your users",
  ],
  dataModelTitle: "An Overview of OneSignal's Data Model and API",
  dataModelDescription: [
    "Trying to figure out how to integrate your data with OneSignal? Here’s an overview for how OneSignal defines Devices and Segments",
    "The core object in OneSignal is a Device. A Device represents an actual device. Users can have many Devices. All Devices have one required field: <code>external_user_id</code>.",
    "With an <code>external_user_id</code>, Grouparoo can set Tags with data like name, lifetime value, and whether or not a user/Device is in a group.",
  ],
  destinationRecord: "OneSignal Devices",
  destinationProperty: "OneSignal Tags",
  destinationGroup: "OneSignal Segments",
  pluginScreenshots: [
    {
      header: "Define what customer data you want in OneSignal",
      description:
        "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
      imageSrc:
        "/images/home/integrations/onesignal/grouparoo-to-onesignal.png",
      imageAlt: "OneSignal Destination settings",
      imageWidth: 1100,
      imageHeight: 801,
    },
    {
      header: "Grouparoo keeps your Segments in OneSignal updated in real-time",
      description:
        "Run campaigns in OneSignal based on the Devices and Tags that you've synced",
      imageSrc: "/images/home/integrations/onesignal/onesignal-audience.png",
      imageAlt: "Segment in OneSignal",
      imageWidth: 1100,
      imageHeight: 466,
    },
  ],
  otherPluginsHeading:
    "Import your customer data from these tools into OneSignal",
};
