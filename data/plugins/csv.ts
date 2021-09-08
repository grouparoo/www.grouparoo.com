import { Plugin } from "./index";

export const CSV: Plugin = {
  name: "CSV",
  description: "",
  priority: 20,
  slug: "csv",
  logo: "csv.svg",
  primaryType: "source",
  otherTypes: [],
  category: "data tool",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/csv",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
  },
  useCasesList: [
    "Easily connect your production data with 3rd party tools",
    "Create a unified customer definition in Grouparoo",
    "Easily make cohorts and segments out of your CSV files",
    "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
  ],
  dataModelTitle: "An Overview of Grouparoo's Data Model",
  dataModelDescription: [
    "Grouparoo's core objects are Profiles and Profile Properties. These objects are defined based on your data such as the data in your CSV files. You can pull this data in with Grouparoo's help.",
    "Once you've defined these Profiles and Profile Properties, you can use Grouparoo to create dynamic segments and cohorts.",
  ],
  otherPluginsHeading: "Send your customer data from CSV files to these tools",
  pluginScreenshots: [
    {
      header: "Easily connect your CSV files data",
      description:
        "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of remotely stored CSV files.",
      imageSrc: "/images/home/integrations/csv/csv-remote.png",
      imageAlt: "Grouparoo CSV settings",
      imageWidth: 742,
      imageHeight: 501,
    },
    {
      header: "Define Profile Properties easily",
      description:
        "Grouparoo is low-code, so less technical team members can create new Profile Properties without needing to work with engineers. They can pull the data they need when they want.",
      imageSrc: "/images/home/integrations/csv/csv-create-property.png",
      imageAlt: "Grouparoo add property settings",
      imageWidth: 742,
      imageHeight: 566,
    },
  ],
  configOptions: {
    url: {
      description:
        "The URL from a CSV File to import. This URL should point directly to your file.",
      required: true,
    },
    fileAgeHours: {
      description:
        "How long can we cache the CSV file before re-downloading it?",
      required: true,
    },
  },
};
