interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

const DocsNav: { [section: string]: NavItem } = {
  // --- Try Now ---
  "try-now": { title: "Try Now!", path: "/docs/try-now", children: [] },

  // --- Installation & Deployment ---
  deployment: {
    title: "Installation & Deployment",
    path: "/docs/deployment",
    children: [
      { title: "AWS & Kubernetes", path: "/docs/deployment/aws-and-k8s" },
      { title: "Code Config", path: "/docs/deployment/code-config" },
      { title: "Common Issues", path: "/docs/deployment/common-issues" },
      { title: "Docker & Docker Compose", path: "/docs/deployment/docker" },
      { title: "Environment", path: "/docs/deployment/environment" },
      { title: "Heroku", path: "/docs/deployment/heroku" },
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
    ],
  },

  // --- Guides ---
  guides: {
    title: "Guides",
    path: "/docs/guides",
    children: [
      { title: "Add Apps", path: "/docs/guides/add-apps" },
      {
        title: "Create Destinations",
        path: "/docs/guides/create-destinations",
      },
      { title: "Create Groups", path: "/docs/guides/create-groups" },
      {
        title: "Create Profile Properties",
        path: "/docs/guides/create-profile-properties",
      },
      { title: "Create Sources", path: "/docs/guides/create-sources" },
      { title: "First Time Setup", path: "/docs/guides/first-time-setup" },
      { title: "Product Concepts", path: "/docs/guides/product-concepts" },
    ],
  },

  // --- Development ---
  development: {
    title: "Development",
    path: "/docs/development",
    children: [
      { title: "Databases", path: "/docs/development/databases" },
      { title: "Data Flow", path: "/docs/development/dataflow" },
      { title: "Destinations", path: "/docs/development/destinations" },
      { title: "Events", path: "/docs/development/events" },
      { title: "Plugins", path: "/docs/development/plugins" },
      { title: "Publishing", path: "/docs/development/publishing" },
      {
        title: "Security Disclosures",
        path: "/docs/development/security-disclosures",
      },
      { title: "Sources", path: "/docs/development/sources" },
      { title: "Development Tools", path: "/docs/development/tools" },
      { title: "Typescript API", path: "/docs/development/typescript-api" },
    ],
  },

  // --- Community ---
  community: {
    title: "Community",
    path: "/docs/community",
    children: [
      { title: "Code of Conduct", path: "code-of-conduct" },
      { title: "Legal", path: "legal" },
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
};

export default DocsNav;
