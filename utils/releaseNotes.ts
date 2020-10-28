import { loadEntries, loadMdxFilePath, getStaticMdxPaths } from "./mdxUtils";
import BlogImage from "../components/blog/image";
import { Feed } from "feed";

export type ReleaseNote = {
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  blog: string;
  source: any;
};

function PermanentImage(props) {
  return BlogImage({ ...props, permalink: true });
}
// These keys need to match the one in whats-new/index
const components = { Image: PermanentImage };

async function getNote(filePath): Promise<ReleaseNote> {
  const { source, frontMatter, slug } = await loadMdxFilePath(
    filePath,
    components
  );
  const { title, date, description, tags, blog } = frontMatter;
  let { image } = frontMatter;
  if (image && !image.startsWith("http")) {
    image = `https://www.grouparoo.com/posts/${image}`;
  }

  return {
    title,
    slug,
    date,
    description,
    image: image || null,
    tags,
    blog: blog || null,
    source,
  };
}

export async function getReleaseNotes(): Promise<ReleaseNote[]> {
  const releases = loadEntries(["whats-new"]);
  releases.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  const notes = [];
  for (const release of releases) {
    const { filePath } = release;
    const note = await getNote(filePath);
    notes.push(note);
  }
  return notes;
}

export async function getReleasePaths() {
  return getStaticMdxPaths(["whats-new"]);
}

export async function getFeed(): Promise<Feed> {
  const notes: ReleaseNote[] = await getReleaseNotes();
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
    updated: notes[0] ? new Date(notes[0].date) : null,
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
  for (const note of notes) {
    feed.addItem({
      title: note.title,
      id: `grouparoo-release-note-${note.slug}`,
      link: `https://www.grouparoo.com/whats-new#${note.slug}`,
      //description: "description in rss, summary in json",
      content: note.source.renderedOutput,
      author: [
        {
          name: "Grouparoo, Inc.",
          email: "hello@grouparoo.com",
          link: "https://www.grouparoo.com",
        },
      ],
      date: new Date(note.date),
      image: note.image,
    });
  }
  return feed;
}
