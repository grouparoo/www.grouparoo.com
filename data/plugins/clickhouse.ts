import { Plugin } from "./index";

export const ClickHouse: Plugin = {
  name: "ClickHouse",
  description:
    "Grouparoo's ClickHouse integration allows you to sync all of your customer data that lives in your ClickHouse database with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
  priority: 80,
  slug: "clickhouse",
  logo: "clickhouse.png",
  primaryType: "source",
  otherTypes: ["destination"],
  category: "data warehouse",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/clickhouse",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
  },
  useCasesList: [
    "Easily connect your production data with 3rd party tools",
    "Create a unified customer definition in Grouparoo",
    "Easily make cohorts and segments out of your ClickHouse data",
    "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
  ],
  dataModelTitle: "An Overview of Grouparoo's Data Model",
  dataModelDescription: [
    "Grouparoo's core objects are Records and Record Properties. These objects are defined based on your data such as the data in your ClickHouse DB. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
    "Once you've defined these Records and Record Properties, you can use Grouparoo to create dynamic segments and cohorts.",
  ],
  otherPluginsHeading: "Send your customer data from ClickHouse to these tools",
  pluginScreenshots: [
    {
      header: "Easily connect your ClickHouse data",
      description:
        "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of ClickHouse instances you may have running.",
      imageSrc: "/images/home/integrations/clickhouse/add-clickhouse-app.png",
      imageAlt: "Grouparoo ClickHouse settings",
      imageWidth: 932,
      imageHeight: 524,
    },
    {
      header: "Define Record Properties without needing to write SQL queries",
      description:
        "Grouparoo is low-code, so less technical team members can create new Record Properties without needing to work with engineers. They can pull the data they need when they want.",
      imageSrc:
        "/images/home/integrations/clickhouse/clickhouse-table-mode.png",
      imageAlt: "ClickHouse Table Source",
      imageWidth: 932,
      imageHeight: 524,
    },
    {
      header: "But you can also write SQL if you want",
      description:
        "Some Record Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
      imageSrc:
        "/images/home/integrations/clickhouse/clickhouse-query-mode.png",
      imageAlt: "ClickHouse Query Source",
      imageWidth: 932,
      imageHeight: 524,
    },
  ],
  configOptions: {
    host: {
      default: "localhost",
      required: true,
      description: "Database HTTP host.",
    },
    port: {
      default: 8123,
      required: true,
      description: "HTTP Port on which to open database connection.",
    },
    database: {
      required: true,
      description: 'The database name - e.g. `"data_warehouse"`.',
    },
    user: {
      default: "default",
      description:
        'The user to connect to the database - e.g. `"grouparoo_user"`.  If you are connecting to localhost, leave as `default`.',
    },
    password: {
      description:
        'The database password - e.g. `"P@assword"`.  If you don\'t have a password, leave as `undefined`.',
    },
  },
};
