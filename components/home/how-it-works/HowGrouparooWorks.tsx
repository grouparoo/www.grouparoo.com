import { Col, Container, Row } from "react-bootstrap";
import styles from "./HowGrouparooWorks.module.scss";

export const HowGrouparooWorks = () => {
  return (
    <Container className={`${styles.container} py-3`}>
      <Row>
        <Col>
          <section>
            <h3>How Grouparoo Works</h3>
            <p>
              We are at the next step in the data-driven evolution of how
              businesses scale. Over the last few years, teams have been
              investing by collecting key data and insights in their data
              warehouses to power BI and Data Science. The companies at the
              forefront of the Modern Data Stack movement are just starting to
              do Reverse ETL back to empower Marketing, Sales, and Support tools
              with this same data so they can make those teams more effective.
            </p>
            <p>
              Grouparoo helps these companies scale by making integrations easy.
              And Grouparoo is open source, so flexibility and privacy are at
              the heart of the solution. Grouparoo is powered by code. You can
              use Grouparoo just like the rest of your tech stack; you can
              develop locally, commit your changes, and deploy. Our web-based
              user interface makes it easy to generate configuration files for
              even the most complex schema.
            </p>
          </section>
        </Col>
        <Col>
          <section className="d-flex">
            <div
              className={`d-flex flex-column justify-content-end align-items-end`}
            >
              <img
                src="/images/home/how-it-works/left.jpg"
                className={styles.leftImage}
              />
              <img
                src="/images/home/how-it-works/bottom-left.jpg"
                className={styles.bottomLeftImage}
              />
            </div>
            <div className={`d-flex flex-column justify-content-start`}>
              <img
                src="/images/home/how-it-works/top.jpg"
                className={styles.topImage}
              />
              <img
                src="/images/home/how-it-works/bottom.png"
                className={styles.bottomImage}
              />
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};
