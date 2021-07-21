import { SitemapStream, streamToPromise } from "sitemap";
import glob from "glob";
import path from "path";
import { getUseCasePaths } from "../data/plugins";
import Authors from "../data/authors";
import { badgeTypes } from "../data/blogTags";

let pagesDir;
if (!__dirname || __dirname === "/") {
  pagesDir = path.resolve(path.join(process.cwd(), "pages"));
} else {
  pagesDir = path.resolve(path.join(__dirname, "..", "pages"));
}

interface PagePathsResponse {
  paths: string[];
  fallback: boolean;
}

export async function getAuthorPaths(): Promise<PagePathsResponse> {
  const paths = Authors.map((a) => `/blog/author/${a.slug}`);
  return { paths, fallback: false };
}

export async function getBlogCategoryPaths(): Promise<PagePathsResponse> {
  const paths = Object.keys(badgeTypes).map((tag) => `/blog/category/${tag}`);
  return { paths, fallback: false };
}

async function getPagePaths() {
  const paths = glob
    .sync(path.join(pagesDir, "**", "+(*.tsx|*.mdx)"))
    .filter((p) => !p.match(/\/\[.*\].*.tsx$/))
    .filter((p) => !p.match(/\/_document.tsx$/))
    .filter((p) => !p.match(/\/_app.tsx$/))
    .filter((p) => !p.match(/\/404.tsx$/))
    .filter((p) => !p.match(/\/docker-compose.tsx$/))
    .map((p) => p.replace(pagesDir, ""))
    .map((p) => p.replace(/\.tsx$/, ""))
    .map((p) => p.replace(/\.mdx$/, ""))
    .map((p) => p.replace(/\/index$/, "/"));

  return paths;
}

async function getStaticPaths() {
  const methods = [getUseCasePaths];
  let allPaths = [];
  for (const method of methods) {
    const { paths } = await method();
    allPaths = allPaths.concat(paths);
  }
  return allPaths;
}

export async function getSitemapStream() {
  const smStream = new SitemapStream({ hostname: "https://www.grouparoo.com" });

  const pages = await getPagePaths();
  const integrations = await getStaticPaths();
  //author and category pages automatically excluded
  const toExclude = [/^\/whats-new\/*/];

  const paths = pages
    .concat(integrations)
    .map((p) =>
      p.charAt(p.length - 1) === "/" ? p.substring(0, p.length - 1) : p
    )
    .sort((a, b) => a.split("/").length - b.split("/").length);
  paths.forEach((p) => {
    let priority = 0.6;
    if (p.split("/").length <= 2) priority = 1.0;
    if (p.match(/^\/solutions\//)) priority = 1.0;
    smStream.write({ url: p, priority, changefreq: "daily" });
  });

  smStream.end();
  return await streamToPromise(smStream).then((sm) => sm.toString());
}
