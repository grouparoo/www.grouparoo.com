import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";

export default function GetStarted({ props }) {
  const title = "Grouparoo: Get started";

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href="https://www.grouparoo.com/get-started" />
      </Head>

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingTop: 0, paddingBottom: 20 }}
      >
        <Container>
          <Row className="pt-5 pb-3">
            <Col>
              <h1 className="pt-1 pb-3">Sync data how you want</h1>
              <h2 className="pb-3 pb-xl-5">
                Use Grouparoo to power your Reverse ETL pipelines and workflows
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="mb-4 col-12 col-xl-5 col-md-7">
              <Card
                className="pricingCard mx-3 pt-3 pb-5 shadow-lg h-100 mb-4"
                bg="white"
              >
                <Card.Header className="bg-white border-0">
                  <Card.Title>
                    <div className="h3 pt-2 mb-2">Self-Hosted</div>
                    <hr className="col-9 mx-auto" />
                  </Card.Title>
                </Card.Header>
                <Card.Body className="lead align-middle">
                  Grouparoo is open source and free to run in your own cloud
                </Card.Body>
                <Card.Footer className="border-0 bg-white">
                  <Button
                    variant="outline-primary"
                    href="/docs/getting-started"
                    className="col-4"
                  >
                    Learn more
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-4 col-12 col-xl-5 col-md-7">
              <Card
                className="pricingCard mx-3 pt-3 pb-4 shadow-lg h-100 mb-4"
                bg="white"
              >
                <Card.Header className="bg-white border-0">
                  <Card.Title>
                    <div className="h3 pt-2  mb-2">Cloud</div>
                    <hr className="col-9 mx-auto" />
                  </Card.Title>
                </Card.Header>
                <Card.Body className="lead">
                  Get syncing from databases to SaaS tools right away.
                </Card.Body>
                <Card.Footer className="border-0 bg-white">
                  <Button variant="primary" href="/trial" className="col-4">
                    Start free trial
                  </Button>
                </Card.Footer>
                <small>No credit card required</small>
              </Card>
              <Link href="/pricing">View pricing plans</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
