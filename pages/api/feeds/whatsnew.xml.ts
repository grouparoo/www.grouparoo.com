import { IncomingMessage, ServerResponse } from "http";
import { getFeed } from "../../../utils/releaseNotes";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  res.setHeader("Content-Type", "text/xml");
  try {
    const feed = await getFeed();
    res.write(feed.rss2());
    res.end();
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.end();
  }
}
