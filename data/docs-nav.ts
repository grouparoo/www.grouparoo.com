interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

const DocsNav: NavItem[] = [
  // --- Try Now ---
  { title: "Try Now!", path: "/docs/try-now", children: [] },

  // --- Installation & Deployment ---
  {
    title: "MOVE ME!",
    path: "/",
    children: [
      { title: "Code Config", path: "/docs/deployment/code-config" },
      { title: "Common Issues", path: "/docs/deployment/common-issues" },
      {
        title: "Monitoring & Debugging",
        path: "/docs/deployment/monitoring-and-debugging",
      },
      { title: "Security", path: "/docs/deployment/security" },
      { title: "Telemetry", path: "/docs/deployment/telemetry" },
      { title: "Topology", path: "/docs/deployment/topology" },
      {
        title: "Upgrading Grouparoo",
        path: "/docs/deployment/upgrading-grouparoo",
      },
      { title: "First Time Setup", path: "/docs/guides/first-time-setup" },
      { title: "Product Concepts", path: "/docs/guides/product-concepts" },
      {
        title: "Security Disclosures",
        path: "/docs/development/security-disclosures",
      },
      { title: "Legal", path: "/docs/community/legal" },
    ],
  },

  // --- Installation & Deployment ---
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

  // --- Configuration ---
  {
    title: "Configuration",
    path: "/docs/config",
    children: [
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
      // TODO: Settings
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

  // --- Development ---
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

  // --- Community ---
  {
    title: "Community",
    path: "/docs/community",
    children: [
      { title: "Code of Conduct", path: "/docs/community/code-of-conduct" },
      { title: "Contributions", path: "/docs/community/contributions" },
      {
        title: "Forum",
        path: "https://github.com/grouparoo/grouparoo/discussions",
      },
      {
        title: "What's New",
        path: "/whats-new",
      },
      {
        title: "Roadmap",
        path: "/roadmap",
      },
    ],
  },
];

export default DocsNav;
