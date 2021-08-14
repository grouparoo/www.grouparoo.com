import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import WhoWeAre from "../components/home/whoWeAre";
import JobBoard from "../components/jobs/jobBoard";
import WorkingAtGrouparooCard from "../components/jobs/workingAtGrouparoo";
import { getJobs } from "../utils/jobPosts";
import SEO from "../components/seo";

export default function About({ pageProps }) {
  return (
    <>
      <SEO
        canonical={true}
        description="Join Grouparoo Open Positions Engineering Marketing Automation Support"
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        path="/about"
        title="About Grouparoo"
      />

      <Container>
        <Row>
          <Col>
            <h1 data-testid="header">About Grouparoo</h1>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={5} md={4}>
            <Image
              thumbnail
              src="/images/team/team.jpeg"
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
              Our aim is to solve this problem by making it as simple as
              deploying your website to change how your data is synced. Funded
              by top-tier inventors, Grouparoo is creating open-core
              applications to simplify and automate the data syncing process
              within companies - solving both technical and organizational
              challenges.
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
          investors who believe in our mission.
        </p>
        <div style={{ margin: "30px" }}>
          <Row>
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
          </Row>
          <br />
          <Row>
            <Col>
              <Link href="https://hack-vc.com/">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <div className="investor-logo">
                    <Image
                      src="/images/investors/hack-vc-logo.svg"
                      alt="Hack VC logo"
                      width={250}
                      height={75}
                    />
                  </div>
                </a>
              </Link>
            </Col>
            <Col>
              <Link href="https://liquid2.vc/">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <Image
                    src="/images/investors/liquid2-ventures-logo.png"
                    alt="Liquid2 VC logo"
                    width={175}
                    height={75}
                    rounded
                  />
                </a>
              </Link>
            </Col>
            <Col>
              <Link href="https://www.scmadvisors.co.uk/">
                <a target="_blank" rel="nofollow noopener noreferrer">
                  <Image
                    src="/images/investors/scm-advisors-logo-124.png"
                    alt="SCM Advisors logo"
                    width={217}
                    height={75}
                  />
                </a>
              </Link>
            </Col>
          </Row>
        </div>
        <br />
        <h2 id="benefits">Benefits and Perks</h2>
        <br />

        <Row>
          <Col md={6}>
            <h5>Work from anywhere in the US</h5>
            <p>
              We're a fully remote company, so you can work from anywhere in the
              U.S.{" "}
            </p>
            <h5>Healthcare coverage</h5>
            <p>
              We offer medical, vision, and dental insurance plans to all of our
              employees.
            </p>
            <h5>401(k) matching</h5>
            <p>
              We match 100% of retirement contributions on the first 3%
              contributed and then 50% of contributions from 3% to 5%.
            </p>
          </Col>
          <Col md={6}>
            <h5>Equity</h5>
            <p>
              We believe in building for the long-term, so all employees get
              equity in Grouparoo.
            </p>
            <h5>Equipment and Internet stipend</h5>
            <p>
              We want all of our teammates to work effectively, so we provide
              stipends for your internet and a budget for equipment for your
              home office.
            </p>
            <h5>Parental leave</h5>
            <p>
              We offer 4 weeks of paid leave for the care of a new child in your
              life.
            </p>
          </Col>
        </Row>
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
      <br />
    </>
  );
}

About.getInitialProps = async (ctx) => {
  const jobs = await getJobs();
  return { jobs };
};
