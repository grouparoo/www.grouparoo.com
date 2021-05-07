import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import Link from "next/link";

export default function GetStarted({
  showLearnMore = true,
}: {
  showLearnMore?: boolean;
}) {
  return (
    <>
      <div id="stay-up-to-date" className="homePageSection text-center w-auto">
        <Container>
          <Row>
            <Col>
              <br />
              <br />
              <h2>Get Started with Grouparoo</h2>
              <p>
                Easily install the Grouparoo application, join the community, or
                schedule a demo to learn more.
              </p>
              <ButtonGroup>
                <Button
                  variant="primary"
                  href="/docs/getting-started"
                  className="ml-auto"
                >
                  Try it now
                </Button>
                <Button
                  variant="outline-primary"
                  href="/docs/community"
                  className="ml-auto"
                >
                  Join the Community
                </Button>
                <Button
                  variant="outline-primary"
                  href="/meet"
                  className="ml-auto"
                >
                  Get a Demo
                </Button>
              </ButtonGroup>

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
