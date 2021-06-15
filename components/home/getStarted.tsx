import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import Link from "next/link";

export default function GetStarted({
  showLearnMore = true,
}: {
  showLearnMore?: boolean;
}) {
  return (
    <>
      <div id="getStartedContainer" className="text-center w-full pb-5">
        <Container>
          <Row>
            <Col>
              <br />
              <br />
              <h2>Get Started with Grouparoo</h2>
              <p>Start syncing your data with Grouparoo Cloud</p>

              <Button variant="primary" href="/trial" className="ml-auto">
                Start Free Trial
              </Button>

              {showLearnMore ? (
                <>
                  <br />
                  <br />
                  <br />
                  <p>
                    Or download and try our open source{" "}
                    <Link href="/docs/getting-started">
                      <a> Community edition</a>
                    </Link>{" "}
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
