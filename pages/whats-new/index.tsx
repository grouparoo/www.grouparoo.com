import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { Container, Badge } from "react-bootstrap";
import { loadEntries, loadMdxFilePath } from "../../utils/mdxUtils";
import hydrate from "next-mdx-remote/hydrate";

const components = {}; // can add components here to include in mdx

export type ReleasePost = {
  title: string;
  date: string;
  tags: string[];
  blog: string;
  source: any;
};

function ReleaseEntry(entry: ReleasePost, idx: number) {
  const { source, tags, date, title, blog } = entry;
  const content = hydrate(source, { components });
  return (
    <>
      <div key={`releaseEntry-${idx}`}>
        <h4 style={{ paddingBottom: 0 }}>{title}</h4>
        <div>
          {releaseDate(date)} {releaseTags(tags)}
        </div>
        <div>{content}</div>
        {blog ? (
          <Link href={`/blog/${blog}`}>
            <a>See more</a>
          </Link>
        ) : null}
      </div>
      <hr />
    </>
  );
}

export default function ReleaseIndex({ pageProps }) {
  let posts: ReleasePost[] = pageProps.posts;

  return (
    <>
      <Head>
        <title>Grouparoo: What's New</title>
      </Head>

      <Container>
        <h1>What's New</h1>
        <hr />
        {posts.length > 0 ? (
          posts.map((entry, idx) => ReleaseEntry(entry, idx))
        ) : (
          <p>No posts found</p>
        )}
      </Container>
      <br />
    </>
  );
}

export async function getStaticProps() {
  const releases = await loadEntries(["..", "releases"]);
  const posts = [];
  for (const release of releases) {
    const { filePath } = release;
    const { source, frontMatter } = await loadMdxFilePath(filePath, components);
    posts.push({ source, ...frontMatter });
  }
  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return { props: { posts } };
}

function releaseDate(date: string) {
  return <span>{date}</span>;
}

const badgeTypes = {
  new: "primary",
  improvement: "success",
  fix: "warning",
};

function releaseTags(tags: string[]) {
  return (
    <span>
      {tags.map((tag, idx) => (
        <Fragment key={`tag-${idx}`}>
          <Badge variant={badgeTypes[tag] || "secondary"}>
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </Badge>
          &nbsp;
        </Fragment>
      ))}
    </span>
  );
}
