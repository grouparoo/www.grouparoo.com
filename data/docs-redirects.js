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
    src: "/docs/config/apps",
    dest: "/docs/config/apps/community",
  },
  {
    src: "/docs/config/sources",
    dest: "/docs/config/sources/community",
  },
  {
    src: "/docs/config/properties",
    dest: "/docs/config/properties/community",
  },
  {
    src: "/docs/config/groups",
    dest: "/docs/config/groups/community",
  },
  {
    src: "/docs/config/destinations",
    dest: "/docs/config/destinations/community",
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
