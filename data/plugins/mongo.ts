import { Plugin } from "./index";

export const Mongo: Plugin = {
  name: "Mongo",
  description:
    "Grouparoo's MongoDB integration allows you to sync all of your customer data that lives in your MongoDB with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
  priority: 40,
  slug: "mongo",
  logo: "mongo.png",
  primaryType: "source",
  otherTypes: [""],
  category: "database",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/mongo",
  tableAlternative: "collection",
  columnAlternative: "field",

  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
  },
  useCasesList: [
    "Easily connect your production data with 3rd party tools",
    "Create a unified customer definition in Grouparoo",
    "Easily make cohorts and segments out of your MongoDB data",
    "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
  ],
  dataModelTitle: "An Overview of Grouparoo's Data Model",
  dataModelDescription: [
    "Grouparoo's core objects are Records and Record Properties. These objects are defined based on your data such as the data in your MongoDB. You can pull this data in with Grouparoo's help or you can write MongoDB queries directly.",
    "Once you've defined these Records and Record Properties, you can use Grouparoo to create dynamic segments and cohorts.",
  ],
  otherPluginsHeading: "Send your customer data from MongoDB to these tools",
  pluginScreenshots: [
    {
      header: "Easily connect your MongoDB data",
      description:
        "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of MongoDB instances you may have running.",
      imageSrc: "/images/home/integrations/mongo/add-mongo-app.png",
      imageAlt: "Grouparoo MongoDB settings",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header:
        "Define Record Properties without needing to write MongoDB queries",
      description:
        "Grouparoo is low-code, so less technical team members can create new Record Properties without needing to work with engineers. They can pull the data they need when they want.",
      imageSrc: "/images/home/integrations/mongo/mongo-table-mode.png",
      imageAlt: "MongoDB table source",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header: "But you can also write MongoDB queries if you want",
      description:
        "Some Record Properties will require aggregations across collections or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
      imageSrc: "/images/home/integrations/mongo/mongo-query-mode.png",
      imageAlt: "MongoDB query source",
      imageWidth: 932,
      imageHeight: 506,
    },
  ],
  configOptions: {
    uri: {
      required: true,
      description: "MongoDB Connection String.",
    },
    database: {
      required: true,
      description: 'The database name - e.g. `"data_warehouse"`.',
    },
  },
  queryLanguageAlternative: "MongoDB Query Language (MQL)",
  queryScheduleAlternativeExample: `{
  options: {
    query: [
      {
        $match: {
          updatedAt: {
            $gt: "new Date(ISODate().getTime() - 1000 * 60 * 60 * 24 * 2)",
          },
        },
      },
      {
        $project: {
          _id: 1,
        },
      },
    ],
    propertyId: "userId"
  }
}`,
  queryPropertiesAlternativeExample: `{
  options: {
    query: [
      {
       $match: {
         user_id: {{userId}},
       },
      },
      {
       $group: {
         _id: null,
         total: {
           $sum: "$price",
         },
       },
      },
      {
       $project: {
         _id: 0,
       },
      },
    ],
  }
}`,
};
