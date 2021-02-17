import React from "react";
import { Container, Row, Col, Card, CardDeck, Button } from "react-bootstrap";
import Head from "next/head";
import IntegrationsSection from "../components/home/integrationsSection";
import GetStarted from "../components/home/getStarted";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Grouparoo Pricing Options</title>
        <meta
          name="description"
          content="Grouparoo is open-source, so you can use our product for free today! Features and services available to fit your needs."
        />
        <link rel="canonical" href="https://www.grouparoo.com/pricing" />
      </Head>

      <div
        id="headline"
        className="pricingHeadline"
        style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>Grouparoo is open source and our core product is free.</h1>
              <p className="text-big-muted">
                Host and run Grouparoo on your own infrastructure for free.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        id="pricingPlans"
        className="pricingPlansSection"
        style={{ textAlign: "center" }}
      >
        <Container>
          <CardDeck>
            <Card
              className="pricingCard"
              border="primary"
              bg="secondary"
              text="white"
              style={{ paddingTop: 50, paddingBottom: 50 }}
            >
              <Card.Body>
                <Card.Title>Community Edition</Card.Title>
                <Card.Text>
                  Grouparoo is open source and free to run in on your own cloud.
                  <br />
                  <br />
                  <div style={{ fontSize: "14px" }}>
                    <b>Features include:</b>
                    <li>Realtime syncing infrastructure</li>
                    <li>Access to all Sources and Destinations </li>
                    <li>Configurable with code and our CLI</li>
                    <li>Dynamic Group definition</li>
                    <li>Ticket-based support</li>
                  </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ borderTop: "none" }}>
                <Button variant="primary" href="/docs/getting-started">
                  Get started
                </Button>
              </Card.Footer>
            </Card>
            <Card
              style={{ paddingTop: 50, paddingBottom: 50 }}
              className="pricingCard"
            >
              <Card.Body>
                <Card.Title>Self-Managed Enterprise Edition</Card.Title>
                <Card.Text>
                  Empowers non-technical users and teams to configure and use
                  Grouparoo.
                  <br />
                  <br />
                  <div style={{ fontSize: "14px" }}>
                    <b>Everything in Community, plus:</b>
                    <li>
                      A low-code web UI allowing team members to configure
                      Grouparoo
                    </li>
                    <li>Data governance (coming soon)</li>
                    <li>Insights and analytics (coming soon)</li>
                    <li>Business hours support</li>
                  </div>
                </Card.Text>
              </Card.Body>
              <Card.Footer style={{ background: "white", borderTop: "none" }}>
                <Button
                  variant="outline-primary"
                  href="/meet?ref=pricing-page&button=support"
                >
                  Get in touch
                </Button>
              </Card.Footer>
            </Card>
            <Card
              style={{ paddingTop: 50, paddingBottom: 50 }}
              className="pricingCard"
            >
              <Card.Body>
                <Card.Title>Hosted</Card.Title>
                <Card.Text>
                  Interested in trying Grouparoo but don't want to host it
                  yourself? Let's chat!
                  <br />
                  <br />
                  <div style={{ fontSize: "14px" }}>
                    <b>Everything in Enterprise Edition, plus:</b>
                    <li>Private single-tenant instance</li>
                    <li>OTHER IDEAS?</li>
                    <li>Business hours support</li>
                    <li>Enhanced support response time SLAs</li>
                  </div>
                </Card.Text>{" "}
              </Card.Body>
              <Card.Footer style={{ background: "white", borderTop: "none" }}>
                <Button
                  variant="outline-primary"
                  href="/meet?ref=pricing-page&button=hosted"
                >
                  Get in touch
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <IntegrationsSection />
      <GetStarted />
    </>
  );
}
