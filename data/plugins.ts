export const PluginData: Array<{
  name: string;
  description: string;
  priority: number;
  slug: string;
  logo: string;
  primaryType: string;
  otherTypes: string[];
  category: string;
  badge: string;
  showLink: boolean;
  packageName: string;
  useCases: {
    paragraphOne: string;
    paragraphTwo: string;
  };
  useCasesList: string[];
  dataModelTitle: string;
  dataModelDescription: string[];
  destinationProfile?: string;
  destinationProperty?: string;
  destinationGroup?: string;
  otherPluginsHeading: string;
  pluginScreenshots?: {
    header: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
  }[];
}> = [
  {
    name: "CSV",
    description: "",
    priority: 20,
    slug: "csv",
    logo: "csv.svg",
    primaryType: "source",
    otherTypes: [],
    category: "data tool",
    badge: "",
    showLink: false,
    useCases: { intro: "" },
  },
  {
    name: "Facebook",
    description: "",
    priority: 60,
    slug: "facebook",
    logo: "facebook.png",
    primaryType: "destination",
    otherTypes: [],
    category: "ad platform",
    badge: "",
    showLink: true,
    useCases: { intro: "" },
  },
  {
    name: "Google BigQuery",
    description: "",
    priority: 80,
    slug: "bigquery",
    logo: "bigquery.png",
    primaryType: "source",
    otherTypes: ["destination"],
    category: "data warehouse",
    badge: "",
    showLink: true,
  },
  {
    name: "Google Sheets",
    description: "",
    priority: 20,
    slug: "google-sheets",
    logo: "google-sheets.png",
    primaryType: "source",
    otherTypes: [],
    category: "data tool",
    badge: "",
    showLink: false,
  },
  {
    name: "Hubspot",
    description: "",
    priority: 70,
    slug: "hubspot",
    logo: "hubspot.svg",
    primaryType: "destination",
    otherTypes: [],
    category: "email marketing",
    badge: "",
    showLink: true,
  },
  {
    name: "Intercom",
    description: "",
    priority: 80,
    slug: "intercom",
    logo: "intercom.png",
    primaryType: "destination",
    otherTypes: [],
    category: "crm",
    badge: "",
    showLink: true,
  },
  {
    name: "Iterable",
    description: "",
    priority: 80,
    slug: "iterable",
    logo: "iterable.png",
    primaryType: "destination",
    otherTypes: [],
    category: "email marketing",
    badge: "",
    showLink: true,
  },
  {
    name: "Mailchimp",
    description:
      "Grouparoo's Mailchimp integration allows you to sync all of your customer data that lives in various sources into Mailchimp.",
    priority: 80,
    slug: "mailchimp",
    logo: "mailchimp.svg",
    primaryType: "destination",
    otherTypes: [],
    category: "email marketing",
    badge: "popular",
    showLink: true,
    packageName: "@grouparoo/mailchimp",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Mailchimp.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Mailchimp.",
    },
    useCasesList: [
      "Automatically create Customers as new users sign up in your core product",
      "Create new Merge Fields in Mailchimp without needing engineering help",
      "Trigger email campaigns based on dynamic Audiences",
      "Keep Merge Field values up-to-date automatically",
    ],
    dataModelTitle: "An Overview of Mailchimp’s Data Model and API",
    dataModelDescription: [
      "Trying to figure out how to integrate with Mailchimp? Here’s an overview for how Mailchimp defines customers.",
      "The core object in Mailchimp is a Contact (also known as a Member). A Contact represents an individual person that lives on a List or Audience. Contacts have one required attribute, which is their email address.",
      "Mailchimp calls attributes of a Contact a Merge Field (formerly a Merge Var). MailChimp pre-defines a number of Merge Fields like <code>FNAME</code> (first name) and <code>LNAME</code> (last name) for example, but you can define as many Merge Fields as you'd like using Grouparoo or in the Mailchimp website.",
    ],
    destinationProfile: "Mailchimp Contacts",
    destinationProperty: "Mailchimp Merge Vars",
    destinationGroup: "Mailchimp Tags",
    otherPluginsHeading:
      "Import your customer data from these tools into Mailchimp",
    pluginScreenshots: [
      {
        header: "Define what customer data you want in Mailchimp",
        description:
          "Grouparoo is low-code, so non-technical team members can modify what data they send to different tools without needing engineering support.",
        imageSrc:
          "/images/home/integrations/mailchimp/grouparoo-to-mailchimp.png",
        imageAlt: "Map data to Mailchimp",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header:
          "Grouparoo keeps your customer data in Mailchimp updated in real-time",
        description:
          "Run campaigns in Mailchimp based on the Merge Fields and Tags that you've mapped from Grouparoo.",
        imageSrc: "/images/home/integrations/mailchimp/mailchimp-audience.png",
        imageAlt: "Mailchimp audience populated",
        imageWidth: 742,
        imageHeight: 518,
      },
    ],
  },
  {
    name: "Marketo",
    description: "",
    priority: 80,
    slug: "marketo",
    logo: "marketo.png",
    primaryType: "destination",
    otherTypes: [],
    category: "marketing automation",
    badge: "",
    showLink: true,
  },
  {
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
      "Grouparoo's core objects are Profiles and Profile Properties. These objects are defined based on your data such as the data in your MySQL DB. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
      "Once you've defined these Profiles and Profile Properties, you can use Grouparoo to create dynamic segments and cohorts.",
    ],
    otherPluginsHeading: "Send your customer data from MySQL to these tools",
    pluginScreenshots: [
      {
        header: "Easily connect your MySQL data",
        description:
          "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of MySQL instances you may have running.",
        imageSrc: "/images/home/integrations/mysql/add-mysql-app.png",
        imageAlt: "Grouparoo MySQL settings",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header:
          "Define Profile Properties without needing to write SQL queries",
        description:
          "Grouparoo is low-code, so less technical team members can create new Profile Properties without needing to work with engineers. They can pull the data they need when they want.",
        imageSrc: "/images/home/integrations/mysql/mysql-table-mode.png",
        imageAlt: "MySQL table source",
        imageWidth: 742,
        imageHeight: 806,
      },
      {
        header: "But you can also write SQL if you want",
        description:
          "Some Profile Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
        imageSrc: "/images/home/integrations/mysql/mysql-query-mode.png",
        imageAlt: "MySQL query source",
        imageWidth: 742,
        imageHeight: 506,
      },
    ],
  },
  {
    name: "Postgres",
    description: "",
    priority: 90,
    slug: "postgres",
    logo: "postgres.svg",
    primaryType: "source",
    otherTypes: ["destination"],
    category: "database",
    badge: "",
    showLink: true,
  },
  {
    name: "Redshift",
    description: "",
    priority: 90,
    slug: "redshift",
    logo: "redshift.svg",
    primaryType: "source",
    otherTypes: ["destination"],
    category: "data warehouse",
    badge: "",
    showLink: true,
  },
  {
    name: "Sailthru",
    description: "",
    priority: 50,
    slug: "sailthru",
    logo: "sailthru.png",
    primaryType: "destination",
    otherTypes: [],
    category: "email marketing",
    badge: "",
    showLink: true,
  },

  {
    name: "Salesforce",
    description: "",
    priority: 100,
    slug: "salesforce",
    logo: "salesforce.png",
    primaryType: "destination",
    otherTypes: [],
    category: "crm",
    badge: "",
    showLink: true,
  },
  {
    name: "Sendgrid",
    description: "",
    priority: 70,
    slug: "sendgrid",
    logo: "sendgrid.png",
    primaryType: "destination",
    otherTypes: [],
    category: "email",
    badge: "",
    showLink: true,
  },
  {
    name: "Snowflake",
    description: "",
    priority: 90,
    slug: "snowflake",
    logo: "snowflake.png",
    primaryType: "source",
    otherTypes: ["destination"],
    category: "data warehouse",
    badge: "",
    showLink: true,
  },
  {
    name: "Zendesk",
    description: "",
    priority: 80,
    slug: "zendesk",
    logo: "zendesk.svg",
    primaryType: "destination",
    otherTypes: [],
    category: "customer support",
    badge: "",
    showLink: true,
  },
];

export function randomHomepagePlugin() {
  // This is a fixed list of plugins rather than any random plugin as we want to focus on the popular ones.
  // Some entries are duplicated to bias the likelihood they appear
  const pluginNames = [
    "Marketo",
    "Marketo",
    "Salesforce",
    "Salesforce",
    "Zendesk",
    "Mailchimp",
  ];

  const pluginName =
    pluginNames[Math.floor(Math.random() * pluginNames.length)];

  return pluginName;
}
