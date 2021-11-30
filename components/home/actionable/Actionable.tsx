import { Col, Container, Row, Button } from "react-bootstrap";
import { ActionableTargets } from "./ActionableTargets";
import { RecordDisplay } from "./RecordDisplay";

export const Actionable = () => {
  return (
    <Container
      fluid
      className="weave"
      style={{ paddingBottom: "30px", paddingTop: "30px" }}
    >
      <Row>
        <Col>
          <RecordDisplay />
        </Col>
        <Col>
          <section>
            <h3>Reverse ETL makes your data warehouse actionable</h3>
            <p>
              Grouparoo connects your customer data to all the places where it
              can make a difference. Use your data warehouse to power marketing
              campaigns, customer service, and everything else your business
              needs to succeed.
            </p>
            <Button>Learn More</Button>
          </section>
        </Col>
      </Row>
      <Row>
        <ActionableTargets />
      </Row>
    </Container>
  );
};
