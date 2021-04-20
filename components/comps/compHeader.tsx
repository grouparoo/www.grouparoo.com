import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function CompHeader (props) {
    return (
      <>
        <div
            id="headline"
            className="homePageSection"
            style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
          >
            <Container>
              <Row>
                <Col>
                  <h1>Grouparoo vs. {props.competitor}</h1>
                  <p className="text-big-muted">
                    {props.competitor}’s {props.compPro1} and {props.compPro2} can be powerful,
                    <br />
                    but Grouparoo wins on {props.pro1}, {props.pro2}, {props.pro3}, and {props.pro4}.
                  </p>
                </Col>
              </Row>

              <br />

              <Row>
                <Col>
                  <Button variant="primary" href="/meet" className="ml-auto">
                    Get a Demo →
                  </Button>
                </Col>
              </Row>

              <br />

              <Row>
                <Col>
                  <p>
                    or try it free. We’re open source!&nbsp;&nbsp;&nbsp;
                    <Button
                      size="sm"
                      variant="outline-primary"
                      style={{ padding: ".5rem 1rem" }}
                      href="/docs/getting-started"
                    >
                      Install Now
                    </Button>
                  </p>
                </Col>
              </Row>
              <br />
            </Container>
        </div>
      </>
    )
}