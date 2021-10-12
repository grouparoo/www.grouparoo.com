import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";

import SEO from "../components/seo";

export default function Hacktoberfest({ pageProps }) {
  return (
    <>
      <SEO
        canonical={true}
        description="Hacktoberfest 2021"
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        path="/about"
        title="Grouparoo Hacktoberfest 2021"
      />
      <div
        id="headline"
        className="homePageSection"
        style={{
          textAlign: "center",
          paddingTop: 0,
          paddingBottom: 20,
        }}
      >
        <Container>
          <br />
          <Row>
            <Col>
              <h4>
                We’re celebrating Open Source with a contest giving away 12
                raffle prizes for Hacktoberfest! Hacktoberfest is a month-long
                challenge encouraging Github contributions and collaboration.
              </h4>{" "}
              <br></br>
              <h3>Everyone is invited to participate!</h3> <br></br>
            </Col>
          </Row>{" "}
          <Row>
            <Col>
              <Image
                src="/images/hacktoberfest/header-hacktoberfest2021.png"
                alt="Hacktoberfest Grouparoo 2021"
                width={1184}
                height={600}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <br></br>
              <br></br>
              <div
                id="About"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                <h2>About</h2>
              </div>
              <br></br>
              <p>
                For an entire month from Oct 12 - Nov 12, we're holding raffles
                giving away 12 prizes for contributors to Grouparoo. We are
                encouraging pull requests that improve documentation or creating
                destinations to our platform to sync code to third-party
                services.
              </p>
              <p>
                We’re participating in Hacktoberfest and giving away 12 prizes
                in November because we know the more the merrier in Open Source!
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>{" "}
              <div
                id="Qualify"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                <h2>To Qualify for Prizes</h2>
              </div>
              <br></br>
              <p>
                Chose one or do both. All pull requests must be merged by the
                end of day November 12th, to be entered in the contest. Each
                pull request contribution equates to one raffle entry.
              </p>
              <br></br>
              <h4>Improve documentation</h4>
              <ul>
                <li>
                  Follow the setup steps on our{" "}
                  <a href="/docs/getting-started">website</a>.
                </li>
                <li>Try out setting up and using Grouparoo.</li>
                <li>
                  Suggest documentation changes via pull request on our{" "}
                  <a href="https://github.com/grouparoo/www.grouparoo.com">
                    www repo
                  </a>
                  .
                </li>
              </ul>
              <br></br>
              <h4>Create a destination</h4>
              <ul>
                <li>
                  Destinations connect Grouparoo data (from databases and
                  warehouses) to various third-party systems (Salesforce,
                  Mailchimp, Zendesk, etc).
                </li>
                <li>
                  Read the{" "}
                  <a href="/docs/development/destinations">documentation</a>. on
                  how to create a destination and based on the APIs of your
                  service, decide how to build it.
                </li>

                <li>
                  Add the destination via a pull request on our{" "}
                  <a href="https://github.com/grouparoo/www.grouparoo.com">
                    mono repo
                  </a>
                  .
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>{" "}
              <div
                id="event"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                <h2>Event</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <div
                id="Qualify"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                {" "}
                <a href="https://www.eventbrite.com/e/grouparoos-hacktoberfest-2021-contest-tickets-190570570707">
                  <Image
                    src="/images/hacktoberfest/event-oct-28.png"
                    alt="October 28, 2021"
                    width={175}
                    height={200}
                  />
                </a>
              </div>
            </Col>
            <Col>
              <p>Join us for Office Hours Code Along</p>
              <p>Thursday, October 28</p>
              <p>5:30 pm PDT / 8:30 pm EDT</p>
              <p>
                Ask questions &amp; get helpful tips on how to win!{" "}
                <a href="https://www.eventbrite.com/e/grouparoos-hacktoberfest-2021-contest-tickets-190570570707">
                  Register here.{" "}
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              <div
                id="community"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                <br></br>

                <h2>Community</h2>
                <p>To collaborate or ask for help, connect with us here. </p>
              </div>{" "}
            </Col>
          </Row>
          <Row>
            <Col sm={1}>
              {" "}
              <div
                id="twitter"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                <a href="https://www.twitter.com/grouparoo">
                  <Image
                    src="/images/hacktoberfest/twitter-icon.png"
                    alt="Twitter"
                    width={75}
                    height={75}
                  />
                </a>
              </div>
            </Col>
            <Col sm={2}>
              {" "}
              <div
                id="slack"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                {" "}
                <a href="https://www.grouparoo.com/chat">
                  <Image
                    src="/images/hacktoberfest/slack-icon2.png"
                    alt="Slack"
                    width={100}
                    height={100}
                  />{" "}
                </a>
              </div>
            </Col>
            <Col sm={1}>
              {" "}
              <div
                id="linkedIn"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                {" "}
                <a href="https://www.linkedin.com/company/grouparoo">
                  <Image
                    src="/images/hacktoberfest/linkedin-icon.png"
                    alt="LinkedIn"
                    width={75}
                    height={75}
                  />{" "}
                </a>
              </div>
            </Col>
            <Col sm={1}>
              {" "}
              <div
                id="Github"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                <a href="https://github.com/grouparoo">
                  <Image
                    src="/images/hacktoberfest/github-icon.png"
                    alt="Github"
                    width={75}
                    height={75}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <br></br>{" "}
              <div
                id="headline"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                <h1>Prizes</h1>
                <br></br>
              </div>{" "}
              <div
                id="prizes"
                className="homePageSection"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                Contest contributions accepted until Nov. 12th, 2021. Winners
                will be contacted and awarded mid November.
                <br></br> <br></br>
              </div>
              <Col> </Col>
              <Col>
                <ul>
                  <li>5 x Grouparoo T-shirts</li>
                  <li>5 x $50 Gift Cards</li>
                  <li>2 x Grouparoo Hoodies</li> <br></br> <br></br>
                </ul>{" "}
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
