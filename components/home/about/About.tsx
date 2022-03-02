/* eslint-disable @next/next/no-img-element */
import { Col, Container, Row } from "react-bootstrap";
import { DatabaseNodes } from "./DatabaseNodes";
import { ToolNodes } from "./ToolNodes";
import styles from "./About.module.scss";
import { WigglyLine } from "./WigglyLine";
import { CodeBlock } from "../../CodeBlock";

const code = `
  # in a new directory
  npm install -g grouparoo
  grouparoo init .
  grouparoo config
`;

export const About = () => {
  return (
    <Container className={`${styles.about} d-flex flex-column`}>
      <WigglyLine className={styles.wigglyLine} />
      <Row>
        <Col md={6} sm={12} className={`py-5`}>
          <section>
            <h3>Free & Easy to Install</h3>
            <p>
              Try Grouparoo on your computer today or install it on your
              company's servers. Your data stays private on your servers. No
              usage or storage limits.
            </p>
          </section>
        </Col>
        <Col md={6} sm={12} className={`py-5 ${styles.codeCol}`}>
          <section className={styles.codeSection}>
            <CodeBlock code={code} />
          </section>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12} className={`py-5 ${styles.hasImage}`}>
          <DatabaseNodes />
        </Col>
        <Col md={6} sm={12} className={`py-5`}>
          <section>
            <h3>Use Verified Data</h3>
            <p>
              You've spent a lot of time ensuring that your data warehouse has
              the correct data. Now you can use it to generate real value for
              your company. The same data that your business uses to make
              decisions can now also be used to act.
            </p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12} className={`py-5`}>
          <section>
            <h3>Connect New Tools Quickly & Easily</h3>
            <p>
              Marketing, Sales, Customer Support and other teams are trying new
              tools all the time. Instead of building and maintaining all of
              these integrations, use Grouparoo's pre-built connectors.
            </p>
          </section>
        </Col>
        <Col md={6} sm={12} className={`py-5 ${styles.hasImage}`}>
          <ToolNodes className={``} />
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12} className={`py-5 ${styles.hasImage}`}>
          <img
            src="/images/home/github.png"
            alt="github logo"
            width="auto"
            height="auto"
          />
        </Col>
        <Col md={6} sm={12} className={`py-5`}>
          <section>
            <h3>Open Source</h3>
            <p>
              Maintain control over your data and infrastructure so you're never
              locked in. While a dedicated team is building and maintaining
              Grouparoo, we welcome the developer community to contribute and
              improve it as well.
            </p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={12} className={`py-5`}>
          <section>
            <h3>Best Practices & Batteries Included</h3>
            <p>
              With built-in support for edges cases like rate-limiting and
              retrying, you will be ready for whatever problems The Cloud can
              throw at you. Grouparoo can be run on your laptop or scale across
              many servers to increase throughput.
            </p>
          </section>
        </Col>
        <Col md={6} sm={12} className={`py-5 ${styles.hasImage}`}>
          <ToolNodes className={``} />
        </Col>
      </Row>
    </Container>
  );
};
