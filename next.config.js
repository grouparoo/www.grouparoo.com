const docsRedirects = require("./data/docs-redirects");

module.exports = {
  env: {
    ROBOTS_DISABLED: process.env.ROBOTS_DISABLED,
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
  },
  webpack: (config) => {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.excalidraw$/, use: "raw-loader" });
    return config;
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
