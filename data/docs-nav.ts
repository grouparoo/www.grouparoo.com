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
      {
        title: "Code Config",
        path: "/docs/config/code-config",
        children: [
          {
            title: "Apps",
            path: "/docs/config/code-config/apps",
          },
          {
            title: "Sources",
            path: "/docs/config/code-config/sources",
          },
          {
            title: "Properties",
            path: "/docs/config/code-config/properties",
          },
          {
            title: "Groups",
            path: "/docs/config/code-config/groups",
          },
          {
            title: "Destinations",
            path: "/docs/config/code-config/destinations",
          },
        ],
      },
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

  // -- Plugins --
  {
    title: "Plugins Documentation",
    linkText: "Plugins",
    path: "/docs/plugins",
    children: [
      { title: "BigQuery", path: "/docs/plugins/grouparoo-bigquery" },
      { title: "Braze", path: "/docs/plugins/grouparoo-braze" },
      {
        title: "Calculated Property",
        path: "/docs/plugins/grouparoo-calculated-property",
      },
      { title: "ClickHouse", path: "/docs/plugins/grouparoo-clickhouse" },
      { title: "Intercom", path: "/docs/plugins/grouparoo-intercom" },
      { title: "Marketo", path: "/docs/plugins/grouparoo-marketo" },
      { title: "Mongo", path: "/docs/plugins/grouparoo-mongo" },
      { title: "MySQL", path: "/docs/plugins/grouparoo-mysql" },
      { title: "Postgres", path: "/docs/plugins/grouparoo-postgres" },
      { title: "Redshift", path: "/docs/plugins/grouparoo-redshift" },
      { title: "Salesforce", path: "/docs/plugins/grouparoo-salesforce" },
      { title: "Snowflake", path: "/docs/plugins/grouparoo-snowflake" },
      { title: "SQLite", path: "/docs/plugins/grouparoo-sqlite" },
    ],
  },

  // -- Tutorials --
  {
    title: "Tutorials: Get Started With Your Own Instance",
    linkText: "Tutorials",
    path: "/docs/tutorials",
    children: [
      {
        title: "App Example: Declarative Sync",
        path: "/docs/tutorials/app-example-config",
      },
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
      { title: "Common Issues", path: "/docs/support/common-issues" },
      { title: "Debugging", path: "/docs/support/debugging" },
      { title: "Environment", path: "/docs/support/environment" },
      {
        title: "Grouparoo Privacy Policy & Legal",
        linkText: "Privacy Policy & Legal",
        path: "/docs/support/legal",
      },
      { title: "Monitoring", path: "/docs/support/monitoring" },
      { title: "Network", path: "/docs/support/network" },
      { title: "Permissions", path: "/docs/support/permissions" },
      { title: "REST API", path: "/docs/support/rest-api" },
      { title: "Secrets", path: "/docs/support/secrets" },
      { title: "Security", path: "/docs/support/security" },
      { title: "Telemetry", path: "/docs/support/telemetry" },
      {
        title: "Upgrade Guides",
        path: "/docs/support/upgrading-grouparoo",
        children: [
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
];

export default DocsNav;
