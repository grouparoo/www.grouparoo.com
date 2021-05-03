import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import GetStarted from "../../components/home/getStarted";
import ComparisonTable from "../../components/comparisons/comparisonTable";
import FeatureBanner from "../../components/comparisons/featureBanner";
import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";
import { PageNavigation } from "../../components/pageNavigation";
import { ComparisonInfo, getComparison } from "../../utils/comparisonPages";
import { arrayToReadableList, possessiveNoun } from "../../utils/inflectors";
import * as components from "../../components/comparisons";

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
          href={`https://www.grouparoo.com/solutions/${comp.competitor.toLowerCase()}-alternative`}
        />
      </Head>

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingBottom: 100 }}
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
      <FeatureBanner features={comp.features} />
      <Container className="col-9 col-md-4">
        <PageNavigation />
      </Container>
      <div className="homePageSection">
        <Container fluid className="p-0">
          <div className="mdxContent justify-content-center comparisonContent">
            {content}
          </div>
        </Container>
      </div>
      <ComparisonTable comparisonData={comp.comparisonData} />
      <GetStarted />
    </>
  );
}

export async function getStaticProps({ params }) {
  const comparison = await getComparison(params.id, components);
  return { props: { comparison } };
}

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
