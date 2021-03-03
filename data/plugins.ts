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
    paragraphOne?: string;
    paragraphTwo?: string;
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
  },
  {
    name: "Facebook",
    description:
      "Grouparoo's Facebook Audiences integration allows you to sync all of your customer data that lives in various sources into Facebook.",
    priority: 60,
    slug: "facebook",
    logo: "facebook.png",
    primaryType: "destination",
    otherTypes: [],
    category: "ad platform",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/facebook",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Mailchimp.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Mailchimp.",
    },
    useCasesList: [
      "Automatically create Contacts in Facebook Audiences as new users sign up in your core product",
      "Send new Contact Properties to Facebook without needing engineering help",
      "Trigger email campaigns based on Contact Lists",
      "Keep Contact Property values up-to-date automatically",
      "Have better control over how you segment your leads and contacts",
    ],
    dataModelTitle: "An Overview of Facebook's Audience Data Model and API",
    dataModelDescription: [
      "Trying to figure out how to integrate your data with Facebook? Here’s an overview for how Facebook defines users and audiences.",
      "The core object in Facebook is a User. A User represents an individual person who might be a lead or a customer. Contacts have one required attribute, which is their email address.",
      "On every User are various keys and values such as <code>EMAIL</code>, <code>FN</code> (first name), <code>LN</code> (last name).",
      "You can also create new custom keys and values on every User",
    ],
    destinationProfile: "Facebook Users",
    destinationProperty: "Facebook User Keys",
    destinationGroup: "Facebook Custom Audiences",
    otherPluginsHeading:
      "Import your customer data from these tools into Facebook",
  },
  {
    name: "Google BigQuery",
    description:
      "Grouparoo's BigQuery integration allows you to sync all of your customer data that lives in your Google BigQuery data warehouse with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
    priority: 80,
    slug: "bigquery",
    logo: "bigquery.png",
    primaryType: "source",
    otherTypes: ["destination"],
    category: "data warehouse",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/bigquery",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
    },
    useCasesList: [
      "Easily connect your production data with 3rd party tools",
      "Create a unified customer definition in Grouparoo",
      "Easily make cohorts and segments out of your BigQuery data warehouse",
      "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
    ],
    dataModelTitle: "An Overview of Grouparoo's Data Model",
    dataModelDescription: [
      "Grouparoo's core objects are Profiles and Profile Properties. These objects are defined based on your data such as the data in your BigQuery data warehouse. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
      "Once you've defined these Profiles and Profile Properties, you can use Grouparoo to create dynamic segments and cohorts.",
    ],
    otherPluginsHeading: "Send your customer data from BigQuery to these tools",
    pluginScreenshots: [
      {
        header: "Easily connect your BigQuery data",
        description:
          "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of BigQuery instances you may have running.",
        imageSrc: "/images/home/integrations/bigquery/add-bigquery-app.png",
        imageAlt: "Grouparoo BigQuery settings",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header:
          "Define Profile Properties without needing to write SQL queries",
        description:
          "Grouparoo is low-code, so less technical team members can create new Profile Properties without needing to work with engineers. They can pull the data they need when they want.",
        imageSrc: "/images/home/integrations/bigquery/bigquery-table-mode.png",
        imageAlt: "Grouparoo table source settings",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header: "But you can also write SQL if you want",
        description:
          "Some Profile Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
        imageSrc: "/images/home/integrations/bigquery/bigquery-query-mode.png",
        imageAlt: "Grouparoo query source settings",
        imageWidth: 742,
        imageHeight: 506,
      },
    ],
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
    description:
      "Grouparoo's Hubspot integration allows you to sync all of your customer data that lives in various sources into Hubspot.",
    priority: 70,
    slug: "hubspot",
    logo: "hubspot.svg",
    primaryType: "destination",
    otherTypes: [],
    category: "email marketing",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/hubspot",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Hubspot.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Hubspot.",
    },
    useCasesList: [
      "Automatically create Contacts in Hubspot as new users sign up in your core product",
      "Send new Contact Properties to Hubspot without needing engineering help",
      "Trigger email campaigns based on Contact Lists",
      "Keep Contact Property values up-to-date automatically",
      "Have better control over how you segment your leads and contacts",
    ],
    dataModelTitle: "An Overview of Hubspot's Data Model and API",
    dataModelDescription: [
      "Trying to figure out how to integrate your data with Hubspot? Here’s an overview for how Hubspot defines customers and leads.",
      "The core object in Hubspot is a Contact. A Contact represents an individual person who might be a lead or a customer. Contacts have one required attribute, which is their email address.",
      "Hubspot calls attributes of a Contact a Contact Property. Hubspot pre-defines a number of Contact Properties like <code>firstname</code> and <code>lastname</code> for example, but you can create new Contact Properties as you'd like using Grouparoo or in the Hubspot website.",
    ],
    destinationProfile: "Hubspot Contacts",
    destinationProperty: "Hubspot Contact Properties",
    destinationGroup: "Hubspot Contact Lists",
    pluginScreenshots: [
      {
        header: "Define what customer data you want in Hubspot",
        description:
          "Grouparoo is low-code, so non-technical team members can modify what data they send to different tools without needing engineering support.",
        imageSrc: "/images/home/integrations/hubspot/grouparoo-to-hubspot.png",
        imageAlt: "Map data to Hubspot",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header:
          "Grouparoo keeps your contact and customer data in Hubspot updated in real-time",
        description:
          "Run campaigns in Hubspot based on the Contacts and Contact Properties that you've mapped from Grouparoo.",
        imageSrc: "/images/home/integrations/hubspot/hubspot-list.png",
        imageAlt: "List in Hubspot",
        imageWidth: 742,
        imageHeight: 455,
      },
    ],
    otherPluginsHeading:
      "Import your customer data from these tools into Hubspot",
  },
  {
    name: "Intercom",
    description:
      "Grouparoo's Intercom integration allows you to sync all of your customer data that lives in various sources into Intercom.",
    priority: 80,
    slug: "intercom",
    logo: "intercom.png",
    primaryType: "destination",
    otherTypes: [],
    category: "crm",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/intercom",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Intercom.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Intercom.",
    },
    useCasesList: [
      "Automatically create Contacts in Intercom as new users sign up in your core product",
      "Create new Users and Leads in Intercom, or update existing Users and Leads",
      "Trigger email campaigns based on Contact Lists",
      "Keep Contact Attribute values up-to-date automatically",
      "Have better control over how you segment your Users and Leads",
    ],
    dataModelTitle: "An Overview of Intercom's Data Model and API",
    dataModelDescription: [
      "Trying to figure out how to integrate your data with Intercom? Here’s an overview for how Intercom defines Contacts, Users, and Leads.",
      "The core object in Intercom is a Contact. A Contact represents an individual person who might be a Lead or a User. Leads have one required attribute: <code>email</code>. Users on the other hand have two required attributes: <code>email</code> and <code>external_id</code>.",
      "All of these Leads and Users have additional attributes that you can set, like name, role, phone, as well as custom attributes.",
    ],
    destinationProfile: "Intercom Contacts",
    destinationProperty: "Intercom User/Lead Attributes",
    destinationGroup: "Intercom Tags",
    pluginScreenshots: [
      {
        header: "Define what customer data you want in Intercom",
        description:
          "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
        imageSrc:
          "/images/home/integrations/intercom/grouparoo-to-intercom.png",
        imageAlt: "Intercom destination settings",
        imageWidth: 1184,
        imageHeight: 919,
      },
      {
        header:
          "Grouparoo keeps your Contacts in Intercom updated in real-time",
        description:
          "Run campaigns in Intercom based on the Contacts, Leads, and Users that you've synced",
        imageSrc: "/images/home/integrations/intercom/intercom-list.png",
        imageAlt: "List in Intercom",
        imageWidth: 742,
        imageHeight: 549,
      },
    ],
    otherPluginsHeading:
      "Import your customer data from these tools into Intercom",
  },
  {
    name: "Iterable",
    description:
      "Grouparoo's Iterable integration allows you to sync all of your customer data that lives in various sources into Iterable.",
    priority: 80,
    slug: "iterable",
    logo: "iterable.png",
    primaryType: "destination",
    otherTypes: [],
    category: "email marketing",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/iterable",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Iterable.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Iterable.",
    },
    useCasesList: [
      "Automatically create Users in Iterable as new users sign up in your core product",
      "Automatically update Audiences",
      "Keep User Fields up-to-date automatically",
      "Have better control over how you segment your Users",
    ],
    dataModelTitle: "An Overview of Iterable's Data Model and API",
    dataModelDescription: [
      "Trying to figure out how to integrate your data with Iterable? Here’s an overview for how Iterable defines Users and Audiences",
      "The core object in Iterable is a User. A User represents an individual person. Users have one required user field: <code>email</code>.",
      "All of these Users have additional user fields that you can set, like name, role, phone, as well as custom fields.",
    ],
    destinationProfile: "Iterable Users",
    destinationProperty: "Iterable User Fields",
    destinationGroup: "Iterable Audiences",
    pluginScreenshots: [
      {
        header: "Define what customer data you want in Iterable",
        description:
          "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
        imageSrc:
          "/images/home/integrations/iterable/grouparoo-to-iterable.png",
        imageAlt: "Iterable destination settings",
        imageWidth: 1184,
        imageHeight: 879,
      },
      {
        header: "Grouparoo keeps your Users in Iterable updated in real-time",
        description:
          "Run campaigns in Iterable based on the Users and Audiences that you've synced",
        imageSrc: "/images/home/integrations/iterable/iterable-audience.png",
        imageAlt: "Audience in Iterable",
        imageWidth: 1184,
        imageHeight: 879,
      },
    ],
    otherPluginsHeading:
      "Import your customer data from these tools into Iterable",
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
    otherPluginsHeading:
      "Import your customer data from these tools into Mailchimp",
  },
  {
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
    description:
      "Grouparoo's Postgres integration allows you to sync all of your customer data that lives in your Postgres DB with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
    priority: 90,
    slug: "postgres",
    logo: "postgres.svg",
    primaryType: "source",
    otherTypes: ["destination"],
    category: "database",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/postgres",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
    },
    useCasesList: [
      "Easily connect your production data with 3rd party tools",
      "Create a unified customer definition in Grouparoo",
      "Easily make cohorts and segments out of your Postgres data warehouse",
      "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
    ],
    dataModelTitle: "An Overview of Grouparoo's Data Model",
    dataModelDescription: [
      "Grouparoo's core objects are Profiles and Profile Properties. These objects are defined based on your data such as the data in your Postgres data warehouse. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
      "Once you've defined these Profiles and Profile Properties, you can use Grouparoo to create dynamic segments and cohorts.",
    ],
    otherPluginsHeading: "Send your customer data from Postgres to these tools",
    pluginScreenshots: [
      {
        header: "Easily connect your Postgres data",
        description:
          "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of Postgres instances you may have running.",
        imageSrc: "/images/home/integrations/postgres/add-postgres-app.png",
        imageAlt: "Grouparoo Postgres settings",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header:
          "Define Profile Properties without needing to write SQL queries",
        description:
          "Grouparoo is low-code, so less technical team members can create new Profile Properties without needing to work with engineers. They can pull the data they need when they want.",
        imageSrc: "/images/home/integrations/postgres/postgres-table-mode.png",
        imageAlt: "Grouparoo table source settings",
        imageWidth: 742,
        imageHeight: 614,
      },
      {
        header: "But you can also write SQL if you want",
        description:
          "Some Profile Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
        imageSrc: "/images/home/integrations/postgres/postgres-query-mode.png",
        imageAlt: "Grouparoo query source settings",
        imageWidth: 742,
        imageHeight: 619,
      },
    ],
  },
  {
    name: "Redshift",
    description:
      "Grouparoo's Redshift integration allows you to sync all of your customer data that lives in your Redshift data warehouse with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
    priority: 90,
    slug: "redshift",
    logo: "redshift.svg",
    primaryType: "source",
    otherTypes: ["destination"],
    category: "data warehouse",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/redshift",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
    },
    useCasesList: [
      "Easily connect your production data with 3rd party tools",
      "Create a unified customer definition in Grouparoo",
      "Easily make cohorts and segments out of your Redshift data warehouse",
      "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
    ],
    dataModelTitle: "An Overview of Grouparoo's Data Model",
    dataModelDescription: [
      "Grouparoo's core objects are Profiles and Profile Properties. These objects are defined based on your data such as the data in your Redshift data warehouse. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
      "Once you've defined these Profiles and Profile Properties, you can use Grouparoo to create dynamic segments and cohorts.",
    ],
    otherPluginsHeading: "Send your customer data from Redshift to these tools",
    pluginScreenshots: [
      {
        header: "Easily connect your Redshift data",
        description:
          "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of Redshift instances you may have running.",
        imageSrc: "/images/home/integrations/postgres/add-postgres-app.png",
        imageAlt: "Grouparoo Redshift settings",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header:
          "Define Profile Properties without needing to write SQL queries",
        description:
          "Grouparoo is low-code, so less technical team members can create new Profile Properties without needing to work with engineers. They can pull the data they need when they want.",
        imageSrc: "/images/home/integrations/postgres/postgres-table-mode.png",
        imageAlt: "Grouparoo table source settings",
        imageWidth: 742,
        imageHeight: 614,
      },
      {
        header: "But you can also write SQL if you want",
        description:
          "Some Profile Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
        imageSrc: "/images/home/integrations/postgres/postgres-query-mode.png",
        imageAlt: "Grouparoo query source settings",
        imageWidth: 742,
        imageHeight: 619,
      },
    ],
  },
  {
    name: "Sailthru",
    description:
      "Grouparoo's Sailthru integration allows you to sync all of your customer data that lives in various sources into Sailthru.",
    priority: 50,
    slug: "sailthru",
    logo: "sailthru.png",
    primaryType: "destination",
    otherTypes: [],
    category: "email marketing",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/sailthru",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Sailthru.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Sailthru.",
    },
    useCasesList: [
      "Automatically create Users or User objects in Sailthru as new users sign up in your core product",
      "Send new User Vars to Sailthru without needing engineering help",
      "Automatically create Lists or add Users to Lists in Sailthru",
      "Trigger automated emails based on User Lists through the Lifecycle Optimizer",
      "Keep User Vars up-to-date automatically",
      "Have better control over how you segment your Users",
    ],
    dataModelTitle: "An Overview of Sailthru's Data Model and API",
    dataModelDescription: [
      "Trying to figure out how to integrate your data with Sailthru? Here’s an overview for how Sailthru defines customer objects.",
      "The core object in Sailthru is a User. A User represents an individual person who might be a lead or a customer. Users have one required variable, which is their email address.",
      "Sailthru calls attributes of a User a User Var or User Variable. The two default User Vars in Sailthru are <code>email</code> and <code>extId</code>, which stands for external ID. We recommend passing through an identifying value from your system like a user ID to this User Var. You can also create more User Vars based on the Grouparoo Profile Properties that you define.",
    ],
    destinationProfile: "Sailthru Users",
    destinationProperty: "Sailthru Users Vars",
    destinationGroup: "Sailthru Lists",
    pluginScreenshots: [
      {
        header: "Define what customer data you want in Sailthru",
        description:
          "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
        imageSrc:
          "/images/home/integrations/sailthru/grouparoo-to-sailthru.png",
        imageAlt: "Map data to Sailthru",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header:
          "Grouparoo keeps your contact and customer data in Sailthru updated in real-time",
        description:
          "Run automated lifecycle campaigns in Sailthru based on the Users and Lists that you've mapped from Grouparoo.",
        imageSrc: "/images/home/integrations/sailthru/sailthru-list.png",
        imageAlt: "List in Sailthru",
        imageWidth: 742,
        imageHeight: 546,
      },
    ],
    otherPluginsHeading:
      "Import your customer data from these tools into Sailthru",
  },

  {
    name: "Salesforce",
    description:
      "Grouparoo's Salesforce integration allows you to sync all of your customer data that lives in various sources into Salesforce.",
    priority: 100,
    slug: "salesforce",
    logo: "salesforce.png",
    primaryType: "destination",
    otherTypes: [],
    category: "crm",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/salesforce",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Salesforce.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Salesforce.",
    },
    useCasesList: [
      "Create and update any profileObject in Salesforce such as Contacts, Leads, or Individuals as new users sign up in your core product",
      "Update existing Fields on people objects such as email and first name and also create new custom Fields without needing engineering help",
      "Automatically create Campaigns or add people to Campaigns in Salesforce",
      "Keep Lead Fields up-to-date automatically",
      "Have better control over how you segment your Leads and Contacts",
    ],
    dataModelTitle: "An Overview of Salesforce's Data Model and API",
    dataModelDescription: [
      "Trying to figure out how to integrate your data with Salesforce? Here’s an overview for how Salesforce defines customer objects.",
      "At its core, Salesforce is a database, and a very flexible one at that. While most of the objects we name here are the primary default ways to use Salesforce, you can map Grouparoo profiles to just about any kind of object in Salesforce.",
      "Salesforce has a few primary objects: Leads, Contacts, and Individuals. Each of those three previous objects represents an individual person who might be a lead or a customer. These objects all have three required fields: Email and LastName",
    ],
    destinationProfile: "Salesforce Lead/Contact",
    destinationProperty: "Salesforce Lead/Contact Fields",
    destinationGroup: "Salesforce Campaigns",
    pluginScreenshots: [
      {
        header: "Define what customer data you want in Salesforce",
        description:
          "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
        imageSrc:
          "/images/home/integrations/salesforce/grouparoo-to-salesforce.png",
        imageAlt: "Map data to Salesforce",
        imageWidth: 742,
        imageHeight: 487,
      },
      {
        header:
          "Grouparoo keeps your contact and lead data in Salesforce updated in real-time",
        description:
          "Empower your sales team to make the right actions now that all of your lead and contact information is up-to-date in Salesforce",
        imageSrc:
          "/images/home/integrations/salesforce/salesforce-campaign.png",
        imageAlt: "Campaign in Salesforce",
        imageWidth: 742,
        imageHeight: 506,
      },
    ],
    otherPluginsHeading:
      "Import your customer data from these tools into Salesforce",
  },
  {
    name: "Sendgrid",
    description:
      "Grouparoo's Sendgrid integration allows you to sync all of your customer data that lives in various sources into Sendgrid.",
    priority: 70,
    slug: "sendgrid",
    logo: "sendgrid.png",
    primaryType: "destination",
    otherTypes: [],
    category: "email",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/sendgrid",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Sendgrid.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Sendgrid.",
    },
    useCasesList: [
      "Automatically create Contacts in Sendgrid as new users sign up in your core product",
      "Automatically update Contact Lists",
      "Keep Contact Fields up-to-date automatically",
      "Dynamically create Custom Contact Fields",
      "Have better control over how you segment your Users",
    ],
    dataModelTitle: "An Overview of Sendgrid's Data Model and API",
    dataModelDescription: [
      "Trying to figure out how to integrate your data with Sendgrid? Here’s an overview for how Sendgrid defines Contacts and Contact Lists",
      "The core object in Sendgrid is a Contact. A Contact represents an individual person. Contacts have one required user field: <code>email</code>.",
      "All of these Contacts have Reserved Fields that you can set, like First Name, Last Name, and Phone Number. Contacts also have custom fields.",
    ],
    destinationProfile: "Sendgrid Users",
    destinationProperty: "Sendgrid User Fields",
    destinationGroup: "Sendgrid Audiences",
    pluginScreenshots: [
      {
        header: "Define what customer data you want in Sendgrid",
        description:
          "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
        imageSrc:
          "/images/home/integrations/sendgrid/grouparoo-to-sendgrid.png",
        imageAlt: "Sendgrid destination settings",
        imageWidth: 1184,
        imageHeight: 937,
      },
      {
        header: "Grouparoo keeps your Users in Sendgrid updated in real-time",
        description:
          "Run campaigns in Sendgrid based on the Users and Audiences that you've synced",
        imageSrc: "/images/home/integrations/sendgrid/sendgrid-lists.png",
        imageAlt: "Audience in Sendgrid",
        imageWidth: 1184,
        imageHeight: 937,
      },
    ],
    otherPluginsHeading:
      "Import your customer data from these tools into Sendgrid",
  },
  {
    name: "Snowflake",
    description:
      "Grouparoo's Snowflake integration allows you to sync all of your customer data that lives in your Snowflake data warehouse with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
    priority: 90,
    slug: "snowflake",
    logo: "snowflake.png",
    primaryType: "source",
    otherTypes: ["destination"],
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
      "Grouparoo's core objects are Profiles and Profile Properties. These objects are defined based on your data such as the data in your Snowflake data warehouse. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
      "Once you've defined these Profiles and Profile Properties, you can use Grouparoo to create dynamic segments and cohorts.",
    ],
    otherPluginsHeading:
      "Send your customer data from Snowflake to these tools",
    pluginScreenshots: [
      {
        header: "Easily connect your Snowflake data",
        description:
          "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of Snowflake instances you may have running.",
        imageSrc: "/images/home/integrations/snowflake/add-snowflake-app.png",
        imageAlt: "Grouparoo Snowflake settings",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header:
          "Define Profile Properties without needing to write SQL queries",
        description:
          "Grouparoo is low-code, so less technical team members can create new Profile Properties without needing to work with engineers. They can pull the data they need when they want.",
        imageSrc:
          "/images/home/integrations/snowflake/snowflake-table-mode.png",
        imageAlt: "Grouparoo table source settings",
        imageWidth: 742,
        imageHeight: 495,
      },
      {
        header: "But you can also write SQL if you want",
        description:
          "Some Profile Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
        imageSrc:
          "/images/home/integrations/snowflake/snowflake-query-mode.png",
        imageAlt: "Grouparoo query source settings",
        imageWidth: 742,
        imageHeight: 492,
      },
    ],
  },
  {
    name: "Zendesk",
    description:
      "Grouparoo's Zendesk integration allows you to sync all of your customer data that lives in various sources into Zendesk.",
    priority: 80,
    slug: "zendesk",
    logo: "zendesk.svg",
    primaryType: "destination",
    otherTypes: [],
    category: "customer support",
    badge: "",
    showLink: true,
    packageName: "@grouparoo/zendesk",
    useCases: {
      paragraphOne:
        "Grouparoo is open source data infrastructure to keep customer data in-sync between your data warehouse and 3rd party tools such as Zendesk.",
      paragraphTwo:
        "Grouparoo pulls customer data in real-time from all of your data sources and keeps that data synced to Zendesk.",
    },
    useCasesList: [
      "Automatically create Users in Zendesk as new users sign up in your core product",
      "Create dynamic Tags or User Fields in Zendesk without needing engineering help",
      "Automatically create Lists or add Users to Lists in Zendesk",
      "Route Users to different queues automatically based on their Tags and User Fields",
      "Keep Tags and User Fields up-to-date automatically",
    ],
    dataModelTitle: "An Overview of Zendesk's Data Model and API",
    dataModelDescription: [
      "Trying to figure out how to integrate your data with Zendesk? Here’s an overview for how Zendesk defines customer objects.",
      "The core object in Zendesk is a User. A User represents an individual person who might contact you or be a customer. Users have two required User Fields: <code>external_id</code> and <code>name</code>. The <code>external_id</code> can be something like your unique user ID, and name can be the person's name.",
      "To add details on a User, you can add and update User Fields. Zendesk also has a concept of Tags. Users can have any number of Tags, and you can create automated workflows and triggers based on these Tags.",
    ],
    destinationProfile: "Zendesk Users",
    destinationProperty: "Zendesk User Fields",
    destinationGroup: "Zendesk Tags",
    pluginScreenshots: [
      {
        header: "Define what customer data you want in Zendesk",
        description:
          "Grouparoo can be configured either in code or in our web UI, so non-technical team members can modify what data they send to different tools without needing engineering support.",
        imageSrc: "/images/home/integrations/zendesk/grouparoo-to-zendesk.png",
        imageAlt: "Zendesk destination settings",
        imageWidth: 742,
        imageHeight: 506,
      },
      {
        header:
          "Grouparoo keeps your contact and customer data in Zendesk updated in real-time",
        description: "Keep customer data accurate and up-to-date in Zendesk",
        imageSrc: "/images/home/integrations/zendesk/zendesk-users.png",
        imageAlt: "Users in Zendesk",
        imageWidth: 742,
        imageHeight: 432,
      },
    ],
    otherPluginsHeading:
      "Import your customer data from these tools into Zendesk",
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
