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
    name: "Mailchimp",
    description: "",
    priority: 80,
    slug: "mailchimp",
    logo: "mailchimp.svg",
    primaryType: "destination",
    otherTypes: [],
    category: "email marketing",
    badge: "popular",
    showLink: true,
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
    description: "",
    priority: 90,
    slug: "mysql",
    logo: "mysql.png",
    primaryType: "source",
    otherTypes: ["destination"],
    category: "database",
    badge: "",
    showLink: true,
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

export function randomPlugin(type: "source" | "destination") {
  const pluginDestinationNames = PluginData.filter(
    (p) => p.primaryType === type
  ).map((p) => p.name);
  const pluginName =
    pluginDestinationNames[
      Math.floor(Math.random() * pluginDestinationNames.length)
    ];

  return pluginName;
}
