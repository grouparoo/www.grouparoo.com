import { Feed } from "feed";
import { getReleaseNotes, ReleaseNote } from "./releaseNotes";

export async function getFeed(): Promise<Feed> {
  const feed = new Feed({
    title: "Grouparoo: What's New",
    description: "Updates on product updates as they happen.",
    id: "https://www.grouparoo.com/whats-new",
    link: "https://www.grouparoo.com/whats-new",
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "https://www.grouparoo.com/favicon/favicon-196x196.png",
    favicon: "https://www.grouparoo.com/favicon/favicon-32x32.png",
    copyright: "© Grouparoo, Inc. 2020",
    generator: "Feed for Node.js",
    feedLinks: {
      json: "https://www.grouparoo.com/api/feeds/whatsnew.json",
      rss: "https://www.grouparoo.com/api/feeds/whatsnew.xml",
    },
    author: {
      name: "Grouparoo, Inc.",
      email: "hello@grouparoo.com",
      link: "https://www.grouparoo.com",
    },
  });

  const notes: ReleaseNote[] = await getReleaseNotes();
  for (const note of notes) {
    feed.addItem({
      title: note.title,
      id: `grouparoo-release-note-${note.slug}`,
      link: `https://www.grouparoo.com/whats-new#${note.slug}`,
      //description: "description in rss, summary in json",
      content: note.html,
      author: [
        {
          name: "Grouparoo, Inc.",
          email: "hello@grouparoo.com",
          link: "https://www.grouparoo.com",
        },
      ],
      date: new Date(note.date),
      //image: post.image,
    });
  }
  return feed;
}
