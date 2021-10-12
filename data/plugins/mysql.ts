import { Plugin } from "./index";

export const MySQL: Plugin = {
  name: "MySQL",
  description:
    "Grouparoo's MySQL integration allows you to sync all of your customer data that lives in your MySQL database with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
  priority: 90,
  slug: "mysql",
  logo: "mysql.png",
  primaryType: "source",
  otherTypes: ["destination"],
  category: "database",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/mysql",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
  },
  useCasesList: [
    "Easily connect your production data with 3rd party tools",
    "Create a unified customer definition in Grouparoo",
    "Easily make cohorts and segments out of your MySQL data",
    "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
  ],
  dataModelTitle: "An Overview of Grouparoo's Data Model",
  dataModelDescription: [
    "Grouparoo's core objects are Records and Record Properties. These objects are defined based on your data such as the data in your MySQL DB. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
    "Once you've defined these Records and Record Properties, you can use Grouparoo to create dynamic segments and cohorts.",
  ],
  otherPluginsHeading: "Send your customer data from MySQL to these tools",
  pluginScreenshots: [
    {
      header: "Easily connect your MySQL data",
      description:
        "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of MySQL instances you may have running.",
      imageSrc: "/images/home/integrations/mysql/add-mysql-app.png",
      imageAlt: "Grouparoo MySQL settings",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header: "Define Record Properties without needing to write SQL queries",
      description:
        "Grouparoo is low-code, so less technical team members can create new Record Properties without needing to work with engineers. They can pull the data they need when they want.",
      imageSrc: "/images/home/integrations/mysql/mysql-table-mode.png",
      imageAlt: "MySQL table source",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header: "But you can also write SQL if you want",
      description:
        "Some Record Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
      imageSrc: "/images/home/integrations/mysql/mysql-query-mode.png",
      imageAlt: "MySQL query source",
      imageWidth: 932,
      imageHeight: 506,
    },
  ],
  configOptions: {
    host: {
      default: "localhost",
      required: true,
      description: "Database host.",
    },
    port: {
      default: 3306,
      required: true,
      description: "Port on which to open database connection.",
    },
    database: {
      required: true,
      description: 'The database name - e.g. `"data_warehouse"`.',
    },
    user: {
      default: undefined,
      description:
        'The user to connect to the database - e.g. `"grouparoo_user"`.  If you are connecting to localhost, leave as `undefined`.',
    },
    password: {
      description:
        'The database password - e.g. `"P@assword"`.  If you don\'t have a password, leave as `undefined`.',
    },
  },
};
