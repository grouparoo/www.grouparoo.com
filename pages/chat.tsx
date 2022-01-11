/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import SEO from "../components/SEO";

export default function Chat() {
  return (
    <>
      <SEO
        title="Grouparoo Community Chat"
        description="The Grouparoo community is a place to discuss how to help growth and data teams make the most of their customer data and tools."
        path="/chat"
        canonical={true}
      />

      <div
        id="headline"
        style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>Grouparoo Community Slack</h1>
              <p className="text-big-muted">
                Discuss how to help your team make the most of your customer
                data and tools.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="signup" style={{ textAlign: "center" }}>
        <Container style={{ maxWidth: 880 }}>
          <iframe
            src="https://grouparoo.commsor.com/embed/"
            className="commsor-embed"
            width="100%"
            height="600px"
            style={{ border: "none", background: "#f6fafb" }}
            frameBorder="0"
            scrolling="no"
          ></iframe>
          <script src="https://grouparoo.commsor.com/embed/parent.js"></script>
          <script>iFrameResize({}, '.commsor-embed')</script>
        </Container>
      </div>
    </>
  );
}
