interface NavItem {
  title: string;
  path: string;
  linkText?: string;
  children?: NavItem[];
  target?: "_self" | "_blank" | "_parent" | "_top";
}

const DocsNav: NavItem[] = [
  // -- Getting Started --
  {
    title: "Getting Started with Grouparoo",
    path: "/docs/getting-started",
    children: [
      {
        title: "Core Product Concepts",
        path: "/docs/getting-started/product-concepts",
      },
    ],
  },

  // -- 01: Install --
  {
    title: "Step 1: Install",
    path: "/docs/installation",
    children: [
      {
        title: "Installing Grouparoo with Node.js",
        linkText: "Node.js",
        path: "/docs/installation/node",
      },
      {
        title: "Installing Grouparoo with Docker",
        linkText: "Docker",
        path: "/docs/installation/docker",
      },
      {
        title: "Installing Grouparoo Plugins",
        linkText: "Plugins",
        path: "/docs/installation/plugins",
      },
    ],
  },

  // -- 02: Configure --
  {
    title: "Step 2: Configure",
    path: "/docs/config",
    children: [
      { title: "Apps", path: "/docs/config/apps" },
      { title: "Models", path: "/docs/config/models" },
      { title: "Sources", path: "/docs/config/sources" },
      { title: "Properties", path: "/docs/config/properties" },
      { title: "Groups", path: "/docs/config/groups" },
      { title: "Destinations", path: "/docs/config/destinations" },
      { title: "Sample Records", path: "/docs/config/records" },
    ],
  },

  // -- 03: Run --
  {
    title: "Step 3: Run",
    path: "/docs/running",
    children: [
      {
        title: "Enterprise Guides",
        path: "/docs/running/ui-enterprise",
        children: [
          {
            title: "Apps",
            path: "/docs/running/ui-enterprise/apps",
          },
          {
            title: "Sources",
            path: "/docs/running/ui-enterprise/sources",
          },
          {
            title: "Properties",
            path: "/docs/running/ui-enterprise/properties",
          },
          {
            title: "Groups",
            path: "/docs/running/ui-enterprise/groups",
          },
          {
            title: "Destinations",
            path: "/docs/running/ui-enterprise/destinations",
          },
        ],
      },
      {
        title: "Running Grouparoo: Settings",
        linkText: "Settings",
        path: "/docs/running/settings",
      },
      {
        title: "Running Grouparoo: Orchestration",
        linkText: "Orchestration",
        path: "/docs/running/orchestration",
      },
      {
        title: "Running Grouparoo: Testing",
        linkText: "Testing",
        path: "/docs/running/testing",
      },
    ],
  },

  // -- 04: Deploy --
  {
    title: "Step 4: Deploy",
    path: "/docs/deployment",
    children: [
      { title: "Network Topology", path: "/docs/deployment/network" },
      { title: "Environment Variables", path: "/docs/deployment/environment" },
      { title: "Secrets", path: "/docs/deployment/secrets" },
      {
        title: "Monitoring and Performance",
        path: "/docs/deployment/monitoring-and-performance",
      },
      {
        title: "Example Projects",
        path: "/docs/deployment/examples",
        linkText: "Example Projects",
        children: [
          {
            title: "Config",
            path: "https://github.com/grouparoo/app-example-config",
            target: "_blank",
          },
          {
            title: "Heroku",
            path: "https://github.com/grouparoo/app-example-heroku",
            target: "_blank",
          },
          {
            title: "AWS",
            path: "https://github.com/grouparoo/app-example-aws",
            target: "_blank",
          },
          {
            title: "GCP",
            path: "https://github.com/grouparoo/app-example-gcp",
            target: "_blank",
          },
          {
            title: "Docker",
            path: "https://github.com/grouparoo/app-example-docker",
            target: "_blank",
          },
        ],
      },
    ],
  },

  // -- CLI --
  {
    title: "Grouparoo CLI",
    path: "/docs/cli",
    children: [
      {
        title: "Setup & Maintenance",
        path: "/docs/cli/setup",
      },
      {
        title: "Configuration",
        path: "/docs/cli/config",
      },
      {
        title: "Running & Testing",
        path: "/docs/cli/run",
      },
    ],
  },

  // -- Integrations --
  {
    title: "Grouparoo Integrations Docs",
    linkText: "Integrations",
    path: "/docs/integrations",
    children: [
      { title: "Airtable", path: "/docs/integrations/grouparoo-airtable" },
      { title: "BigQuery", path: "/docs/integrations/grouparoo-bigquery" },
      { title: "Braze", path: "/docs/integrations/grouparoo-braze" },
      {
        title: "Calculated Property",
        path: "/docs/integrations/grouparoo-calculated-property",
      },
      { title: "ClickHouse", path: "/docs/integrations/grouparoo-clickhouse" },
      { title: "Customer.io", path: "/docs/integrations/grouparoo-customerio" },
      { title: "dbt", path: "/docs/integrations/grouparoo-dbt" },
      {
        title: "Google Sheets",
        path: "/docs/integrations/grouparoo-google-sheets",
      },
      { title: "HubSpot", path: "/docs/integrations/grouparoo-hubspot" },
      { title: "Intercom", path: "/docs/integrations/grouparoo-intercom" },
      { title: "Iterable", path: "/docs/integrations/grouparoo-iterable" },
      { title: "Mailchimp", path: "/docs/integrations/grouparoo-mailchimp" },
      { title: "Mailjet", path: "/docs/integrations/grouparoo-mailjet" },
      { title: "Marketo", path: "/docs/integrations/grouparoo-marketo" },
      { title: "Mixpanel", path: "/docs/integrations/grouparoo-mixpanel" },
      { title: "Mongo", path: "/docs/integrations/grouparoo-mongo" },
      { title: "MySQL", path: "/docs/integrations/grouparoo-mysql" },
      { title: "OneSignal", path: "/docs/integrations/grouparoo-onesignal" },
      { title: "Pipedrive", path: "/docs/integrations/grouparoo-pipedrive" },
      { title: "Postgres", path: "/docs/integrations/grouparoo-postgres" },
      { title: "Redshift", path: "/docs/integrations/grouparoo-redshift" },
      { title: "Sailthru", path: "/docs/integrations/grouparoo-sailthru" },
      { title: "Salesforce", path: "/docs/integrations/grouparoo-salesforce" },
      { title: "SendGrid", path: "/docs/integrations/grouparoo-sendgrid" },
      { title: "Snowflake", path: "/docs/integrations/grouparoo-snowflake" },
      { title: "SQLite", path: "/docs/integrations/grouparoo-sqlite" },
      { title: "Zendesk", path: "/docs/integrations/grouparoo-zendesk" },
    ],
  },

  // -- Development --
  {
    title: "Development Documentation",
    linkText: "Development",
    path: "/docs/development",
    children: [
      { title: "Databases", path: "/docs/development/databases" },
      { title: "Data Flow", path: "/docs/development/dataflow" },
      { title: "Plugins: Overview", path: "/docs/development/plugins" },
      {
        title: "Plugins: Destinations",
        path: "/docs/development/destinations",
      },
      { title: "Plugins: Sources", path: "/docs/development/sources" },
      { title: "Publishing", path: "/docs/development/publishing" },
    ],
  },

  // -- Community --
  {
    title: "Join the Grouparoo Community",
    linkText: "Community",
    path: "/docs/community",
    children: [
      { title: "Code of Conduct", path: "/docs/community/code-of-conduct" },
      { title: "Contributions", path: "/docs/community/contributions" },
      {
        title: "Forum",
        path: "https://github.com/grouparoo/grouparoo/discussions",
        target: "_blank",
      },
      { title: "What's New", path: "/whats-new" },
      { title: "Roadmap", path: "/roadmap", target: "_blank" },
    ],
  },

  // -- Support --
  {
    title: "Support Documentation",
    linkText: "Support",
    path: "/docs/support",
    children: [
      {
        title: "Configuration Files",
        path: "/docs/support/config-files",
        children: [
          {
            title: "Advanced Usage",
            path: "/docs/support/config-files/advanced-usage",
          },
        ],
      },
      { title: "Common Issues", path: "/docs/support/common-issues" },
      {
        title: "Grouparoo Privacy Policy & Legal",
        linkText: "Privacy Policy & Legal",
        path: "/docs/support/legal",
      },

      { title: "Permissions", path: "/docs/support/permissions" },
      { title: "REST API", path: "/docs/support/rest-api" },
      { title: "Security", path: "/docs/support/security" },
      { title: "Telemetry", path: "/docs/support/telemetry" },
      {
        title: "Upgrade Guides",
        path: "/docs/support/upgrading-grouparoo",
        children: [
          {
            title: "v0.7 to v0.8",
            path: "/docs/support/upgrading-grouparoo/v07-v08",
          },
          {
            title: "v0.6 to v0.7",
            path: "/docs/support/upgrading-grouparoo/v06-v07",
          },
          {
            title: "v0.5 to v0.6",
            path: "/docs/support/upgrading-grouparoo/v05-v06",
          },
          {
            title: "v0.4 to v0.5",
            path: "/docs/support/upgrading-grouparoo/v04-v05",
          },
          {
            title: "v0.3 to v0.4",
            path: "/docs/support/upgrading-grouparoo/v03-v04",
          },
          {
            title: "v0.2 to v0.3",
            path: "/docs/support/upgrading-grouparoo/v02-v03",
          },
          {
            title: "v0.1 to v0.2",
            path: "/docs/support/upgrading-grouparoo/v01-v02",
          },
        ],
      },
    ],
  },
  {
    title: "Cloud Documentation",
    linkText: "Cloud",
    path: "/docs/cloud",
    children: [
      {
        title: "Repository Integration",
        path: "/docs/cloud/repository-integration",
      },
    ],
  },
];

export default DocsNav;
