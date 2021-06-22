/* -- Guides -- */

const guidesRedirects = [
  {
    src: "/docs/guides",
    dest: "/docs/config",
  },
  {
    src: "/docs/guides/add-apps",
    dest: "/docs/config/apps",
  },
  {
    src: "/docs/guides/create-sources",
    dest: "/docs/config/sources",
  },
  {
    src: "/docs/guides/create-profile-properties",
    dest: "/docs/config/properties",
  },
  {
    src: "/docs/guides/create-groups",
    dest: "/docs/config/groups",
  },
  {
    src: "/docs/guides/create-destinations",
    dest: "/docs/config/destinations",
  },
  {
    src: "/docs/guides/product-concepts",
    dest: "/docs/getting-started/product-concepts",
  },
  {
    src: "/docs/guides/first-time-setup",
    dest: "/docs/getting-started",
  },
  {
    src: "/docs/getting-started/first-time-setup",
    dest: "/docs/getting-started",
  },
];

/* -- Deployment -- */

const deploymentRedirects = [
  {
    src: "/docs/deployment/environment",
    dest: "/docs/support/environment",
  },
  {
    src: "/docs/deployment/common-issues",
    dest: "/docs/support/common-issues",
  },
  {
    src: "/docs/deployment/monitoring-and-debugging",
    dest: "/docs/support/debugging",
  },
  {
    src: "/docs/deployment/security",
    dest: "/docs/support/security",
  },
  {
    src: "/docs/deployment/topology",
    dest: "/docs/support/network",
  },
  {
    src: "/docs/deployment/upgrading-grouparoo",
    dest: "/docs/support/upgrading-grouparoo",
  },
  {
    src: "/docs/deployment/code-config",
    dest: "/docs/config/code-config",
  },
];

/* -- Development -- */

const developmentRedirects = [
  {
    src: "/docs/development/tools",
    dest: "/docs",
  },
  {
    src: "/docs/development/typescript-api",
    dest: "/docs",
  },
  {
    src: "/docs/development/security-disclosures",
    dest: "/docs/support/security",
  },
];

/* -- Community -- */

const communityRedirects = [
  {
    src: "/docs/community/legal",
    dest: "/docs/support/legal",
  },
];

/* --- Config --- */

const configRedirects = [
  {
    src: "/docs/config/apps/community",
    dest: "/docs/config/code-config/apps",
  },
  {
    src: "/docs/config/sources/community",
    dest: "/docs/config/code-config/sources",
  },
  {
    src: "/docs/config/properties/community",
    dest: "/docs/config/code-config/properties",
  },
  {
    src: "/docs/config/groups/community",
    dest: "/docs/config/code-config/groups",
  },
  {
    src: "/docs/config/destinations/community",
    dest: "/docs/config/code-config/destinations",
  },
  // Enterprise Guides
  {
    src: "/docs/config/ui-config",
    dest: "/docs/running/ui-enterprise",
  },
  {
    src: "/docs/config/apps/enterprise",
    dest: "/docs/running/ui-enterprise/apps",
  },
  {
    src: "/docs/config/sources/enterprise",
    dest: "/docs/running/ui-enterprise/sources",
  },
  {
    src: "/docs/config/properties/enterprise",
    dest: "/docs/running/ui-enterprise/properties",
  },
  {
    src: "/docs/config/groups/enterprise",
    dest: "/docs/running/ui-enterprise/groups",
  },
  {
    src: "/docs/config/destinations/enterprise",
    dest: "/docs/running/ui-enterprise/destinations",
  },
  // Settings
  {
    src: "/docs/config/settings",
    dest: "/docs/running/settings",
  },
  // Enterprise Guides
  {
    src: "/docs/config/apps/enterprise",
    dest: "/docs/running/ui-enterprise/apps",
  },
  {
    src: "/docs/config/sources/enterprise",
    dest: "/docs/running/ui-enterprise/sources",
  },
  {
    src: "/docs/config/properties/enterprise",
    dest: "/docs/running/ui-enterprise/properties",
  },
  {
    src: "/docs/config/groups/enterprise",
    dest: "/docs/running/ui-enterprise/groups",
  },
  {
    src: "/docs/config/destinations/enterprise",
    dest: "/docs/running/ui-enterprise/destinations",
  },
  // Settings
  {
    src: "/docs/config/settings",
    dest: "/docs/running/settings",
  },
];

const combinedRedirects = [
  ...guidesRedirects,
  ...deploymentRedirects,
  ...developmentRedirects,
  ...communityRedirects,
  ...configRedirects,
];

module.exports = combinedRedirects.map(({ src, dest, permanent }) => ({
  source: src,
  destination: dest,
  statusCode: permanent ? 301 : 302,
}));
