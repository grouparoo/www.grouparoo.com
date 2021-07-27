import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import ComparisonTable from "./comparisonTable";
import FeatureBanner from "./featureBanner";
import hydrate from "next-mdx-remote/hydrate";
import { ComparisonInfo } from "../../utils/solutionsPages";
import { arrayToReadableList, possessiveNoun } from "../../utils/inflectors";
import * as components from ".";

export default function ComparisonPage(comp: ComparisonInfo) {
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
              <Button variant="primary" href="/get-started" className="ml-auto">
                Start Free Trial
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
      <FeatureBanner category="Reversel ETL Tool" features={comp.features} />
      <div className="homePageSection">
        <Container fluid className="p-0">
          <Row className="d-flex justify-content-center">
            <div className="mdxContent justify-content-center comparisonContent">
              {content}
            </div>
          </Row>
        </Container>
      </div>
      <ComparisonTable comparisonChartData={comp.comparisonChartData} />
    </>
  );
  return <>"abc"</>;
}
