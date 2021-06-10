import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";

export default function GetStarted({ props }) {
  const title = "Grouparoo: Start Trial";
  const description =
    "Start your trial with Grouparoo, the open source framework that helps you move data between your database and all of your cloud-based tools.";

  const boxTextStyle = {
    fontSize: "14px",
    textAlign: "left" as "left",
    paddingLeft: "1.4em",
    textIndent: "-1.4em",
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@grouparoo" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Image */}

        <meta
          property="og:image"
          content="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        />
        <meta
          name="twitter:image"
          content="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        />
        <meta name="twitter:image:alt" content={title} />

        {/* Description */}

        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="og:description" content={description} />

        <link rel="canonical" href="https://www.grouparoo.com/" />
      </Head>

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingTop: 0, paddingBottom: 20 }}
      >
        <Container>
          <Row className="pt-5 pb-3">
            <Col>
              <h1>Sync data how you want.</h1>
              <h2>Lorem ipsum</h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="mb-4 col-5">
              <Card
                className="pricingCard mx-3 py-5 shadow-lg h-100 mb-4"
                bg="white"
              >
                <Card.Body>
                  <Card.Title className="pb-3">Grouparoo Cloud</Card.Title>
                  Get syncing from databases to SaaS tools right away.
                </Card.Body>
                <Card.Footer
                  style={{ backgroundColor: "white", borderTop: "none" }}
                >
                  <Button variant="primary" className="my-4" href="/trial">
                    Start Free Trial
                  </Button>
                  <p className="mb-0">No credit card required</p>
                </Card.Footer>
              </Card>
              <Link href="/pricing">View pricing plans</Link>
            </Col>
            <Col className="mb-4 col-5">
              <Card
                className="pricingCard py-5 mx-3 shadow-lg h-100"
                bg="white"
              >
                <Card.Body>
                  <Card.Title className="pb-3">Grouparoo Hosted</Card.Title>
                  Grouparoo is open source and free to run in your own cloud
                </Card.Body>
                <Card.Footer
                  style={{ backgroundColor: "white", borderTop: "none" }}
                >
                  <Button
                    variant="outline-primary"
                    className="my-4"
                    href="/docs/getting-started"
                  >
                    Try it Now
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
