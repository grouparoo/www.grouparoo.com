import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";

import SEO from "../components/SEO";

export default function Hacktoberfest({ pageProps }) {
  return (
    <>
      <SEO
        canonical={true}
        description="Hacktoberfest 2021"
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhacktoberfest%2Fheader-hacktoberfest2021.png&w=3840&q=75"
        path="/hacktoberfest"
        title="Grouparoo Hacktoberfest 2021"
      />
      <div
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
                raffle prizes for{" "}
                <a href="https://hacktoberfest.digitalocean.com">
                  Hacktoberfest
                </a>
              </h4>{" "}
              <h4>
                <br></br>
                Hacktoberfest is a month-long challenge encouraging Github
                contributions and collaboration.
              </h4>{" "}
              <br></br>
              <h3>Everyone is invited to participate!</h3> <br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src="/images/hacktoberfest/header-hacktoberfest2021.png"
                alt="Hacktoberfest Grouparoo 2021"
                width={1184}
                height={590}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <br />
              <div
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 20,
                }}
              >
                <h2>About</h2>
              </div>
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
              <div
                style={{
                  textAlign: "center",
                  paddingTop: 60,
                  paddingBottom: 20,
                }}
              >
                <h2>To Qualify for Prizes</h2>
              </div>
              <p>
                Chose one or do both. All pull requests must be merged by the
                end of day November 12th, to be entered in the contest. Each
                pull request contribution equates to one raffle entry.
              </p>
              <br />
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
              <br />
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
              <div
                style={{
                  textAlign: "center",
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                <br />
                <h2>Event</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <div
                className="d-none d-md-block"
                style={{
                  textAlign: "center",
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                <a href="https://www.eventbrite.com/e/grouparoos-hacktoberfest-2021-contest-tickets-190570570707">
                  <Image
                    src="/images/hacktoberfest/event-oct-28.png"
                    alt="October 28, 2021"
                    width={185}
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
                  Register here.
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                style={{
                  textAlign: "center",
                  paddingTop: 20,
                  paddingBottom: 10,
                }}
              >
                <h2>Community</h2>
                <br />
                <p>To collaborate or ask for help, connect with us here. </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className="d-flex justify-content-center"
                style={{
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
                <div style={{ width: 20 }}></div>
                <a href="https://www.grouparoo.com/chat">
                  <Image
                    src="/images/hacktoberfest/slack-icon.png"
                    alt="Slack"
                    width={75}
                    height={75}
                  />
                </a>
                <div style={{ width: 20 }}></div>
                <a href="https://www.linkedin.com/company/grouparoo">
                  <Image
                    src="/images/hacktoberfest/linkedin-icon.png"
                    alt="LinkedIn"
                    width={75}
                    height={75}
                  />
                </a>
                <div style={{ width: 20 }}></div>
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
              <div
                style={{
                  textAlign: "center",
                  paddingTop: 40,
                  paddingBottom: 10,
                }}
              >
                <h2>Prizes</h2>
                <br />
                Contest contributions accepted until Nov. 12th, 2021.
                <br />
                Winners will be contacted and awarded mid November.
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                className="d-flex justify-content-center"
                style={{
                  paddingTop: 0,
                  paddingBottom: 40,
                }}
              >
                <ul>
                  <li>5 x Grouparoo T-shirts</li>
                  <li>5 x $50 Gift Cards</li>
                  <li>2 x Grouparoo Hoodies</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
