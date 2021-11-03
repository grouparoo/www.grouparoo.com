import fs from "fs";
import path from "path";
import SitemapSection from "../components/sitemap/sitemapSection";
import SitemapBlogSection from "../components/sitemap/sitemapBlogSection";
import { getBlogEntries } from "../utils/blogPosts";

export default function PublicSitemap(props) {
  const { sitemap, entries } = props.pageProps;

  console.log(entries);
  return (
    <div>
      {Object.keys(sitemap[""]).map((dir, index) => {
        let paths = sitemap[""][dir];
        let background;

        index % 2 === 0 ? (background = "light") : (background = "dark");
        return (
          <SitemapSection
            key={dir}
            category={dir}
            paths={paths}
            background={background}
          />
        );
      })}
      <SitemapBlogSection entries={entries} />
    </div>
  );
}

export async function getStaticProps(context) {
  const sitemapPath = path.join(process.cwd(), "public", "public-sitemap.json");

  const data = await fs.readFileSync(sitemapPath, "utf8");
  let paths = JSON.parse(data);

  let ret = {};
  await paths.forEach((path) => {
    const dirs = path.split("/");
    const filename = dirs.pop();

    //build sitemap object
    let dirObject = ret;

    dirs.forEach((dir, i) => {
      if (i === dirs.length - 1) {
        if (dir.length === 0) {
          dir = "other";
        }
        dirObject[dir] = dirObject[dir] || [];
        dirObject[dir].push(filename);
      } else {
        dirObject[dir] = dirObject[dir] || {};
      }

      dirObject = dirObject[dir];
    });
    return ret;
  });

  ret[""]["other"] = ret["other"];
  delete ret["other"];
  delete ret[""]["whats-new"];
  delete ret[""]["blog"];
  ret[""]["integrations"] = ret[""]["integrations"]["destinations"].concat(
    ret[""]["integrations"]["sources"]
  );

  const blogPosts = await getBlogEntries(1, null, null, 1000);
  let sortedEntries = {};

  blogPosts.entries.map((entry) => {
    const primaryTag = entry.tags[0];
    sortedEntries[primaryTag] = sortedEntries[primaryTag] || [];
    sortedEntries[primaryTag].push(entry);
  });

  return { props: { sitemap: ret, entries: sortedEntries } };
}
