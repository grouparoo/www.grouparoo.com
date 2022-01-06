import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ComparisonTable from "./ComparisonTable";
import SEO from "../SEO";
import FeatureBanner from "./FeatureBanner";
import { TrialForm } from "../TrialForm";
import hydrate from "next-mdx-remote/hydrate";
import { ComparisonInfo } from "../../utils/solutionsPages";
import { arrayToReadableList, possessiveNoun } from "../../utils/inflectors";
import * as components from "./Index";

export default function ComparisonPage(comp: ComparisonInfo) {
  const content = hydrate(comp.source, { components });

  return (
    <>
      <SEO
        title={`Grouparoo: ${comp.competitor} Alternative`}
        description={`Grouparoo is comparable to ${
          comp.competitor
        } but wins on ${arrayToReadableList(comp.pros)}.`}
        canonical={true}
        path={`/solutions/${comp.competitor.toLowerCase()}-alternative`}
      />

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingBottom: 0 }}
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

          <Row style={{ textAlign: "center" }} className="mt-5">
            <Col md={12}>
              <h2>
                Grouparoo is the Reverse ETL tool that meets you where you are.
              </h2>
            </Col>
          </Row>

          <br />
          <br />

          <Row>
            <Col lg={7}>
              <ComparisonTable comparisonChartData={comp.comparisonChartData} />
            </Col>
            <Col>
              <TrialForm />
            </Col>
          </Row>
        </Container>
      </div>
      <FeatureBanner showHeader={false} features={comp.features} />

      <Container fluid className="homePageSection p-0 justify-content-center">
        <div className="mdxContent justify-content-center comparisonContent">
          {content}
        </div>
      </Container>
    </>
  );
}
