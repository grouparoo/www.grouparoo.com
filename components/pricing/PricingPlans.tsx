import { Card, Row, Col } from "react-bootstrap";
import Link from "next/link";
import styles from "./PricingPlan.module.scss";

export default function PricingPlans() {
  return (
    <Card className="col-11 m-5 mx-auto text-center shadow-lg">
      <Card.Body>
        <div className="h3">Pricing Plans</div>
        <Row className="my-3">
          <Col className="col-12 col-md-4 pb-3">
            <Row>
              <strong>Community</strong>
            </Row>
            <Row className="h-100 d-flex align-items-center">
              <div>
                <p>Free!</p>
                <p>Enterprise UI: $100/mo</p>
              </div>
            </Row>
          </Col>
          <hr className="d-md-none col-9 mx-auto" />
          <Col className={`${styles.responsiveBorders} col-12 col-md-4 pb-3`}>
            <Row>
              <strong>Standard Cloud</strong>
            </Row>
            <Row className="h-100 pt-3 d-flex align-items-center">
              <div>
                <p>100K Unique Records Synced: $150/mo</p>
                <p>300K Unique Records Synced: $300/mo</p>
                <p>1,000,000 Synced Records: $600/mo</p>
              </div>
            </Row>
          </Col>
          <hr className="d-md-none col-9 mx-auto" />
          <Col className="col-12 col-md-4">
            <Row>
              <strong>Enterprise Cloud</strong>
            </Row>
            <Row className="h-100 pt-3 d-flex align-items-center">
              <div>
                <p>&gt; 1,000,000 Synced Records</p>
                <p>
                  <Link href="/meet">Contact sales</Link>
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
