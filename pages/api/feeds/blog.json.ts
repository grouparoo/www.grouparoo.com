import { IncomingMessage, ServerResponse } from "http";
import { getFeed } from "../../../utils/blogPosts";

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  res.setHeader("Content-Type", "application/json");
  try {
    const feed = await getFeed();
    res.write(feed.json1());
    res.end();
  } catch (e) {
    console.log(e);
    res.statusCode = 500;
    res.end();
  }
}
