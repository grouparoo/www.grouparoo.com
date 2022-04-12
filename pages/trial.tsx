import { Row, Col, Container, Alert } from "react-bootstrap";
import { AcquiredCard } from "../components/acquiredCard";
import SEO from "../components/SEO";

export default function TrialPage() {
  return (
    <>
      <SEO
        title="Try Grouparoo"
        description="Try Grouparoo Today!"
        path="/trial"
        canonical={true}
      />

      <Container>
        <Row>
          <Col>
            <AcquiredCard />
            <br />
            <Alert variant="info">
              We are longer offering Grouparoo Cloud.
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  );
}
