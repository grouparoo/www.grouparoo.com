import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Link from "next/link";

export default function GetStarted({
  showLearnMore = true,
}: {
  showLearnMore?: boolean;
}) {
  return (
    <>
      <div
        id="getStartedContainer"
        className="text-center w-full pb-5"
        style={{
          background:
            "linear-gradient(0deg, rgba(179,232,255,0.5) 0%, rgba(41,171,226,0.4) 40%, rgba(41,171,226,0.4) 60%, rgba(179,232,255,0.5) 100%)",
        }}
      >
        <Container>
          <Row>
            <Col md={3} />
            <Col>
              <br />
              <br />
              <Card>
                <Card.Body>
                  <h2>Get Started with Grouparoo</h2>
                  <p>Start syncing your data with Grouparoo Cloud</p>
                  <Button
                    variant="primary"
                    href="/trial"
                    className="ml-auto mt-1 mb-4"
                  >
                    Start Free Trial
                  </Button>
                  {showLearnMore ? (
                    <>
                      <p>
                        <small>
                          Or download and try our open source{" "}
                          <Link href="/docs/getting-started">
                            <a> Community edition</a>
                          </Link>
                          .
                        </small>
                      </p>
                    </>
                  ) : null}
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} />
          </Row>
        </Container>
      </div>
    </>
  );
}
