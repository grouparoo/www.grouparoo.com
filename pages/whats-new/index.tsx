import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { Container, Badge, Row, Col } from "react-bootstrap";
import hydrate from "next-mdx-remote/hydrate";
import { ReleaseNote, getReleaseNotes } from "../../utils/releaseNotes";

import Moment from "react-moment";
import BlogImage from "../../components/blog/image";

const components = { Image: BlogImage };

function releaseNote(note: ReleaseNote, idx: number) {
  const { source, tags, date, title, blog, slug } = note;
  const content = hydrate(source, { components: components });
  const ago = releaseDate(date);
  const badges = releaseBadges(tags);
  return (
    <Row key={`releaseNote-${idx}`}>
      <Col md={3} lg={2} className="d-none d-md-block">
        {badges}
        <br />
        {ago}
      </Col>
      <Col>
        <h4 style={{ paddingBottom: 0 }}>
          {title}
          <a id={slug} />
        </h4>
        <div style={{ paddingBottom: 10 }} className="d-md-none">
          {badges} {ago}
        </div>
        <div>{content}</div>
        {blog ? (
          <Link href={`/blog/${blog}`}>
            <a>See more</a>
          </Link>
        ) : null}
        <hr style={{ marginTop: 32, marginBottom: 32 }} />
      </Col>
    </Row>
  );
}

export default function ReleaseIndex({ pageProps }) {
  let notes: ReleaseNote[] = pageProps.notes;

  return (
    <>
      <Head>
        <title>Grouparoo: What's New</title>
        <link
          rel="alternate"
          title="JSON Feed: Grouparoo What's New"
          type="application/feed+json"
          href="https://www.grouparoo.com/api/feeds/whatsnew.json"
        />
        <link
          rel="alternate"
          title="RSS Feed: Grouparoo What's New"
          type="application/rss+xml"
          href="https://www.grouparoo.com/api/feeds/whatsnew.xml"
        />
      </Head>

      <Container className="releasePage">
        <h1 style={{ paddingBottom: 30 }}>What's New</h1>
        {notes.length > 0 ? (
          notes.map((note, idx) => releaseNote(note, idx))
        ) : (
          <p>No notes found</p>
        )}
      </Container>
      <br />
    </>
  );
}

export async function getStaticProps() {
  const notes = await getReleaseNotes();
  return { props: { notes } };
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
