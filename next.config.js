const docsRedirects = require("./data/docs-redirects");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    ROBOTS_DISABLED: process.env.ROBOTS_DISABLED,
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    GOOGLE_ADS_DEMO_CONVERSION: process.env.GOOGLE_ADS_DEMO_CONVERSION,
    GOOGLE_ADS_SUBSCRIBE_CONVERSION:
      process.env.GOOGLE_ADS_SUBSCRIBE_CONVERSION,
    GOOGLE_ADS_TRIAL_CONVERSION: process.env.GOOGLE_ADS_TRIAL_CONVERSION,
  },
  sassOptions: {
    includePaths: [require("path").join(__dirname, "scss")],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
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
        source: "/blog/bigquery-source",
        destination: "/integrations/sources/bigquery",
        statusCode: 301,
      },
      {
        source: "/solutions/customer-data-platform",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/blog/hubspot-destination",
        destination: "/integrations/destinations/hubspot",
        statusCode: 301,
      },
      {
        source: "/blog/mailchimp-destination",
        destination: "/integrations/destinations/mailchimp",
        statusCode: 301,
      },
      {
        source: "/blog/marketo-destination",
        destination: "/integrations/destinations/marketo",
        statusCode: 301,
      },
      {
        source: "/blog/sailthru-destination",
        destination: "/integrations/destinations/sailthru",
        statusCode: 301,
      },
      {
        source: "/blog/salesforce-destination",
        destination: "/integrations/destinations/salesforce",
        statusCode: 301,
      },
      {
        source: "/blog/salesforce-destination",
        destination: "/integrations/destinations/salesforce",
        statusCode: 301,
      },
      {
        source: "/docs/plugins/:slug",
        destination: "/docs/integrations/:slug",
        statusCode: 301,
      },
      {
        source: "/solutions/marketers",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/feature-request",
        destination:
          "https://github.com/grouparoo/grouparoo/issues/new?assignees=&labels=enhancement&template=feature_request.yml&title=%5BFeature%5D%3A+",
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

module.exports = nextConfig;
