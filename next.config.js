const fs = require("fs");
const path = require("path");
const os = require("os");

// const withMdxEnhanced = require("next-mdx-enhanced");
// const rehypePrism = require("@mapbox/rehype-prism");

const withOptimizedImages = require("next-optimized-images");

// on boot, touch the blogPost and docPost files to force MDX to re-render the files
// [
//   path.join(__dirname, "utils", "blogPosts.ts"),
//   path.join(__dirname, "utils", "docPosts.ts"),
// ].forEach((f) => {
//   const lines = fs.readFileSync(f).toString().split(os.EOL);
//   const newLines = lines.map((line) => {
//     if (line.includes("<<random-timestamp>>")) {
//       return `//<<random-timestamp>> ${new Date().toISOString()}`;
//     } else {
//       return line;
//     }
//   });
//   fs.writeFileSync(f, newLines.join(os.EOL));
// });

module.exports = withOptimizedImages(
  // withMdxEnhanced({
  //   layoutPath: "components/layouts",
  //   defaultLayout: false,
  //   fileExtensions: ["mdx"],
  //   remarkPlugins: [],
  //   rehypePlugins: [[rehypePrism, {}]],
  //   extendFrontMatter: {
  //     process: (mdxContent, frontMatter) => {},
  //     phase: "both",
  //   },
  // })(
  {
    responsive: {
      adapter: require("responsive-loader/sharp"),
    },
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
      return [{ source: "/sitemap.xml", destination: "/api/sitemap" }];
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
      ];
    },
  }
);
// );
