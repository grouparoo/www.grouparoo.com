import { Col, Container, Row } from "react-bootstrap";
import { BriefcaseCheck } from "./icons/BriefcaseCheck";
import { Github } from "./icons/Github";
import { Mask } from "./icons/Mask";
import { MoneyBill } from "./icons/MoneyBill";
import styles from "./WhyGrouparoo.module.scss";

export const WhyGrouparoo = () => {
  return (
    <Container fluid className={`pipes ${styles.container}`}>
      <Container>
        <Row>
          <h2>Why Open Source?</h2>
          <p className={styles.subheading}>
            Keeping customer data secure is more important than ever
          </p>
        </Row>
        <Row>
          <Col>
            <Github className={styles.icon} />
            <h3>Control</h3>
            <p>
              Grouparoo runs in your environment so you always have access to
              all the code and the data. Use it however you want.
            </p>
          </Col>
          <Col>
            <BriefcaseCheck className={styles.icon} />
            <h3>Compliance</h3>
            <p>
              The control and privacy features make it easier for you to comply
              with GDPR, CCPA, and industry-specific standards.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Mask className={styles.icon} />
            <h3>Privacy</h3>
            <p>
              You get to choose exactly what data gets sent to each tool. And
              you give them less because it was only needed to make the groups.
            </p>
          </Col>
          <Col>
            <MoneyBill className={styles.icon} />
            <h3>Cost</h3>
            <p>
              Because Grouparoo is hosted in your private cloud, we’re
              significantly cheaper than SaaS alternatives that charge based on
              usage.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
