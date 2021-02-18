import { loadEntries, loadMdxFile, getStaticMdxPaths } from "./mdxUtils";
import getAuthor from "./getAuthor";
import BlogImage from "../components/blog/image";
import { Alert, Card } from "react-bootstrap";
import { Feed } from "feed";

function RelativeImage(props) {
  return BlogImage({ ...props, permalink: true });
}
// These keys need to match the one in blog/[post]
const components = { Image: RelativeImage, Alert, Card, CardBody: Card.Body };

export interface BlogEntry {
  title: string;
  date: string;
  author: string;
  pullQuote: string;
  tags: string[];
  path: string;
  slug: string;
  image: string;
}

export interface BlogPost extends BlogEntry {
  source: any;
  twitter_card: "summary" | "summary_large_image" | "app" | "player";
}

export async function getBlogPaths() {
  return getStaticMdxPaths(["blog"]);
}

export async function getBlogEntries(): Promise<BlogEntry[]> {
  const entries = loadEntries(["blog"]);
  entries.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return entries;
}

export async function getBlogPost(slugName): Promise<BlogPost> {
  const { source, frontMatter, path, slug } = await loadMdxFile(
    ["blog", `${slugName}.mdx`],
    components
  );
  const { title, date, author, pullQuote, tags, twitter_card } = frontMatter;
  let { image } = frontMatter;
  if (image && !image.startsWith("http")) {
    image = `https://www.grouparoo.com/posts/${image}`;
  }

  return {
    title,
    date,
    author,
    pullQuote,
    tags,
    path,
    slug,
    image: image || null,
    source,
    twitter_card,
  };
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
  const posts: BlogPost[] = await getBlogPosts();
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
    updated: posts[0] ? new Date(posts[0].date) : null,
    feedLinks: {
      json: "https://www.grouparoo.com/feeds/blog.json",
      rss: "https://www.grouparoo.com/feeds/blog.xml",
    },
    author: {
      name: "Grouparoo, Inc.",
      email: "hello@grouparoo.com",
      link: "https://www.grouparoo.com",
    },
  });

  for (const post of posts) {
    const author = getAuthor(post.author);
    feed.addItem({
      title: post.title,
      id: `grouparoo-blog-post-${post.slug}`,
      link: `https://www.grouparoo.com${post.path}`,
      //description: "description in rss, summary in json",
      content: post.source.renderedOutput,
      author: [
        {
          name: author ? author.name : "Grouparoo, Inc.",
          link: author
            ? `https://www.grouparoo.com/blog/author/${author.slug}`
            : "https://www.grouparoo.com",
        },
      ],
      date: new Date(post.date),
      image: post.image,
    });
  }
  return feed;
}
