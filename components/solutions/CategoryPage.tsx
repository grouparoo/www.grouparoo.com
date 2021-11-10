import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import hydrate from "next-mdx-remote/hydrate";
import { CategoryInfo } from "../../utils/solutionsPages";
import { arrayToReadableList, urlize } from "../../utils/inflectors";
import FeatureBanner from "./FeatureBanner";
import * as components from "./Index";

export default function CategoryPage(category: CategoryInfo) {
  const content = hydrate(category.source, { components });

  return (
    <>
      <Head>
        <title>{category.title}</title>
        <meta name="description" content={category.description} />
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
              <p className="text-big-muted">{category.header}.</p>
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
    </>
  );
}
