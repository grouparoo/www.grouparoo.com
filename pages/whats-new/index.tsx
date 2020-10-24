import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { Container, Badge, Row, Col } from "react-bootstrap";
import { loadEntries, loadMdxFilePath } from "../../utils/mdxUtils";
import hydrate from "next-mdx-remote/hydrate";
import Moment from "react-moment";
import BlogImage from "../../components/blog/image";

const components = { Image: BlogImage };

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
  const ago = releaseDate(date);
  const badges = releaseBadges(tags);
  return (
    <Row key={`releaseEntry-${idx}`}>
      <Col md={3} lg={2} className="d-none d-md-block">
        {badges}
        <br />
        {ago}
      </Col>
      <Col>
        <h4 style={{ paddingBottom: 0 }}>{title}</h4>
        <div style={{ paddingBottom: 10 }} className="d-md-none">
          {badges} {ago}
        </div>
        <div>{content}</div>
        {blog ? (
          <Link href={`/blog/${blog}`}>
            <a>See more</a>
          </Link>
        ) : null}
        <hr />
      </Col>
    </Row>
  );
}

export default function ReleaseIndex({ pageProps }) {
  let posts: ReleasePost[] = pageProps.posts;

  return (
    <>
      <Head>
        <title>Grouparoo: What's New</title>
      </Head>

      <Container className="releasePage">
        <h1 style={{ paddingBottom: 30 }}>What's New</h1>
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
  return (
    <span className="metadata">
      <Moment fromNow>{date}</Moment>
    </span>
  );
}

const badgeTypes = {
  new: "primary",
  improvement: "success",
  fix: "warning",
};

function releaseBadges(tags: string[]) {
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
