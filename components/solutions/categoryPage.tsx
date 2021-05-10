import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import GetStarted from "../home/getStarted";
import hydrate from "next-mdx-remote/hydrate";
import { CategoryInfo } from "../../utils/solutionsPages";
import { arrayToReadableList, urlize } from "../../utils/inflectors";
import FeatureBanner from "./featureBanner";
import * as components from ".";

export default function CategoryPage(category: CategoryInfo) {
  const content = hydrate(category.source, { components });

  return (
    <>
      <Head>
        <title>Grouparoo: A {category.category}</title>
        <meta
          name="description"
          content={`Grouparoo is a ${
            category.category
          } tool, featuring ${arrayToReadableList(category.pros)}.`}
        />
        <link
          rel="canonical"
          href={`https://www.grouparoo.com/solutions/${urlize(
            category.category
          )}`}
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
              <h1>{category.category}</h1>
              <p className="text-big-muted">
                {category.category}s {arrayToReadableList(category.pros)}.
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
      <FeatureBanner
        category={`${category.category} tool`}
        features={category.features}
      />

      <Container fluid className="p-0">
        <Row className="d-flex justify-content-center">
          <div className="mdxContent justify-content-center comparisonContent">
            {content}
          </div>
        </Row>
      </Container>
      <GetStarted />
    </>
  );
}
