import { SitemapStream, streamToPromise } from "sitemap";
import { IncomingMessage, ServerResponse } from "http";
import glob from "glob";
import path from "path";

export default async function SitemapAPI(
  req: IncomingMessage,
  res: ServerResponse
) {
  res.setHeader("Content-Type", "text/xml");
  try {
    const sitemap = await buildSitemapStream();
    res.write(sitemap);
    res.end();
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.end();
  }
}

export async function buildSitemapStream() {
  const dir = path.join(process.cwd(), "pages");
  const paths = glob
    .sync(path.join(dir, "**", "+(*.tsx|*.mdx)"))
    .filter((p) => !p.match(/\/\[.*\].*.tsx$/))
    .filter((p) => !p.match(/\/_app.tsx$/))
    .filter((p) => !p.match(/\/404.tsx$/))
    .filter((p) => !p.match(/\/docker-compose.tsx$/))
    .map((p) => p.replace(dir, ""))
    .map((p) => p.replace(/\.tsx$/, ""))
    .map((p) => p.replace(/\.mdx$/, ""))
    .map((p) => p.replace(/\/index$/, "/"))
    .map((p) =>
      p.charAt(p.length - 1) === "/" ? p.substring(0, p.length - 1) : p
    )
    .sort((a, b) => a.split("/").length - b.split("/").length);

  const smStream = new SitemapStream({ hostname: "https://www.grouparoo.com" });

  paths.forEach((p) => {
    let priority = 0.6;
    if (p.split("/").length <= 2) priority = 1.0;
    if (p.match(/^\/solutions\//)) priority = 1.0;
    smStream.write({ url: p, priority, changefreq: "daily" });
  });

  smStream.end();
  return await streamToPromise(smStream).then((sm) => sm.toString());
}
