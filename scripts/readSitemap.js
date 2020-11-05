const path = require("path");
const fs = require("fs");

const productionHost = "https://www.grouparoo.com";
function readSitemap(changeHost = null) {
  const fullPath = path.resolve(
    path.join(__dirname, "..", "public", "sitemap.xml")
  );
  const urls = [];
  const content = fs.readFileSync(fullPath).toString();
  const regex = /<\s*loc\s*>(.+)<\s*\/loc\s*>/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    let found = match[1];
    if (changeHost) {
      found = found.replace(productionHost, changeHost);
    }
    urls.push(found);
  }
  return urls;
}

module.exports.default = readSitemap;
