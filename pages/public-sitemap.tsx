import { parseString } from "xml2js";
import path from "path";
import fs from "fs";

async function parseSitemap(sitemap) {
  /*Next step: parse sitemap to feed to page: 
    { dirName1: {subDir1: [page, page, page, page], 
                 subDir2: [page, page, page, page]},
      dirName2: {subDir1: [page, page, page, page], 
                 subDir2: [page, page, page, page]},
      dirName3: {subDir1: [page, page, page, page], 
                 subDir2: [page, page, page, page]},
      other: [page, page, page, page]
    }
    Create a sitemapSection component for each top-level object (subDirs are categories within the sections)

    Most can be parsed based on path... but special attention will be needed for blog post categories (how to sort by those?)
  */
}

export default function PublicSitemap(props) {
  parseSitemap(props.pageProps.sitemap);

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

// filter results of getStaticProps by the array to categorize pages
// ie: if path.contains(blog/*) && path.notContains(category, author) {blogPosts.push()}
// end up with an array of pages, posts, docs
// each array generates a <sitemapSection />
