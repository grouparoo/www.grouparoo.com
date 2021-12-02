import { Col, Container, Row, Button } from "react-bootstrap";
import { ActionableTargets } from "./ActionableTargets";
import { RecordDisplay } from "./RecordDisplay";
import Link from "next/link";
import styles from "./Actionable.module.scss";

export const Actionable = () => {
  return (
    <Container fluid className={`weave ${styles.container}`}>
      <Row>
        <Col>
          <RecordDisplay className={styles.recordDisplay} />
        </Col>
        <Col>
          <section>
            <h2>Reverse ETL makes your data warehouse actionable</h2>
            <p>
              Grouparoo connects your customer data to all the places where it
              can make a difference. Use your data warehouse to power marketing
              campaigns, customer service, and everything else your business
              needs to succeed.
            </p>
            <Link href="/solutions/reverse-etl">
              <Button type="button" variant="primary" className="rounded-pill">
                Learn More
              </Button>
            </Link>
          </section>
        </Col>
      </Row>
      <Row className={styles.bottomRow}>
        <ActionableTargets />
      </Row>
    </Container>
  );
};
