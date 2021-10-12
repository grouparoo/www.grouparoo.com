import { Plugin } from "./index";

export const Snowflake: Plugin = {
  name: "Snowflake",
  description:
    "Grouparoo's Snowflake integration allows you to sync all of your customer data that lives in your Snowflake data warehouse with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
  priority: 90,
  slug: "snowflake",
  logo: "snowflake.png",
  primaryType: "source",
  otherTypes: [],
  category: "data warehouse",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/snowflake",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
  },
  useCasesList: [
    "Easily connect your production data with 3rd party tools",
    "Create a unified customer definition in Grouparoo",
    "Easily make cohorts and segments out of your Snowflake data warehouse",
    "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
  ],
  dataModelTitle: "An Overview of Grouparoo's Data Model",
  dataModelDescription: [
    "Grouparoo's core objects are Records and Record Properties. These objects are defined based on your data such as the data in your Snowflake data warehouse. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
    "Once you've defined these Records and Record Properties, you can use Grouparoo to create dynamic segments and cohorts.",
  ],
  otherPluginsHeading: "Send your customer data from Snowflake to these tools",
  pluginScreenshots: [
    {
      header: "Easily connect your Snowflake data",
      description:
        "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of Snowflake instances you may have running.",
      imageSrc: "/images/home/integrations/snowflake/add-snowflake-app.png",
      imageAlt: "Grouparoo Snowflake settings",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header: "Define Record Properties without needing to write SQL queries",
      description:
        "Grouparoo is low-code, so less technical team members can create new Record Properties without needing to work with engineers. They can pull the data they need when they want.",
      imageSrc: "/images/home/integrations/snowflake/snowflake-table-mode.png",
      imageAlt: "Grouparoo table source settings",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header: "But you can also write SQL if you want",
      description:
        "Some Record Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
      imageSrc: "/images/home/integrations/snowflake/snowflake-query-mode.png",
      imageAlt: "Grouparoo query source settings",
      imageWidth: 932,
      imageHeight: 506,
    },
  ],
  configOptions: {
    account: {
      required: true,
      description:
        "The full name of the account (provided by Snowflake). It is the subdomain you use to access Snowflake.",
    },
    username: {
      required: true,
      description: "Snowflake user login name to connect with.",
    },
    password: {
      required: true,
      description: "Password for the given username.",
    },
    warehouse: {
      required: true,
      description: "The Snowflake warehouse to use.",
    },
    database: {
      required: true,
      description: "The Snowflake database to use.",
    },
    schema: {
      required: false,
      description: "The Snowflake schema (default: PUBLIC)",
    },
  },
  queryScheduleAlternativeExample: `{
  options: {
    query: "SELECT ID FROM USERS WHERE UPDATED_AT >= (NOW() - INTERVAL '2 day')",
    propertyId: "userId"
  }
}`,
  queryPropertiesAlternativeExample: `{
  options: {
    query: "SELECT SUM(PRICE) from PURCHASES where USER_ID = {{userId}}";
  }
}`,
};
