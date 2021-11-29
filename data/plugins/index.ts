import { Braze } from "./braze";
import { CalculatedProperty } from "./calculated-property";
import { CSV } from "./csv";
import { dbt } from "./dbt";
import { Customerio } from "./customerio";
import { ClickHouse } from "./clickhouse";
import { Eloqua } from "./eloqua";
import { Facebook } from "./facebook";
import { GoogleBigQuery } from "./googleBigQuery";
import { GoogleSheets } from "./googleSheets";
import { Hubspot } from "./hubspot";
import { Intercom } from "./intercom";
import { Iterable } from "./iterable";
import { Mailjet } from "./mailjet";
import { Mailchimp } from "./mailchimp";
import { Marketo } from "./marketo";
import { Mixpanel } from "./mixpanel";

import { Mongo } from "./mongo";
import { MySQL } from "./mysql";
import { OneSignal } from "./onesignal";
import { Pardot } from "./pardot";
import { Pipedrive } from "./pipedrive";
import { Postgres } from "./postgres";
import { Redshift } from "./redshift";
import { Sailthru } from "./sailthru";
import { Salesforce } from "./salesforce";
import { Sendgrid } from "./sendgrid";
import { Snowflake } from "./snowflake";
import { SQLite } from "./sqlite";
import { Zendesk } from "./zendesk";

export interface PluginConfigOption {
  default?: string | number | boolean;
  description?: string;
  name?: string;
  required?: boolean;
  options?: string[];
}

export interface PluginConfigOptions {
  [key: string]: PluginConfigOption;
}

export interface PluginDisplay {
  name: string;
  slug: string;
  logoPath: string;
}

export interface Plugin {
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
  useCases?: {
    paragraphOne: string;
    paragraphTwo: string;
  };
  useCasesList?: string[];
  dataModelTitle?: string;
  dataModelDescription?: string[];
  destinationMappings?: Array<{
    record: string;
    property?: string;
    group?: string;
  }>;
  otherPluginsHeading?: string;
  pluginScreenshots?: {
    header: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
  }[];
  configOptions?: PluginConfigOptions;
  narrative?: {
    p1: string;
    p2: string;
  };
  tableAlternative?: string;
  columnAlternative?: string;
  queryLanguageAlternative?: string;
  queryScheduleAlternativeExample?: string;
  queryPropertiesAlternativeExample?: string;
  toDisplay?: boolean;
}

export const PluginData: Plugin[] = [
  Braze,
  CalculatedProperty,
  ClickHouse,
  CSV,
  dbt,
  Eloqua,
  Customerio,
  Facebook,
  GoogleBigQuery,
  GoogleSheets,
  Hubspot,
  Intercom,
  Iterable,
  Mailchimp,
  Mailjet,
  Marketo,
  Mixpanel,
  Mongo,
  MySQL,
  OneSignal,
  Pardot,
  Pipedrive,
  Postgres,
  Redshift,
  Sailthru,
  Salesforce,
  Sendgrid,
  Snowflake,
  SQLite,
  Zendesk,
];

export const PluginPageData: Plugin[] = PluginData.filter((p) => p.useCases);

export function randomHomepagePlugins() {
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

  return pluginNames;
}

export function getPluginDisplay(pluginSlug: string): PluginDisplay {
  if (pluginSlug === "grouparoo") {
    return {
      name: "Grouparoo",
      slug: "grouparoo",
      logoPath: "/images/home/integrations/grouparoo/grouparoo.png",
    };
  }
  if (pluginSlug === "data_warehouse") {
    return {
      name: "Your Data Warehouse",
      slug: "data_warehouse",
      logoPath: "/images/home/integrations/default/database.png",
    };
  }
  if (pluginSlug === "destinations") {
    return {
      name: "Your Business Tools",
      slug: "destinations",
      logoPath: "/images/home/integrations/default/cloud.png",
    };
  }

  const pluginData = PluginData.find(({ slug }) => slug === pluginSlug);
  if (!pluginData) {
    throw new Error(`Slug (${pluginSlug}) not found in Plugin data.`);
  }
  const { name, slug, logo, toDisplay } = pluginData;

  return {
    name,
    slug,
    logoPath: `/images/home/integrations/${slug}/${logo}`,
  };
}

export async function getUseCasePaths() {
  const paths = PluginPageData.map(
    (p) => `/integrations/${p.primaryType}s/${p.slug}`
  );

  return {
    paths,
    fallback: false,
  };
}
