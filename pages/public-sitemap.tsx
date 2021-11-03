import fs from "fs";
import path from "path";
import SitemapSection from "../components/sitemap/sitemapSection";
import SitemapBlogSection from "../components/sitemap/sitemapBlogSection";
import SitemapIntegrationSection from "../components/sitemap/sitemapIntegrationsSection";
import { getBlogEntries } from "../utils/blogPosts";
import SEO from "../components/seo";

export default function PublicSitemap(props) {
  const { sitemap, entries, integrations } = props.pageProps;

  console.log(entries);
  return (
    <>
      <SEO
        canonical={true}
        description="Grouparoo is the Reverse ETL product that integrates with all of your team's business tools such as CRMs and Marketing Automation."
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        path="/public-sitemap"
        title="Grouparoo: Sitemap"
      />

      <div>
        <h1 className="mx-auto text-center">Sitemap</h1>
        {Object.keys(sitemap[""]).map((dir, index) => {
          let paths = sitemap[""][dir];
          let background;

          index % 2 === 0 ? (background = "dark") : (background = "light");
          return (
            <SitemapSection
              key={dir}
              category={dir}
              paths={paths}
              background={background}
            />
          );
        })}
        <SitemapIntegrationSection integrations={integrations} />
        <SitemapBlogSection entries={entries} />
      </div>
    </>
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

  const integrations = {};
  integrations["sources"] = ret[""]["integrations"]["sources"];
  integrations["destinations"] = ret[""]["integrations"]["sources"];
  integrations["other"] = ret[""]["integrations"].filter(
    (item) =>
      !integrations["sources"].includes(item) &&
      !integrations["destinations"].includes(item)
  );
  delete ret[""]["integrations"];

  const blogPosts = await getBlogEntries(1, null, null, 1000);
  let sortedEntries = {};

  blogPosts.entries.map((entry) => {
    const primaryTag = entry.tags[0];
    sortedEntries[primaryTag] = sortedEntries[primaryTag] || [];
    sortedEntries[primaryTag].push(entry);
  });

  return {
    props: { sitemap: ret, entries: sortedEntries, integrations: integrations },
  };
}
