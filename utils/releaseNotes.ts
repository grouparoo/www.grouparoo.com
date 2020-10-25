import { loadEntries, loadMdxFilePath } from "./mdxUtils";
import BlogImage from "../components/blog/image";
import { Feed } from "feed";

export type ReleaseNote = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  blog: string;
  html: string;
  source: any;
};

function PermanentImage(props) {
  return BlogImage({ ...props, permalink: true });
}
// These keys need to match the one in whats-new/index
const components = { Image: PermanentImage };

export async function getReleaseNotes(): Promise<ReleaseNote[]> {
  const releases = await loadEntries(["..", "releases"]);
  releases.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const notes = [];
  for (const release of releases) {
    const { filePath, slug } = release;
    const { source, frontMatter } = await loadMdxFilePath(filePath, components);
    const { title, date } = frontMatter;
    const tags = frontMatter.tags || [];
    const blog = frontMatter.blog || null;
    const html = source.renderedOutput;
    notes.push({ title, slug, date, tags, blog, source, html });
  }
  return notes;
}

export async function getFeed(): Promise<Feed> {
  const feed = new Feed({
    title: "Grouparoo: What's New",
    description: "Notes about product updates as they happen.",
    id: "https://www.grouparoo.com/whats-new",
    link: "https://www.grouparoo.com/whats-new",
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "https://www.grouparoo.com/favicon/favicon-196x196.png",
    favicon: "https://www.grouparoo.com/favicon/favicon-32x32.png",
    copyright: "© Grouparoo, Inc. 2020",
    generator: "Feed for Node.js",
    feedLinks: {
      json: "https://www.grouparoo.com/feeds/whatsnew.json",
      rss: "https://www.grouparoo.com/feeds/whatsnew.xml",
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
