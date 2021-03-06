import { Container, Row, Col } from "react-bootstrap";
import Image from "../Image";

export default function WhyOpenSource() {
  return (
    <>
      <div id="why-open-source" className="bg-dark text-white homePageSection">
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <h2>Why Open Source?</h2>
              <h3>Keeping customer data secure is more important than ever</h3>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={2} />
            <Col>
              <h3>Control</h3>
              <p>
                Grouparoo runs in your environment so you always have access to
                all the code and the data. Use it however you want.
              </p>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <Image
                centered
                rounded
                src="/images/home/github-white.png"
                alt="Github Logo"
                width={75}
                height={75}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={2} />
            <Col>
              <h3>Compliance</h3>
              <p>
                The control and privacy features make it easier for you to
                comply with GDPR, CCPA, and industry-specific standards.
              </p>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <Image
                centered
                rounded
                src="/images/home/gdpr.png"
                alt="GDPR Logo"
                width={75}
                height={75}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={2} />
            <Col>
              <h3>Privacy</h3>
              <p>
                You get to choose exactly what data gets sent to each tool. And
                you give them less because it was only needed to make the
                groups.
              </p>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <span style={{ fontSize: 80 }}>🔓</span>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={2} />
            <Col>
              <h3>Cost</h3>
              <p>
                Because Grouparoo is hosted in your private cloud, we’re
                significantly cheaper than SaaS alternatives that charge based
                on usage.
              </p>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <span style={{ fontSize: 80 }}>💸</span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
