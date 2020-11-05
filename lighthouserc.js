const readSitemap = require("./scripts/readSitemap").readSitemap;
const sitemapUrls = readSitemap("http://localhost:54321");

// filter out some pages
const urls = [];
let whatsNew = false;
for (const url of sitemapUrls) {
  // only need 1 /whats-new
  if (url.includes("/whats-new/")) {
    if (whatsNew) {
      continue;
    }
    whatsNew = true;
  }
  urls.push(url);
}

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: ["http://localhost:54321/", "http://localhost:54321/about"],
      startServerCommand: "PORT=54321 npm start",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
