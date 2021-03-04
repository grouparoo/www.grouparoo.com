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
import { Postgres } from "./postgres";
import { Redshift } from "./redshift";
import { Sailthru } from "./sailthru";
import { Salesforce } from "./salesforce";
import { Sendgrid } from "./sendgrid";
import { Snowflake } from "./snowflake";
import { Zendesk } from "./zendesk";

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
  Postgres,
  Redshift,
  Sailthru,
  Salesforce,
  Sendgrid,
  Snowflake,
  Zendesk,
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
