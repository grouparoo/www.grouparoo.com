import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import hydrate from "next-mdx-remote/hydrate";
import {
  ReleaseNote,
  getReleaseNote,
  getReleasePaths,
} from "../../utils/releaseNotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { releaseBadges, releaseDate, components } from "./index";
import SEO from "../../components/SEO";

export default function ReleaseNotePage({ pageProps, ...props }) {
  const feature: ReleaseNote = pageProps.feature;
  const title = `Grouparoo: What's New - ${feature.title}`;
  const content = hydrate(feature.source, { components: components });

  return (
    <>
      <SEO
        canonical={true}
        path={`/whats-new/${feature.slug}`}
        title={title}
        description={feature.description}
        twitterCard={feature.twitterCard || "summary"}
        image={feature.image}
        noIndex={true}
      />

      <Container className="releasePage">
        <Row>
          <Col md={3} lg={2} className={"d-none"}>
            {releaseBadges(feature.tags)}

            <br />

            {releaseDate(feature.date)}
          </Col>
          <Col>
            <Row>
              <Col>
                <h1 style={{ paddingBottom: 0 }}>
                  {feature.title}
                  <a id={feature.slug} href={`#${feature.slug}`} />
                </h1>
              </Col>
              <Col style={{ textAlign: "right" }} xs={2}>
                {feature.github && (
                  <Link href={feature.github}>
                    <a
                      style={{ paddingLeft: 10 }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} size="xs" />
                    </a>
                  </Link>
                )}
              </Col>
            </Row>

            <div style={{ paddingBottom: 10 }} className={"d-xs-none"}>
              {releaseBadges(feature.tags)} {releaseDate(feature.date)}
            </div>

            <div>{content}</div>

            {feature.blog && (
              <Link href={`/blog/${feature.blog}`}>
                <a>See more</a>
              </Link>
            )}
            <div style={{ marginTop: 32, marginBottom: 32 }} />
          </Col>
        </Row>

        <hr />

        <Link href="/whats-new">
          <a>See all Updates</a>
        </Link>
      </Container>
    </>
  );
}

export async function getStaticProps(ctx) {
  const feature = await getReleaseNote(ctx.params.note);
  return { props: { feature } };
}

export async function getStaticPaths() {
  return getReleasePaths();
}
