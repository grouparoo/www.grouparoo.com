import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";

export default function GetStarted({
  showLearnMore = true,
}: {
  showLearnMore?: boolean;
}) {
  return (
    <>
      <div
        id="stay-up-to-date"
        className="homePageSection"
        style={{ textAlign: "center" }}
      >
        <Container>
          <Row>
            <Col>
              <br />
              <br />
              <h2>Get Started</h2>
              <p>Easily install Grouparoo or schedule a demo</p>
              <Button variant="primary" href="/docs" className="ml-auto">
                Try it now
              </Button>
              &nbsp; &nbsp; &nbsp;
              <Button
                variant="outline-primary"
                href="/meet"
                className="ml-auto"
              >
                Get a Demo
              </Button>
              {showLearnMore ? (
                <>
                  <br />
                  <br />
                  <br />
                  <br />
                  <p>
                    Or learn about the{" "}
                    <Link href="/about">
                      <a>team</a>
                    </Link>
                    , the{" "}
                    <Link href="/docs/community">
                      <a>Grouparoo community</a>
                    </Link>{" "}
                    or how to get{" "}
                    <Link href="/docs/support">
                      <a>support</a>
                    </Link>
                    .
                  </p>
                </>
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
