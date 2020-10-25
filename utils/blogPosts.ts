import { loadEntries, loadMdxFile, getStaticMdxPaths } from "./mdxUtils";
import getAuthor from "./getAuthor";
import BlogImage from "../components/blog/image";
import { Alert, Card } from "react-bootstrap";
import { Feed } from "feed";

function PermanentImage(props) {
  return BlogImage({ ...props, permalink: true });
}
// These keys need to match the one in blog/[post]
const components = { Image: PermanentImage, Alert, Card, CardBody: Card.Body };

export interface BlogEntry {
  title: string;
  date: string;
  author: string;
  pullQuote: string;
  tags: string[];
  path: string;
  slug: string;
}

export interface BlogPost extends BlogEntry {
  html: string;
  source: any;
}

export async function getBlogPaths() {
  return getStaticMdxPaths(["blog"]);
}

export async function getBlogEntries(): Promise<BlogEntry[]> {
  const entries = await loadEntries(["blog"]);
  entries.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return entries;
}

export async function getBlogPost(slug): Promise<BlogPost> {
  const { source, frontMatter } = await loadMdxFile(
    ["blog", `${slug}.mdx`],
    components
  );
  const html = source.renderedOutput;
  const post: any = Object.assign({}, frontMatter, { html, source });
  return post;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await getBlogEntries();
  const posts = [];
  for (const entry of entries) {
    const post = await getBlogPost(entry.slug);
    posts.push(post);
  }
  return posts;
}

export async function getFeed(): Promise<Feed> {
  const feed = new Feed({
    title: "Grouparoo: Blog",
    description: "Articles and updates from Grouparoo.",
    id: "https://www.grouparoo.com/blog",
    link: "https://www.grouparoo.com/blog",
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: "https://www.grouparoo.com/favicon/favicon-196x196.png",
    favicon: "https://www.grouparoo.com/favicon/favicon-32x32.png",
    copyright: "© Grouparoo, Inc. 2020",
    generator: "Feed for Node.js",
    feedLinks: {
      json: "https://www.grouparoo.com/api/feeds/blog.json",
      rss: "https://www.grouparoo.com/api/feeds/blog.xml",
    },
    author: {
      name: "Grouparoo, Inc.",
      email: "hello@grouparoo.com",
      link: "https://www.grouparoo.com",
    },
  });

  const posts: BlogPost[] = await getBlogPosts();
  for (const post of posts) {
    const author = getAuthor(post.author);
    feed.addItem({
      title: post.title,
      id: `grouparoo-blog-post-${post.slug}`,
      link: `https://www.grouparoo.com${post.path}`,
      //description: "description in rss, summary in json",
      content: post.html,
      author: [
        {
          name: author ? author.name : "Grouparoo, Inc.",
          link: author
            ? `https://www.grouparoo.com/blog/author/${author.slug}`
            : "https://www.grouparoo.com",
        },
      ],
      date: new Date(post.date),
      //image: post.image,
    });
  }
  return feed;
}
