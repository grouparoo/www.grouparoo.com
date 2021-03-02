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
  github: string;
  source: any;
};

const LIMIT = 10;

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
  const { title, date, description, tags, blog, github } = frontMatter;
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
    github: github || null,
    blog: blog || null,
    source,
  };
}

export async function getReleaseNotes(pageNumber: number = 1, limit = LIMIT) {
  const offset = (pageNumber - 1) * limit;
  const notes = loadEntries(["whats-new"]);

  notes.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const paginatedNotes: ReleaseNote[] = await Promise.all(
    notes.slice(offset, offset + limit).map(async (release) => {
      const { filePath } = release;
      return getNote(filePath);
    })
  );

  // we need the number of 'hydrate' calls in the list view to match exactly on all pages
  while (paginatedNotes.length < limit) {
    paginatedNotes.push({
      title: null,
      slug: null,
      date: null,
      description: null,
      source: {
        compiledSource:
          "function MDXContent() { return null }" +
          "MDXContent.isMDXComponent = false;",
        renderedOutput: null,
        scope: {},
      },
      image: null,
      tags: [],
      github: null,
      blog: null,
    });
  }

  console.log(paginatedNotes[0]);

  return { notes: paginatedNotes, limit, offset, total: notes.length };
}

export async function getReleaseNote(slug: string) {
  const notes = loadEntries(["whats-new"]);
  const release = notes.find((n) => n.slug === slug);
  const { filePath } = release;
  return getNote(filePath);
}

export async function getReleasePaths() {
  return getStaticMdxPaths(["whats-new"]);
}

export async function getFeed(): Promise<Feed> {
  const total = loadEntries(["whats-new"]).length;
  const { notes } = await getReleaseNotes(1, total);
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
