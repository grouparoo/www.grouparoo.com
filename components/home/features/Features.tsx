import { Col, Container, Row } from "react-bootstrap";
import { CloudWithCheckmark } from "./icons/CloudWithCheckmark";
import { LineGraph } from "./icons/LineGraph";
import { OpenBox } from "./icons/OpenBox";
import { Puzzle } from "./icons/Puzzle";
import { Sliders } from "./icons/Sliders";
import { Speedometer } from "./icons/Speedometer";
import styles from "./Features.module.scss";

export const Features = () => {
  return (
    <Container className={`p-4 ${styles.container}`}>
      <Row className="mb-4 mt-1">
        <h2>Features that embed in your workflow</h2>
        <h3 className="normalize solid">
          Grouparoo makes it easy to follow developer best practices.
        </h3>
      </Row>
      <Row>
        <Col md={4} xs={12}>
          <LineGraph />
          <h4>Observability</h4>
          <p>
            Charts, tools, and data to help you monitor your Grouparoo instance.
          </p>
        </Col>
        <Col md={4} xs={12}>
          <Speedometer />
          <h4>Testable</h4>
          <p>
            Write automated tests, so you can verify that the data is being
            imported and exported as you'd expect.
          </p>
        </Col>
        <Col md={4} xs={12}>
          <Puzzle />
          <h4>Pre-built integrations</h4>
          <p>
            All of the integration code is already written, so all of the
            nuances like rate limits, API requirements, and others are covered.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={4} xs={12}>
          <CloudWithCheckmark />
          <h4>Many deploy options</h4>
          <p>
            Deploy easily using Heroku, Kubernetes, or Docker, or through your
            own deploy process.
          </p>
        </Col>
        <Col md={4} xs={12}>
          <Sliders />
          <h4>Conventions</h4>
          <p>
            Maintainable conventions so everyone on the team can easily
            understand and modify Grouparoo.
          </p>
        </Col>
        <Col md={4} xs={12}>
          <OpenBox />
          <h4>Open Source & Extensible</h4>
          <p>
            Grouparoo is open source, so you can look under the hood to see how
            everything works and extend it to your needs.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
