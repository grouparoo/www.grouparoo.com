import { SitemapStream, streamToPromise } from "sitemap";
import blogEngine from "./blogEngine";
import docsEngine from "./docEngine";

async function addStaticPages(smStream: SitemapStream) {
  smStream.write({ url: "/", priority: 1.0, changefreq: "daily" });
  smStream.write({
    url: "/solutions/marketers",
    priority: 1.0,
    changefreq: "daily",
  });
  smStream.write({
    url: "/solutions/engineers",
    priority: 1.0,
    changefreq: "daily",
  });

  smStream.write({ url: "/meet", priority: 0.3, changefreq: "daily" });
  smStream.write({ url: "/blog", priority: 0.3, changefreq: "daily" });
  smStream.write({ url: "/support", priority: 0.3, changefreq: "daily" });
  smStream.write({ url: "/about", priority: 0.3, changefreq: "daily" });
}

async function addSolutionsPages(smStream: SitemapStream) {
  const pages = [
    "/integrations/sources/bigquery",
    "/integrations/sources/redshift",
    "/integrations/sources/postgres",
    "/integrations/sources/mysql",
    "/integrations/destinations/sailthru",
    "/integrations/destinations/zendesk",
    "/integrations/destinations/hubspot",
    "/integrations/destinations/mailchimp",
    "/integrations/destinations/marketo",
  ];

  pages.forEach((page) => {
    smStream.write({
      url: page,
      priority: 0.6,
      changefreq: "daily",
    });
  });
}

async function addBlogPages(smStream: SitemapStream) {
  let recent: Date = null;
  const entries = blogEngine.getEntries();
  for (let entry of entries) {
    smStream.write({
      url: entry.path,
      priority: 0.6,
      changefreq: "daily",
      lastmod: entry.date,
    });

    if (entry.date && (!recent || entry.date > recent)) {
      // found a newer one
      recent = entry.date;
    }
  }

  // write the index with the most recent entry
  smStream.write({
    url: "/blog",
    priority: 0.6,
    changefreq: "daily",
    lastmod: recent,
  });
}

async function addDocsPages(smStream: SitemapStream) {
  let recent: Date = null;
  const entries = docsEngine.getEntries();
  for (let entry of entries) {
    smStream.write({
      url: entry.path,
      priority: 0.6,
      changefreq: "daily",
      lastmod: entry.date,
    });

    if (entry.date && (!recent || entry.date > recent)) {
      // found a newer one
      recent = entry.date;
    }
  }

  // write the index with the most recent entry
  smStream.write({
    url: "/blog",
    priority: 0.6,
    changefreq: "daily",
    lastmod: recent,
  });
}

export default async function getSitemap() {
  const smStream = new SitemapStream({ hostname: "https://www.grouparoo.com" });
  await addStaticPages(smStream);
  await addSolutionsPages(smStream);
  await addBlogPages(smStream);
  await addDocsPages(smStream);
  smStream.end();
  return await streamToPromise(smStream).then((sm) => sm.toString());
}
