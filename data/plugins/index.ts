import { CSV } from "./csv";
import { Facebook } from "./facebook";
import { GoogleBigQuery } from "./googleBigQuery";
import { GoogleSheets } from "./googleSheets";
import { Hubspot } from "./hubspot";
import { Intercom } from "./intercom";
import { Iterable } from "./iterable";
import { Mailchimp } from "./mailchimp";
import { Marketo } from "./marketo";
import { MySQL } from "./mysql";
import { OneSignal } from "./onesignal";
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
  destinationProfile?: string;
  destinationProperty?: string;
  destinationGroup?: string;
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
}

export const PluginData: Plugin[] = [
  CSV,
  Facebook,
  GoogleBigQuery,
  GoogleSheets,
  Hubspot,
  Intercom,
  Iterable,
  Mailchimp,
  Marketo,
  MySQL,
  OneSignal,
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

export async function getUseCasePaths() {
  const paths = PluginPageData.map(
    (p) => `/integrations/${p.primaryType}s/${p.slug}`
  );

  return {
    paths,
    fallback: false,
  };
}
