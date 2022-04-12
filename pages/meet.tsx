import { Row, Col, Container, Alert } from "react-bootstrap";
import { AcquiredCard } from "../components/acquiredCard";
import SEO from "../components/SEO";

export default function TrialPage() {
  return (
    <>
      <SEO
        title="Meet Grouparoo"
        description="Sign up to meet with the Grouparoo team and see a demo of the Grouparoo product"
        path="/meet"
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
