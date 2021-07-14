import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { isBrowser } from "../utils/isBrowser";

export default function Chat() {
  //because the form is embedded in the iframe, we are tracking that a user clicks in the div to determine if they've joined
  function onJoinClick() {
    if (isBrowser() && globalThis?.gtag) {
      globalThis.gtag("event", "join-community", {
        event_category: "conversion",
      });
    }
  }

  return (
    <>
      <Head>
        <title>Grouparoo Community Chat</title>
        <meta
          name="description"
          content="The Grouparoo community is a place to discuss how to help growth and data teams make the most of their customer data and tools."
        />
        <link rel="canonical" href="https://www.grouparoo.com/chat" />
      </Head>

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
        <Container style={{ maxWidth: 880 }} onClick={() => onJoinClick()}>
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
