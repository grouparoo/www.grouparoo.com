import { Col, Container, Row } from "react-bootstrap";
import ImageInBrowserFrame from "../../ImageInBrowserFrame";
import styles from "./Steps.module.scss";

export const Steps = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <ImageInBrowserFrame
            src="/images/home/how-it-works-1.png"
            alt="how it works"
            width={733}
            height={398}
          />
        </Col>
        <Col>
          <section>
            <h3>Create Unified Customer Records</h3>
            <p>
              Create a single view of your customers from all of your data
              sources. Define what data you care about either with Code or in
              our Enterprise UI.
            </p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col>
          <section>
            <h3>Create Groups</h3>
            <p>
              Point and click to explore segmentation. Find out the size of the
              Group in seconds, not hours. Use your Group definitions across
              destinations.
            </p>
          </section>
        </Col>
        <Col>
          <ImageInBrowserFrame
            src="/images/home/how-it-works-2.png"
            alt="how it works 2"
            width={733}
            height={398}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ImageInBrowserFrame
            src="/images/home/how-it-works-3.png"
            alt="how it works 3"
            width={733}
            height={398}
          />
        </Col>
        <Col>
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
        <Col>
          <section>
            <h3>
              Use Group Definitions in your product and in your marketing tools
            </h3>
            <p>
              Run campaigns in the marketing and business tools of your choice.
              Switch providers easily without needing to rebuild integrations.
              Send Records and Group data.
            </p>
          </section>
        </Col>
        <Col>
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
