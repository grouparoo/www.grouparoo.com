const readSitemap = require("./scripts/readSitemap").default;
const urls = readSitemap("http://localhost:54321");

module.exports = {
  ci: {
    collect: {
      url: urls,
      startServerCommand: "PORT=54321 npm start",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
