import React from "react";
import { Container, Row, Col, Card, CardGroup, Button } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      <Head>
        <title>Grouparoo Pricing Options</title>
        <meta
          name="description"
          content="Grouparoo is open-source, so you can use our product for free today! Features and services available to fit your needs."
        />
        <link rel="canonical" href="http://www.grouparoo.com/pricing" />
      </Head>

      <div
        id="headline"
        className="pricingHeadline"
        style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>Grouparoo is open source and free.</h1>
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
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>Free</Card.Title>
                <Card.Text>
                  Grouparoo is open source and free to run in your own VPC.
                </Card.Text>
                <Button href="/docs">Try it Now</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Hosted</Card.Title>
                <Card.Text>
                  Grouparoo is open source and free to run in your own VPC.
                </Card.Text>
                <Button href="/docs">Try it Now</Button>
              </Card.Body>
            </Card>
            <Card>Services</Card>
            <Card>Features</Card>
          </CardGroup>
        </Container>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
