import "../setup";
import path from "path";
import fs from "fs";
import glob from "glob";
import makeTable from "markdown-table";
import { URL } from "url";

const lighthousePath = path.resolve(
  path.join(__dirname, "..", ".lighthouseci")
);
async function build() {
  if (!fs.existsSync(lighthousePath)) {
    throw new Error(`lighthouse output missing: ${lighthousePath}`);
  }
  const urlData = readUrls();
  const urlReport = readLinks();
  const comment = getComment(urlData, urlReport);
  writeToFile(comment);
}

function readUrls() {
  const paths = glob.sync(path.join(lighthousePath, "lhr-*.json"));
  const urlData = {};
  for (const filePath of paths) {
    const content = fs.readFileSync(filePath).toString();
    const data = JSON.parse(content);
    const url = data.finalUrl;
    if (!url) {
      throw new Error("no url!");
    }
    urlData[url] = data;
  }
  return urlData;
}

function readLinks() {
  const filePath = path.join(lighthousePath, "links.json");
  if (!fs.existsSync(filePath)) {
    throw new Error(`missing links.json file: ${filePath}`);
  }
  const content = fs.readFileSync(filePath).toString();
  const data = JSON.parse(content);
  return data;
}

function getScore(data, key) {
  const score = data.categories[key].score;
  let emoji = "❓";
  let value = score;
  if (score === null) {
    value = "null";
  } else if (score === undefined) {
    value = "undefined";
  } else {
    value = Math.round(score * 100);
    if (value >= 90) {
      emoji = "🟢";
    } else if (value >= 60) {
      emoji = "🟠";
    } else {
      emoji = "🔴";
    }
  }

  return `${emoji} ${value || "unknown"}`;
}

function getTitle(url, urlReport) {
  const parsed = new URL(url);
  const pathName = parsed.pathname;
  const report = urlReport[url];
  if (!report) {
    return pathName;
  }
  return `[${pathName}](${report})`;
}

function getComment(urlData, urlReport) {
  const table = [
    ["Path", "Performance", "Accessibility", "Best Practices", "SEO"],
  ];
  const urls = Object.keys(urlData);
  for (const url of urls) {
    const data = urlData[url];
    const title = getTitle(url, urlReport);
    const performance = getScore(data, "performance");
    const accessibility = getScore(data, "accessibility");
    const practices = getScore(data, "best-practices");
    const seo = getScore(data, "seo");
    table.push([title, performance, accessibility, practices, seo]);
  }

  const output = makeTable(table);
  return output;
}

function writeToFile(comment) {
  console.log(comment);
  const filePath = path.join(lighthousePath, "comment.md");
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
  fs.writeFileSync(filePath, comment);
}

function main() {
  build().then(
    () => {
      process.exit(0);
    },
    (error) => {
      console.error(`ERROR! ${error}`);
      process.exit(1);
    }
  );
}

// run it!
main();
