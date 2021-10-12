import { Plugin } from "./index";

export const GoogleSheets: Plugin = {
  name: "Google Sheets",
  description: "",
  priority: 20,
  slug: "google-sheets",
  logo: "google-sheets.png",
  primaryType: "source",
  otherTypes: [],
  category: "data tool",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/google-sheets",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
  },
  useCasesList: [
    "Easily connect your production data with 3rd party tools",
    "Create a unified customer definition in Grouparoo",
    "Easily make cohorts and segments out of your Google Sheets",
    "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
  ],
  dataModelTitle: "An Overview of Grouparoo's Data Model",
  dataModelDescription: [
    "Grouparoo's core objects are Records and Record Properties. These objects are defined based on your data such as the data in your Google Sheets spreadsheets. You can pull this data in with Grouparoo's help.",
    "Once you've defined these Records and Record Properties, you can use Grouparoo to create dynamic segments and cohorts.",
  ],
  otherPluginsHeading:
    "Send your customer data from Google Sheets to these tools",
  pluginScreenshots: [
    {
      header: "Give access to your Google Cloud Service Account fast",
      description:
        "By giving only the client email address and the private key your are able to extract data from as much spreadsheet as you want.",
      imageSrc: "/images/home/integrations/google-sheets/google-sheets-app.png",
      imageAlt: "Grouparoo Google Sheets settings",
      imageWidth: 932,
      imageHeight: 506,
    },
    {
      header: "Easily connect your Google Sheets data",
      description:
        "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of Google Sheets spreadsheets.",
      imageSrc:
        "/images/home/integrations/google-sheets/google-sheets-source.png",
      imageAlt: "Grouparoo Google Sheets source settings",
      imageWidth: 932,
      imageHeight: 506,
    },

    {
      header: "Define Record Properties easily",
      description:
        "Grouparoo is low-code, so less technical team members can create new Record Properties without needing to work with engineers. They can pull the data they need when they want.",
      imageSrc:
        "/images/home/integrations/google-sheets/google-sheets-property.png",
      imageAlt: "Grouparoo add Property settings",
      imageWidth: 932,
      imageHeight: 506,
    },
  ],
  configOptions: {
    client_email: {
      description: "Email of service account.",
      required: true,
    },
    private_key: {
      description: "Private key of service account.",
      required: true,
    },
  },
};
