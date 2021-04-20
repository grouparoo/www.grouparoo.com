import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

export default function InfoBanner() {
  return (
    <>
      <div id="value-prop" className="bg-dark text-white homePageSection">
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col md={12}>
              <h2>
                Grouparoo is the customer data platform that meets you where you
                are at.
              </h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={6}>
              <h3>🖥 Use your normal workflow</h3>
              <p>
                Build your data infrastructure the way you do with other apps.
                Grouparoo’s git-based workflow makes it easy.
              </p>
              <br />
            </Col>
            <Col md={6}>
              <h3>📈 Query the source of truth</h3>
              <p>
                Don’t rely on events to understand your customers. Use the data
                from your product database or data warehouse.
              </p>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>🔒 Keep private data in house</h3>
              <p>
                Increase privacy by limiting the data that leaves your
                infrastructure without sacrificing your customer experience.
              </p>
              <br />
            </Col>
            <Col>
              <h3>💰 Save bags of money</h3>
              <p>
                Grouparoo is open source and free to run. Stop being charged by
                event volume and focus on what you want to build.
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      
    </>
  );
}
