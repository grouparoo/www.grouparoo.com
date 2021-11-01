import fs from "fs";
import path from "path";
import {
  getStaticPaths as getStaticSitemapPaths,
  getPagePaths,
} from "../utils/sitemap";

export default function PublicSitemap(props) {
  console.log(props.pageProps.sitemap);
  return <div>hi</div>;
}

export async function getStaticProps(context) {
  const sitemapPath = path.join(process.cwd(), "public", "public-sitemap.json");

  const data = await fs.readFileSync(sitemapPath, "utf8");
  let paths = data.toString().replace("\ufeff", "");
  let cleanPaths = JSON.parse(paths);

  let ret = {};
  await cleanPaths.forEach((path) => {
    const dirs = path.split("/");
    const filename = dirs.pop();

    let dirObject = ret;
    dirs.forEach((dir, i) => {
      if (i === dirs.length - 1) {
        dirObject[dir] = dirObject[dir] || [];
        dirObject[dir].push(filename);
      } else {
        dirObject[dir] = dirObject[dir] || {};
      }
      dirObject = dirObject[dir];
    });
  });

  console.log(ret);
  return { props: { sitemap: ret } };
}

// filter results of getStaticProps by the array to categorize pages
// ie: if path.contains(blog/*) && path.notContains(category, author) {blogPosts.push()}
// end up with an array of pages, posts, docs
// each array generates a <sitemapSection />
