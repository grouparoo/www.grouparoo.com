import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import GetStarted from "../../components/home/getStarted";
import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";
import { ComparisonInfo, getComparison } from "../../utils/comparisonPages";
import { arrayToReadableList, possessiveNoun } from "../../utils/inflectors";
import * as components from "../../components/comparisons";
// import { TableOfContents } from "../../components/docs/tableOfContents";


export default function Comparison({ pageProps }) {
  const router = useRouter();
  const comp: ComparisonInfo = pageProps.comparison;
  const content = hydrate(comp.source, { components });

  return (
    <>
      <Head>
        <title>Grouparoo: {comp.competitor} Alternative</title>
        <meta
          name="description"
          content={`Grouparoo is comparable to ${
            comp.competitor
          } but wins on ${arrayToReadableList(comp.pros)}.`}
        />
        <link
          rel="canonical"
          href={`https://www.grouparoo.com/solutions/${comp.competitor.toLowerCase()}`}
        />
      </Head>

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>Grouparoo vs. {comp.competitor}</h1>
              <p className="text-big-muted">
                {possessiveNoun(comp.competitor)}{" "}
                {arrayToReadableList(comp.competitorPros)} can be powerful,
                <br />
                but Grouparoo wins on {arrayToReadableList(comp.pros)}.
              </p>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <Button variant="primary" href="/meet" className="ml-auto">
                Get a Demo →
              </Button>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <p>
                or try it free. We’re open source!&nbsp;&nbsp;&nbsp;
                <Button
                  size="sm"
                  variant="outline-primary"
                  style={{ padding: ".5rem 1rem" }}
                  href="/docs/getting-started"
                >
                  Install Now
                </Button>
              </p>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
      <div id="value-prop" className="bg-dark text-white homePageSection">
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col md={12}>
              <h2>
                Grouparoo is the customer data platform that meets you where you
                are at.
              </h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={6}>
              <h3>🖥 Use your normal workflow</h3>
              <p>
                Build your data infrastructure the way you do with other apps.
                Grouparoo’s git-based workflow makes it easy.
              </p>
              <br />
            </Col>
            <Col md={6}>
              <h3>📈 Query the source of truth</h3>
              <p>
                Don’t rely on events to understand your customers. Use the data
                from your product database or data warehouse.
              </p>
              <br />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h3>🔒 Keep private data in house</h3>
              <p>
                Increase privacy by limiting the data that leaves your
                infrastructure without sacrificing your customer experience.
              </p>
              <br />
            </Col>
            <Col>
              <h3>💰 Save bags of money</h3>
              <p>
                Grouparoo is open source and free to run. Stop being charged by
                event volume and focus on what you want to build.
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="homePageSection">
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <div className="mdxContent justify-content-center comparisonContent">
              {content}
            </div>
          </Row>
        </Container>
      </div>

      <GetStarted />
    </>
  );
}

// get initial props for react
export async function getStaticProps({ params }) {
  const comparison = await getComparison(params.id, components);
  return { props: { comparison } };
}

// What URLs should I work for?
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "census" } },
      { params: { id: "segment" } },
      { params: { id: "hightouch" } },
    ],
    fallback: false,
  };
}
