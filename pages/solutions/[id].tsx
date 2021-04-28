import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import GetStarted from "../../components/home/getStarted";
import ComparisonTable from "../../components/comparisons/comparisonTable";
import FeatureBanner from "../../components/comparisons/featureBanner";
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

  let sampleFeatures = [
    {
      title: "🙃 ut labore et dolore magna aliqua.",
      text:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "💰 Duis aute irure dolor in reprehenderit",
      text:
        "in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
    },
    {
      title: "⏱ Dignissim diam quis enim lobortis scelerisque.",
      text:
        "Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis.",
    },
    {
      title: "✅ Ipsum dolor sit amet consectetur",
      text:
        "Mollis aliquam ut porttitor leo a diam sollicitudin tempor. At varius vel",
    },
  ];

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
          href={`https://www.grouparoo.com/solutions/${comp.competitor.toLowerCase()}-alternative`}
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
      <FeatureBanner features={sampleFeatures} />
      <div className="homePageSection">
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <div className="mdxContent justify-content-center comparisonContent">
              {content}
            </div>
          </Row>
        </Container>
      </div>
      <ComparisonTable comparisonData={comp.comparisonData} />
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
      { params: { id: "census-alternative" } },
      { params: { id: "segment-alternative" } },
      { params: { id: "hightouch-alternative" } },
    ],
    fallback: false,
  };
}
