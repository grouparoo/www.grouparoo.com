const readSitemap = require("./scripts/readSitemap").readSitemap;
const sitemapUrls = readSitemap("http://localhost:54321");

// filter out some pages
const urls = [];
const singles = {
  "/whats-new/": false,
};
for (const url of sitemapUrls) {
  // only need 1 one a few of them
  let skip = false;
  for (const singlePath in singles) {
    if (url.includes(singlePath)) {
      if (singles[singlePath]) {
        skip = true;
      }
      singles[singlePath] = true;
    }
  }
  if (!skip) {
    urls.push(url);
  }
}

module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: urls,
      startServerCommand: "PORT=54321 npm start",
      settings: {
        onlyCategories: [
          "performance",
          "best-practices",
          "accessibility",
          "seo",
        ], // removes pwa (progressive web app)
        skipAudits: [
          "canonical", // never will be right on localhost
        ],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
