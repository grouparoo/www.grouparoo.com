import { Col, Container, Row } from "react-bootstrap";
import ImageInBrowserFrame from "../../ImageInBrowserFrame";
import styles from "./Steps.module.scss";

export const Steps = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col md={6} xs={12} className={styles.hasImage}>
          <ImageInBrowserFrame
            src="/images/home/how-it-works-1.png"
            alt="how it works"
            width={733}
            height={398}
          />
        </Col>
        <Col md={6} xs={12}>
          <section>
            <h3>Define your Data Models and Sources</h3>
            <p>
              Define the data models you want to sync from your data sources.
              Configure these models and how you want to sync using Code or in
              our Enterprise UI.
            </p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12}>
          <section>
            <h3>Create Groups</h3>
            <p>
              Point and click to explore segmentation. Find out the size of the
              Group in seconds, not hours. Use your Group definitions across
              destinations.
            </p>
          </section>
        </Col>
        <Col md={6} xs={12} className={styles.hasImage}>
          <ImageInBrowserFrame
            src="/images/home/how-it-works-2.png"
            alt="how it works 2"
            width={733}
            height={398}
          />
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12} className={styles.hasImage}>
          <ImageInBrowserFrame
            src="/images/home/how-it-works-3.png"
            alt="how it works 3"
            width={733}
            height={398}
          />
        </Col>
        <Col md={6} xs={12}>
          <section>
            <h3>Send to Destinations</h3>
            <p>
              Integrations make it easy to send the right data to each tool you
              use. No code is necessary to change what data gets sent.
            </p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col md={6} xs={12}>
          <section>
            <h3>
              Use Source-Of-Truth data in your SaaS tools and in your product
            </h3>
            <p>
              Run campaigns in the marketing and business tools of your choice
              with data that's been verified. Switch providers easily without
              needing to rebuild integrations.
            </p>
          </section>
        </Col>
        <Col md={6} xs={12} className={styles.hasImage}>
          <ImageInBrowserFrame
            src="/images/home/how-it-works-4.png"
            alt="how it works 4"
            width={733}
            height={398}
          />
        </Col>
      </Row>
    </Container>
  );
};
