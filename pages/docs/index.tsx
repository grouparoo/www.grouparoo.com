import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Alert,
} from "react-bootstrap";
import { TableOfContents } from "../../components/docs/TableOfContents";
import SEO from "../../components/SEO";

export default function DocsIndex() {
  return (
    <>
      <SEO
        title="Grouparoo Docs"
        path="/docs"
        canonical={true}
        description="Here are docs to help you learn how to configure Grouparoo to power your Reverse ETL pipelines."
      />

      <Container>
        <Row>
          <Col className="d-none d-md-block">
            <TableOfContents />
          </Col>
          <Col xl={9} lg={9} md={8} sm={12} xs={12}>
            <h1>Grouparoo Documentation</h1>

            <Alert variant="primary">
              <Row className="align-items-center">
                <Col md={6}>
                  <h2>Ready to Try Grouparoo?</h2>
                  <p>
                    Grouparoo is Open Source, and easy to run on your laptop or
                    in the cloud.
                  </p>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Button
                    variant="primary"
                    href="/docs/getting-started"
                    size="lg"
                  >
                    Get Started
                  </Button>
                  <br />
                  <br />
                  <ButtonGroup>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      href="/docs/installation/node"
                    >
                      Node.js
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-primary"
                      href="/docs/installation/docker"
                    >
                      Docker
                    </Button>
                  </ButtonGroup>
                </Col>
              </Row>
            </Alert>

            <Alert variant="light">
              <Row className="align-items-center">
                <Col md={6}>
                  <h2>
                    Want to learn more about how to configure and use Grouparoo?
                  </h2>
                  <p>
                    Grouparoo can be configured either with code or in the UI.
                    Learn how to connect to your Sources and Destinations to
                    begin syncing your data.
                  </p>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Button variant="light" size="lg" href="/docs/config">
                    Config Guides
                  </Button>
                  <br />
                  <br />
                  <Button
                    variant="light"
                    size="lg"
                    href="/docs/getting-started/product-concepts"
                  >
                    Product Concepts
                  </Button>
                </Col>
              </Row>
            </Alert>

            <Alert variant="light">
              <Row className="align-items-center">
                <Col md={6}>
                  <h2>Want to learn more about how Grouparoo works?</h2>
                  <p>
                    Grouparoo is Open Source, and we welcome community
                    contributions. You can add your own plugins to connect to
                    new Sources and Destinations.
                  </p>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Button variant="light" size="lg" href="/docs/development">
                    Development Guide
                  </Button>
                </Col>
              </Row>
            </Alert>

            <Alert variant="light">
              <Row className="align-items-center">
                <Col md={6}>
                  <h2>Need help integrating with Grouparoo Cloud?</h2>
                  <p>
                    Grouparoo Cloud is our SaaS Cloud-hosted option. We make it
                    easy to use your Code Config repository on our hosted
                    system, giving you security and peace-of-mind for all your
                    reverse ETL needs!
                  </p>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Button variant="light" size="lg" href="/docs/cloud">
                    Cloud Integration Guide
                  </Button>
                </Col>
              </Row>
            </Alert>

            <Alert variant="light">
              <Row className="align-items-center">
                <Col md={6}>
                  <h2>
                    Want to collaborate with the Community to enhance Grouparoo?
                  </h2>
                  <p>
                    Join other Grouparoo Community members to share best
                    practices and tackle problems.
                  </p>
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Button variant="light" size="lg" href="/docs/community">
                    Community
                  </Button>
                </Col>
              </Row>
            </Alert>
          </Col>
          <Col className="d-md-none">
            <TableOfContents />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return { props: {} };
}
