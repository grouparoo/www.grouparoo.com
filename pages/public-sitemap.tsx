import fs from "fs";
import path from "path";
import SitemapSection from "../components/sitemapSection";

export default function PublicSitemap(props) {
  let { sitemap } = props.pageProps;

  console.log(sitemap);

  return (
    <div>
      <SitemapSection paths={sitemap[""]["blog"]} background="light" />
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
  return { props: { sitemap: ret } };
}
