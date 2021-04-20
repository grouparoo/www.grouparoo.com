import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import GetStarted from "../../components/home/getStarted";
import hydrate from "next-mdx-remote/hydrate";
import { loadMdxFile } from "../../utils/mdxUtils";

const components = {};

export default function VsCensus({ pageProps }) {
  const mdxContent = hydrate(pageProps.source, { components });

  return (
    <>
      <Head>
        <title>Grouparoo: Census Alternative</title>
        <meta
          name="description"
          content="Grouparoo is comparable to Census but wins on flexibility, data approach, Events support, and cost."
        />
        <link
          rel="canonical"
          href="https://www.grouparoo.com/solutions/census-alternative"
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
              <h1>Grouparoo vs. Census</h1>
              <p className="text-big-muted">
                Census' analytics and customer data platform can be powerful,
                <br />
                but Grouparoo wins on flexibility, data approach, Event support,
                and cost.
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
        <Container>
          <Row>
            <Col>
              <div className="mdxContent">{mdxContent}</div>
            </Col>
          </Row>
        </Container>
      </div>

      <GetStarted />
    </>
  );
}

export async function getStaticProps() {
  const { source } = await loadMdxFile(
    ["components", "documents", "vs-census.mdx"],
    components
  );

  return { props: { source } };
}
