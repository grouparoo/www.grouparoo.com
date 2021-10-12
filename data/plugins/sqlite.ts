import { Plugin } from "./index";

export const SQLite: Plugin = {
  name: "SQLite",
  description:
    "Grouparoo's SQLite integration allows you to sync all of your customer data that lives in your SQLite database with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
  priority: 10,
  slug: "sqlite",
  logo: "sqlite.png",
  primaryType: "source",
  otherTypes: ["destination"],
  category: "database",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/sqlite",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
  },
  useCasesList: [
    "Easily connect your production data with 3rd party tools",
    "Create a unified customer definition in Grouparoo",
    "Easily make cohorts and segments out of your SQLite data warehouse",
    "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
  ],
  dataModelTitle: "An Overview of Grouparoo's Data Model",
  dataModelDescription: [
    "Grouparoo's core objects are Records and Record Properties. These objects are defined based on your data such as the data in your SQLite data warehouse. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
    "Once you've defined these Records and Record Properties, you can use Grouparoo to create dynamic segments and cohorts.",
  ],
  otherPluginsHeading: "Send your customer data from SQLite to these tools",
  pluginScreenshots: [
    {
      header: "Easily connect your SQLite data",
      description:
        "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of SQLite instances you may have running.",
      imageSrc: "/images/home/integrations/sqlite/add-sqlite-app.png",
      imageAlt: "Grouparoo SQLite settings",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header: "Define Record Properties without needing to write SQL queries",
      description:
        "Grouparoo is low-code, so less technical team members can create new Record Properties without needing to work with engineers. They can pull the data they need when they want.",
      imageSrc: "/images/home/integrations/sqlite/sqlite-table-mode.png",
      imageAlt: "Grouparoo table source settings",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header: "But you can also write SQL if you want",
      description:
        "Some Record Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
      imageSrc: "/images/home/integrations/sqlite/sqlite-query-mode.png",
      imageAlt: "Grouparoo Query Source settings",
      imageWidth: 932,
      imageHeight: 506,
    },
  ],
  configOptions: {
    file: {
      description: `Path to your SQLite database. It can be an absolute path (e.g. \`/path/tpo/mydb.sqlite\`) or relative to the root of your project (e.g. \`mydb.sqlite\`).`,
      required: true,
    },
  },
};
