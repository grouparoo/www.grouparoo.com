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
              <h2>Get Started with Grouparoo</h2>
              <p>
                Easily install the Grouparoo application, join the Community, or
                schedule a demo to learn more.
              </p>
              <Button
                variant="primary"
                href="/docs/getting-started"
                className="ml-auto"
              >
                Try it now
              </Button>
              &nbsp; &nbsp; &nbsp;
              <Button
                variant="outline-primary"
                href="/docs/community"
                className="ml-auto"
              >
                Join the Community
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
                  <p>
                    Or learn more about the{" "}
                    <Link href="/about">
                      <a>company</a>
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
