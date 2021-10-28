import { parseString } from "xml2js";
import path from "path";
import fs from "fs";

export default function PublicSitemap(props) {
  console.log(props.pageProps.sitemap);
  return <div>hi</div>;
}

export async function getStaticProps(context) {
  // const sitemapPath = path.resolve(path.join(process.cwd(), "sitemap.xml"));
  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  let sitemapData;

  var data = fs.readFileSync(sitemapPath, "utf8");
  let sitemap = data.toString().replace("\ufeff", "");

  parseString(sitemap, function (err, result) {
    sitemapData = JSON.stringify(result.urlset.url, null, 2);
    return sitemapData;
  });

  return { props: { sitemap: sitemapData } };
}

// getStaticProps: get all pages from the sitemap
// create an array of page sections
// array.sort
// filter results of getStaticProps by the array to categorize pages
// ie: if path.contains(blog/*) && path.notContains(category, author) {blogPosts.push()}
// end up with an array of pages, posts, docs
// each array generates a <sitemapSection />
