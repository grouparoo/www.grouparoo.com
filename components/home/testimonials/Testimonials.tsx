import { Col, Container, Row } from "react-bootstrap";
import styles from "./Testimonials.module.scss";

export const Testimonials = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <section>
            <img
              src="/images/home/customer-logos/chipax-logo@2x.png"
              className={`${styles.img} ${styles.chipax}`}
            />
            <p className={`${styles.quote} ps-2`}>
              "I was able to set up a process that merges and maintains user
              profiles with data from multiple sources in just a few minutes and
              I wish we had it years ago.""
            </p>
            <p>— Joaquín Brenner, Co-founder and COO @ Chipax</p>
          </section>
        </Col>
        <Col>
          <section>
            <img
              src="/images/home/customer-logos/Sendoso-Logo-1.svg"
              className={`${styles.img} ${styles.sendoso}`}
            />
            <p className={`${styles.quote} ps-2`}>
              "Grouparoo has definitely helped us level up our customer data
              infrastructure. They've created an all-in-one platform that gets
              our data to the platforms that need it the most."
            </p>
            <p>— Francis Yango, Product @ Sendoso</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
