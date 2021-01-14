import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import WhoWeAre from "../components/home/whoWeAre";
import JobBoard from "../components/jobs/jobBoard";
import WorkingAtGrouparooCard from "../components/jobs/workingAtGrouparoo";

export default function Community() {
  return (
    <>
      <Head>
        <title>Grouparoo Community</title>
        <meta
          name="description"
          content="The Grouparoo community is a place to discuss how to help growth and data teams make the most of their customer data and tools."
        />
        <link rel="canonical" href="https://www.grouparoo.com/community" />
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
