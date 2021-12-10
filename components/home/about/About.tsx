import { Col, Container, Row } from "react-bootstrap";
import { DatabaseNodes } from "./DatabaseNodes";
import { ToolNodes } from "./ToolNodes";
import styles from "./About.module.scss";
import Highlight, { defaultProps } from "prism-react-renderer";
import { WigglyLine } from "./WigglyLine";
import vsLight from "prism-react-renderer/themes/vsLight";

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
        <Col className={`py-5 mx-3`}>
          <section>
            <h3>Free & Easy to Install</h3>
            <p>
              Try Grouparoo on your computer today or install it on your
              company's servers. Your data stays private on your servers. No
              usage or storage limits.
            </p>
          </section>
        </Col>
        <Col className={`py-5 mx-3`}>
          <section className={styles.codeSection}>
            <Highlight
              {...defaultProps}
              language="bash"
              code={code}
              theme={vsLight}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })} key={i}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} key={key} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </section>
        </Col>
      </Row>
      <Row>
        <Col className={`py-5 mx-3 ${styles.cloud} ${styles.one}`}>
          <DatabaseNodes />
        </Col>
        <Col className={`py-5 mx-3`}>
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
        <Col className={`py-5 mx-3`}>
          <section>
            <h3>Connect New Tools Quickly & Easily</h3>
            <p>
              Marketing, Sales, Customer Support and other teams are trying new
              tools all the time. Instead of building and maintaining all of
              these integrations, use Grouparoo's pre-built connectors.
            </p>
          </section>
        </Col>
        <Col className={`py-5 mx-3 ${styles.cloud} ${styles.two}`}>
          <ToolNodes className={``} />
        </Col>
      </Row>
      <Row>
        <Col className={`py-5 mx-3 ${styles.cloud} ${styles.three}`}>
          <img src="/images/home/github.png" alt="github logo" />
        </Col>
        <Col className={`py-5 mx-3`}>
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
        <Col className={`py-5 mx-3`}>
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
        <Col className={`py-5 mx-3 ${styles.cloud} ${styles.four}`}>
          <ToolNodes className={``} />
        </Col>
      </Row>
    </Container>
  );
};
