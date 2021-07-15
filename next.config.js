const docsRedirects = require("./data/docs-redirects");

module.exports = {
  env: {
    ROBOTS_DISABLED: process.env.ROBOTS_DISABLED,
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    GOOGLE_ADS_DEMO_CONVERSION: process.env.GOOGLE_ADS_DEMO_CONVERSION,
    GOOGLE_ADS_SUBSCRIBE_CONVERSION:
      process.env.GOOGLE_ADS_SUBSCRIBE_CONVERSION,
    GOOGLE_ADS_TRIAL_CONVERSION: process.env.GOOGLE_ADS_TRIAL_CONVERSION,
  },
  async rewrites() {
    return [];
  },
  async redirects() {
    return [
      {
        source: "/nda",
        destination:
          "https://docs.google.com/forms/d/e/1FAIpQLSc0glIsjXN4gYKLR0usn5cZ22E2D4N-OibmRcJr7OPG_KVlqA/viewform",
        statusCode: 302,
      },
      { source: "/jobs", destination: "/about#careers", statusCode: 301 },
      { source: "/careers", destination: "/about#careers", statusCode: 301 },
      {
        source: "/roadmap",
        destination: "https://github.com/orgs/grouparoo/projects/26",
        statusCode: 302,
      },
      {
        source: "/docker-compose",
        destination:
          "https://raw.githubusercontent.com/grouparoo/omnibus/main/docker-compose.yml",
        statusCode: 301,
      },
      {
        source: "/feature-request",
        destination:
          "https://github.com/grouparoo/grouparoo/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=",
        statusCode: 302,
      },
      {
        source: "/support",
        destination: "/docs/support",
        statusCode: 302,
      },
      ...docsRedirects,
    ];
  },
};
