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
    dest: "/docs/config/first-time-setup",
  },
];

/* -- Deployment -- */

const deploymentRedirects = [
  {
    src: "/docs/deployment/environment",
    dest: "/docs/config/environment",
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

const combinedRedirects = [
  ...guidesRedirects,
  ...deploymentRedirects,
  ...developmentRedirects,
  ...communityRedirects,
];

module.exports = combinedRedirects.map(({ src, dest, permanent }) => ({
  source: src,
  destination: dest,
  statusCode: permanent ? 301 : 302,
}));
