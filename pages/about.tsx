import Head from "next/head";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import WhoWeAre from "../components/home/whoWeAre";
import JobBoard from "../components/jobBoard";

export default function About() {
  return (
    <>
      <Head>
        <title>About Grouparoo</title>
      </Head>

      <Container>
        <Row>
          <Col>
            <h1>About Grouparoo</h1>
            <meta
              name="description"
              content="Join Grouparoo Open Positions Engineering Marketing Automation Support"
            />
            <link rel="canonical" href="https://www.grouparoo.com/about" />
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={5} md={4}>
            <Image
              thumbnail
              src={require("../public/images/team/team.jpg")}
              alt="Team photo"
            />
            <p>
              <small>
                <em>The Grouparoo Founding Meeting</em>
              </small>
            </p>
          </Col>
          <Col md={6}>
            <p>
              Grouparoo is a software company building open source data tools
              that make data reliable, accessible, and actionable. We believe
              that people at companies do their best work when they are able to
              focus on their areas of expertise, but they struggle because of
              dependencies on other teams.
            </p>
            <p>
              Our aim is to solve this problem for business users by making a
              no-code tool to help them understand and take action on their
              customer data, and to make it easy for technical users to install
              and maintain. Funded by top-tier inventors, Grouparoo is creating
              open-core applications to simplify and automate the data syncing
              process within companies - solving both technical and
              organizational challenges.
            </p>
            <p>
              We’re a fully remote team too, so no matter where you are, we’d
              love to chat with you.
            </p>
          </Col>
        </Row>

        <br />
        <WhoWeAre />

        <Row>
          <Col>
            <h2>Grouparoo's Mission & Vision</h2>
            <p>
              <strong>Vision</strong>: Teams are empowered to make great
              customer experiences.
              <br />
              <strong>Mission</strong>: Build open source data tools that make
              data reliable, accessible, and actionable.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h2>What We Value</h2>
            <ul>
              <li>
                <strong>Candor + Empathy</strong>: Let’s be straightforward with
                each other, be empathetic and kind in our communications, and
                seek to do great work.
              </li>
              <li>
                <strong>Analytical + Speed</strong>: Take enough time to analyze
                what is or isn’t working, but strive for making a decision and
                taking action.{" "}
              </li>
              <li>
                <strong>Trust + Feedback</strong>: Trust one another, assume
                best intentions, and provide feedback to help us all improve.
              </li>
              <li>
                <strong>Customers + Value</strong>: Always think of the
                customers first and how we can create value for them and
                Grouparoo.
              </li>
              <li>
                <strong>Experiment + Automate</strong>: We have a bias towards
                experimentation and learning. When a test is successful, we
                create leverage by automating that process.
              </li>
            </ul>
          </Col>
        </Row>
        <br />

        <h2 id="careers">Open Positions</h2>
        <Row>
          <Col md={8}>
            <JobBoard />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <small>
                  We are always looking for exceptional Engineers, Designers,
                  Product Managers, and Marketers who share our Mission. Even if
                  we don't have a position posted, we would love to meet you!
                  You can reach us at{" "}
                  <a href="mailto:hello@grouparoo.com">hello@grouparoo.com</a>.
                </small>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
