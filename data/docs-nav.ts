interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
  target?: "_self" | "_blank" | "_parent" | "_top";
}

const DocsNav: NavItem[] = [
  // -- Getting Started --
  {
    title: "Getting Started",
    path: "/docs/getting-started",
    children: [
      {
        title: "Product Concepts",
        path: "/docs/getting-started/product-concepts",
      },
    ],
  },

  // -- 01: Install --
  {
    title: "Step 1: Install",
    path: "/docs/installation",
    children: [
      { title: "Node.js", path: "/docs/installation/node" },
      { title: "Docker", path: "/docs/installation/docker" },
      { title: "Plugins", path: "/docs/installation/plugins" },
    ],
  },

  // -- 02: Configure --
  {
    title: "Step 2: Configure",
    path: "/docs/config",
    children: [
      { title: "Code Config", path: "/docs/config/code-config" },
      { title: "UI Config", path: "/docs/config/ui-config" },
      { title: "Apps", path: "/docs/config/apps/community" },
      { title: "Sources", path: "/docs/config/sources/community" },
      { title: "Properties", path: "/docs/config/properties/community" },
      { title: "Groups", path: "/docs/config/groups/community" },
      { title: "Destinations", path: "/docs/config/destinations/community" },
      { title: "Settings", path: "/docs/config/settings" },
    ],
  },

  // -- 03: Run --
  {
    title: "Step 3: Run",
    path: "/docs/running",
    children: [{ title: "Testing", path: "/docs/running/testing" }],
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
    title: "CLI",
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
    title: "Plugins",
    path: "/docs/plugins",
    children: [
      { title: "BigQuery", path: "/docs/plugins/grouparoo-bigquery" },
      { title: "Intercom", path: "/docs/plugins/grouparoo-intercom" },
      { title: "MySQL", path: "/docs/plugins/grouparoo-mysql" },
      { title: "Postgres", path: "/docs/plugins/grouparoo-postgres" },
      { title: "Redshift", path: "/docs/plugins/grouparoo-redshift" },
      { title: "Snowflake", path: "/docs/plugins/grouparoo-snowflake" },
      { title: "SQLite", path: "/docs/plugins/grouparoo-sqlite" },
    ],
  },

  // -- Tutorials --
  {
    title: "Tutorials",
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
    title: "Development",
    path: "/docs/development",
    children: [
      { title: "Databases", path: "/docs/development/databases" },
      { title: "Data Flow", path: "/docs/development/dataflow" },
      { title: "Events", path: "/docs/development/events" },
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
    title: "Community",
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
    title: "Support",
    path: "/docs/support",
    children: [
      { title: "Common Issues", path: "/docs/support/common-issues" },
      { title: "Debugging", path: "/docs/support/debugging" },
      { title: "Environment", path: "/docs/support/environment" },
      { title: "Legal", path: "/docs/support/legal" },
      { title: "Monitoring", path: "/docs/support/monitoring" },
      { title: "Network", path: "/docs/support/network" },
      { title: "Permissions", path: "/docs/support/permissions" },
      { title: "Secrets", path: "/docs/support/secrets" },
      { title: "Security", path: "/docs/support/security" },
      { title: "Telemetry", path: "/docs/support/telemetry" },
      {
        title: "Upgrade Guides",
        path: "/docs/support/upgrading-grouparoo",
        children: [
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
