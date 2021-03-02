import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import { Container, Badge, Row, Col } from "react-bootstrap";
import hydrate from "next-mdx-remote/hydrate";
import { ReleaseNote, getReleaseNotes } from "../../utils/releaseNotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Moment from "react-moment";
import BlogImage from "../../components/blog/image";
import { PaginationHelper } from "../../components/paginationHelper";

export const components = { Image: BlogImage };

export default function ReleaseIndex({ pageProps }) {
  let notes: ReleaseNote[] = pageProps.notes;
  const { limit, offset, total } = pageProps;

  const contents = notes.map((note) =>
    hydrate(note.source, { components: components })
  );

  return (
    <>
      <Head>
        <title>Grouparoo: What's New</title>
        <link rel="canonical" href={`https://www.grouparoo.com/whats-new`} />
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
      </Head>

      <Container className="releasePage">
        <h1 style={{ paddingBottom: 30 }}>What's New</h1>

        {!notes || notes.length === 0 ? <p>No notes found</p> : null}

        {notes
          ? notes.map((note, idx) => {
              const { tags, date, title, blog, slug, github } = note;
              const ago = releaseDate(date);
              const badges = releaseBadges(tags);

              if (!title) return null;

              return (
                <Row key={`note-${idx}`}>
                  <Col md={3} lg={2} className={"d-none d-md-block"}>
                    {badges}
                    <br />
                    {ago}
                  </Col>
                  <Col>
                    <Row>
                      <Col>
                        <h4 style={{ paddingBottom: 0 }}>
                          {title}
                          <a id={slug} />
                        </h4>
                      </Col>
                      <Col style={{ textAlign: "right" }} xs={2}>
                        {github && (
                          <Link href={github}>
                            <a
                              style={{ paddingLeft: 10 }}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FontAwesomeIcon
                                icon={["fab", "github"]}
                                size="xs"
                              />
                            </a>
                          </Link>
                        )}
                        <Link href={`/whats-new/${slug}`}>
                          <a style={{ paddingLeft: 10 }}>
                            <FontAwesomeIcon icon={["fas", "link"]} size="xs" />
                          </a>
                        </Link>
                      </Col>
                    </Row>

                    <div style={{ paddingBottom: 10 }} className={"d-md-none"}>
                      {badges} {ago}
                    </div>
                    <div>{contents[idx]}</div>
                    {blog && (
                      <Link href={`/blog/${blog}`}>
                        <a>See more</a>
                      </Link>
                    )}
                    <hr style={{ marginTop: 32, marginBottom: 32 }} />
                  </Col>
                </Row>
              );
            })
          : null}

        <Row>
          <Col md={3} lg={2} />
          <Col>
            <PaginationHelper
              baseUrl={`/whats-new/page`}
              total={total}
              limit={limit}
              offset={offset}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps(ctx) {
  const pageNumber = parseInt(ctx.params?.pageNumber || "1");
  const { notes, limit, offset, total } = await getReleaseNotes(pageNumber);
  return { props: { notes, limit, offset, total } };
}

export const badgeTypes = {
  new: "primary",
  improvement: "success",
  fix: "warning",
};

export function releaseBadges(tags: string[]) {
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

export function releaseDate(date: string) {
  return (
    <span className="metadata">
      <Moment fromNow>{date}</Moment>
    </span>
  );
}
