import React from "react";
import { Container, Row, Col, Card, CardDeck, Button } from "react-bootstrap";
import Head from "next/head";
import IntegrationsSection from "../components/home/integrationsSection";
import GetStarted from "../components/home/getStarted";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Grouparoo Features</title>
        <meta
          name="description"
          content="Grouparoo is open-source, so you can use our product for free today. Grouparoo is built for growing tech companies and teams."
        />
        <link rel="canonical" href="https://www.grouparoo.com/features" />
      </Head>

      <div
        id="headline"
        className="featuresHeadline"
        style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>Data syncing made easy for developers</h1>
              <p className="text-big-muted">
                Grouparoo is an open source framework for connecting product
                data to all the tools in your growth and data stack. Declare in
                code what data gets sent where.
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Button
                size="lg"
                variant="primary"
                style={{ padding: ".5rem 1rem" }}
                href="docs/getting-started"
                className="ml-auto"
              >
                Get Started
              </Button>
              &nbsp; &nbsp; &nbsp;
              <Button
                size="lg"
                variant="outline-primary"
                style={{ padding: ".5rem 1rem" }}
                href="pricing"
                className="ml-auto"
              >
                See Pricing
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        id="productFeatures"
        className="bg-dark text-white homePageSection"
        style={{ textAlign: "left" }}
      >
        <Container>
          <Row>
            <Col>
              <div style={{ textAlign: "center" }}>
                <h3>Features that embed in your workflow</h3>
                <p>
                  Grouparoo makes it easy to follow developer best practices.
                </p>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <FontAwesomeIcon color="white" icon={"wrench"} size="1x" />
              <strong> Pre-built integrations</strong>
              <br />
              <p>
                All of the integration code is already written, so all of the
                nuances like rate limits, API requirements, and others are
                covered.
              </p>
            </Col>
            <Col>
              <FontAwesomeIcon color="white" icon={"chart-line"} size="1x" />
              <strong> Observability</strong>
              <br />
              Charts, tools, and data to help you monitor your Grouparoo
              instance.
            </Col>
            <Col>
              <FontAwesomeIcon color="white" icon={"vial"} size="1x" />
              <strong> Testable</strong>
              <br />
              Write automated tests, so you can verify that the data is being
              imported and exported as you'd expect.
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col>
              <FontAwesomeIcon color="white" icon={"tasks"} size="1x" />
              <strong> Many deploy options</strong>
              <br />
              Deploy easily using Heroku, Kubernetes, or Docker, or through your
              own deploy process.
            </Col>
            <Col>
              <FontAwesomeIcon color="white" icon={"shoe-prints"} size="1x" />
              <strong> Conventions</strong>
              <br />
              Maintainable conventions so everyone on the team can easily
              understand and modify Grouparoo.
            </Col>
            <Col>
              <FontAwesomeIcon color="white" icon={"layer-group"} size="1x" />
              <strong> Open Source and Extensible</strong>
              <br />
              <p>
                Grouparoo is open source, so you can look under the hood to see
                how everything works and extend it to your needs.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Container>
          <Row>
            <Col>
              <h3>Built for developers at high-growth companies</h3>
              <p>
                Growth, marketing, and sales teams are focused on one thing--
                growing the business. In order to effectively do that, they need
                to test, iterate, and learn quickly across new channels and with
                new tools. Enable that growth by making their tools more
                powerful.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <div
        id="productOfferings"
        className="homePageSection bg-dark text-white"
        style={{ textAlign: "center" }}
      >
        <Container>
          <Row>
            <Col>
              <h3>Flexible options for different companies and teams</h3>
              <p>
                Grouparoo is open source, so you can test it locally to get
                started. We also provide a hosted offering.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                size="lg"
                variant="outline-primary"
                style={{ padding: ".5rem 1rem" }}
                href="docs/getting-started"
                className="ml-auto"
              >
                Try it locally
              </Button>
              &nbsp; &nbsp; &nbsp;
              <Button
                size="lg"
                variant="outline-primary"
                style={{ padding: ".5rem 1rem" }}
                href="pricing"
                className="ml-auto"
              >
                See Pricing
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <IntegrationsSection />
      <GetStarted />
    </>
  );
}
