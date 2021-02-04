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

  // -- Installation & Deployment --
  {
    title: "Installation & Deployment",
    path: "/docs/deployment",
    children: [
      { title: "Local (Node.js)", path: "/docs/deployment/node" },
      { title: "Heroku", path: "/docs/deployment/heroku" },
      { title: "Docker & Docker Compose", path: "/docs/deployment/docker" },
      { title: "AWS & Kubernetes", path: "/docs/deployment/aws-and-k8s" },
    ],
  },

  // -- Configuration --
  {
    title: "Configuration",
    path: "/docs/config",
    children: [
      { title: "Code Config", path: "/docs/config/code-config" },
      { title: "First Time Setup", path: "/docs/config/first-time-setup" },
      { title: "Apps", path: "/docs/config/apps" },
      { title: "Sources", path: "/docs/config/sources" },
      {
        title: "Properties",
        path: "/docs/config/properties",
      },
      { title: "Groups", path: "/docs/config/groups" },
      {
        title: "Destinations",
        path: "/docs/config/destinations",
      },
      {
        title: "Settings",
        path: "/docs/config/settings",
      },
      {
        title: "Permissions",
        path: "/docs/config/permissions",
      },
      { title: "Environment", path: "/docs/config/environment" },
      {
        title: "Secrets",
        path: "/docs/config/secrets",
      },
    ],
  },

  // -- Running Grouparoo --
  {
    title: "Running Grouparoo",
    path: "/docs/running-grouparoo",
    children: [
      {
        title: "Commands",
        path: "/docs/running-grouparoo/commands",
      },
      {
        title: "Testing",
        path: "/docs/running-grouparoo/testing",
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
      {
        title: "What's New",
        path: "/whats-new",
      },
      {
        title: "Roadmap",
        path: "/roadmap",
        target: "_blank",
      },
    ],
  },

  // -- Support --
  {
    title: "Support",
    path: "/docs/support",
    children: [
      { title: "Common Issues", path: "/docs/support/common-issues" },
      { title: "Debugging", path: "/docs/support/debugging" },
      { title: "Telemetry", path: "/docs/support/telemetry" },
      { title: "Security", path: "/docs/support/security" },
      { title: "Network", path: "/docs/support/network" },
      { title: "Monitoring", path: "/docs/support/monitoring" },
      { title: "Legal", path: "/docs/support/legal" },
      {
        title: "Upgrading Grouparoo",
        path: "/docs/support/upgrading-grouparoo",
      },
    ],
  },
];

export default DocsNav;
