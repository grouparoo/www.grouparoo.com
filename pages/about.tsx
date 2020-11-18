import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import WhoWeAre from "../components/home/whoWeAre";
import JobBoard from "../components/jobs/jobBoard";
import WorkingAtGrouparooCard from "../components/jobs/workingAtGrouparoo";
import { LeverJob } from "../utils/jobPosts";

export default function About({ pageProps }) {
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
              src="/images/team/team.jpg"
              alt="Team photo"
              width={530}
              height={398}
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
        <h2 id="investors">Our Investors</h2>
        <p>
          We're excited and humbled to be working with an amazing team of
          investors!
        </p>
        <div style={{ margin: "30px" }}>
          <Row>
            <Col>
              <Link href="https://eniac.vc">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <Image
                    src="/images/investors/eniac-logo.svg"
                    alt="Eniac Ventures logo"
                    width={362}
                    height={75}
                  />
                </a>
              </Link>
            </Col>
            <Col>
              <Link href="https://fuelcapital.com">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <Image
                    src="/images/investors/fuel-capital-logo.png"
                    alt="Fuel Capital logo"
                    width={362}
                    height={75}
                  />
                </a>
              </Link>
            </Col>
          </Row>
          <br /> <br />
          <Row>
            <ul>
              <li>J Zac Stein (Lattice)</li>
              <li>Stacy Philpot-Brown (TaskRabbit)</li>
              <li>Hack VC</li>
              <li>Liquid 2</li>
            </ul>
          </Row>
          <Row></Row>
        </div>
        <br />
        <h2 id="careers">Open Positions</h2>
        <Row>
          <Col md={8}>
            <JobBoard jobs={pageProps?.jobs || []} />
          </Col>
          <Col>
            <WorkingAtGrouparooCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

About.getInitialProps = async (ctx) => {
  const { jobs } = await JobBoard.getInitialProps(ctx);
  return { jobs };
};
