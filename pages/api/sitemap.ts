import { IncomingMessage, ServerResponse } from "http";
import getSitemap from "../../utils/getSitemap";

export default async function sitemapFunc(
  req: IncomingMessage,
  res: ServerResponse
) {
  res.setHeader("Content-Type", "text/xml");
  try {
    const sitemap = await getSitemap();
    res.write(sitemap);
    res.end();
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.end();
  }
}
