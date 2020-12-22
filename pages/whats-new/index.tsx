import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { Container, Badge, Row, Col } from "react-bootstrap";
import hydrate from "next-mdx-remote/hydrate";
import { ReleaseNote, getReleaseNotes } from "../../utils/releaseNotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import BlogImage from "../../components/blog/image";

const components = { Image: BlogImage };

function releaseNote(note: ReleaseNote, idx: number) {
  const isFeature = idx < 0;

  const { source, tags, date, title, blog, slug } = note;
  const content = hydrate(source, { components: components });
  const ago = releaseDate(date);
  const badges = releaseBadges(tags);
  const header = releaseHeader(note, isFeature);

  const leftClassName = isFeature ? "d-none" : "d-none d-md-block";
  const rightClassName = isFeature ? "d-xs-none" : "d-md-none";
  const Separator = isFeature ? "div" : "hr";

  return (
    <Row key={`releaseNote-${idx}`}>
      <Col md={3} lg={2} className={leftClassName}>
        {badges}
        <br />
        {ago}
      </Col>
      <Col>
        {header}
        <div style={{ paddingBottom: 10 }} className={rightClassName}>
          {badges} {ago}
        </div>
        <div>{content}</div>
        {blog && (
          <Link href={`/blog/${blog}`}>
            <a>See more</a>
          </Link>
        )}
        <Separator style={{ marginTop: 32, marginBottom: 32 }} />
      </Col>
    </Row>
  );
}

function featureNote(note: ReleaseNote) {
  return releaseNote(note, -1);
}

function releaseHeader(note: ReleaseNote, isFeature: boolean) {
  const Header = isFeature ? "h1" : "h4";
  const { github, slug, title } = note;
  return (
    <>
      <Row>
        <Col>
          <Header style={{ paddingBottom: 0 }}>
            {title}
            <a id={slug} />
          </Header>
        </Col>
        <Col style={{ textAlign: "right" }} xs={2}>
          {github && (
            <Link href={github}>
              <a style={{ paddingLeft: 10 }} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "github"]} size="xs" />
              </a>
            </Link>
          )}
          {!isFeature && (
            <Link href={`/whats-new/${slug}`}>
              <a style={{ paddingLeft: 10 }}>
                <FontAwesomeIcon icon={["fas", "link"]} size="xs" />
              </a>
            </Link>
          )}
        </Col>
      </Row>
    </>
  );
}

function getHeader(feature: ReleaseNote) {
  if (!feature) {
    return <h1 style={{ paddingBottom: 30 }}>What's New</h1>;
  }
  return (
    <>
      {featureNote(feature)}
      <h3 style={{ paddingBottom: 15, marginTop: 15 }}>Other updates</h3>
    </>
  );
}

function getSocial(feature: ReleaseNote) {
  if (!feature) {
    return null;
  }

  const url = `https://www.grouparoo.com/whats-new/${feature.slug}`;
  return (
    <>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@grouparoo" />
      <meta name="twitter:creator" content="@grouparoo" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={feature.title} />
      {feature.description ? (
        <meta property="og:description" content={feature.description} />
      ) : null}
      {feature.image ? (
        <meta property="og:image" content={feature.image} />
      ) : null}
    </>
  );
}

export default function ReleaseIndex({ pageProps }) {
  let notes: ReleaseNote[] = pageProps.notes;
  let feature: ReleaseNote = pageProps.feature;

  let headerComponent = getHeader(feature);
  let socialComponent = getSocial(feature);
  let title = "Grouparoo: What's New";
  if (feature) {
    title += ` - ${feature.title}`;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href="https://www.grouparoo.com/whats-new" />

        <link
          rel="alternate"
          title="JSON Feed: Grouparoo What's New"
          type="application/feed+json"
          href="https://www.grouparoo.com/feeds/whatsnew.json"
        />
        <link
          rel="alternate"
          title="RSS Feed: Grouparoo What's New"
          type="application/rss+xml"
          href="https://www.grouparoo.com/feeds/whatsnew.xml"
        />

        {socialComponent}
      </Head>

      <Container className="releasePage">
        {headerComponent}
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
      {(tags || []).map((tag, idx) => (
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
