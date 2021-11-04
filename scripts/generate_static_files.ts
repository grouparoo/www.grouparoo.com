import "../setup";
import path from "path";
import fs from "fs";
import { getFeed as whatsNewFeed } from "../utils/releaseNotes";
import { getFeed as blogFeed } from "../utils/blogPosts";
import { getPublicSitemap, getSitemapStream } from "../utils/sitemap";

async function build() {
  const feeds = writePublic(await feedContent());
  const sitemap = writePublic(await sitemapContent());
  const publicSitemap = writePublic(await jsonSitemap());
  return Promise.all([feeds]);
}

async function writePublic(contentMap): Promise<void> {
  const locations = Object.keys(contentMap);
  for (const location of locations) {
    const content = contentMap[location];
    const filePath = path.resolve(
      path.join(__dirname, "..", "public", location)
    );
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    console.log(`Writing: ${filePath}`);
    fs.writeFileSync(filePath, content);
  }
}

async function feedContent() {
  const whatsnew = await whatsNewFeed();
  const blog = await blogFeed();

  return {
    "feeds/whatsnew.json": whatsnew.json1(),
    "feeds/whatsnew.xml": whatsnew.rss2(),
    "feeds/blog.json": blog.json1(),
    "feeds/blog.xml": blog.rss2(),
  };
}

async function jsonSitemap() {
  // The JSON sitemap gets blogs from elsewhere.
  // We don't want the what's new pages or trial_landing.
  const paths = (await getPublicSitemap())
    .filter((p) => !p.includes("blog"))
    .filter((p) => !p.includes("whats-new"))
    .filter((p) => !p.includes("terms-"))
    .filter((p) => !p.includes("trial_landing"));

  return {
    "public-sitemap.json": JSON.stringify(paths, null, 2),
  };
}

async function sitemapContent() {
  const content = await getSitemapStream();
  return {
    "sitemap.xml": content,
  };
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
