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
        style={{ textAlign: "center", paddingTop: 0, paddingBottom: 20 }}
      >
        <Container>
          <br />
          <Row>
            <Col>
              <h3>
                We’re celebrating Open Source with a contest and giving away
                raffle prizes for Hacktoberfest! Hacktoberfest is a month-long
                challenge encouraging Github contributions and collaboration.
              </h3>{" "}
              <h3>Everyone is invited to participate!</h3>{" "}
            </Col>
          </Row>{" "}
          <Row>
            <Col>
              <Image
                src="/images/hacktoberfest/header-hacktoberfest2021.png"
                alt="Hacktoberfest Grouparoo 2021"
                width={1184}
                height={700}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src="/images/hacktoberfest/header-hacktoberfest-blue.png"
                alt="Hacktoberfest Grouparoo 2021"
                width={1184}
                height={700}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src="/images/hacktoberfest/header-hacktoberfest2021-cl.png"
                alt="Hacktoberfest Grouparoo 2021"
                width={1175}
                height={700}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <h2>About</h2>
              <p>
                For an entire month from Oct 11 - Nov 12, we're holding raffles
                giving away 12 prizes for contributors to Grouparoo. We are
                encouraging pull requests that improve documentation or creating
                destinations to our platform to sync code to third-party
                services.
              </p>
              <p>
                We’re participating in Hacktoberfest and giving away prizes in
                November because we know the more the merrier in Open Source!
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>To Qualify for Prizes</h2>
              <p>
                Chose one or do both. All pull requests must be merged by the
                end of day November 12th, to be entered in the contest. Each
                pull request contribution equates one raffle entry.
              </p>
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
              <h2>Event</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Image
                src="/images/hacktoberfest/event-oct-28.png"
                alt="October 28, 2021"
                width={176}
                height={200}
              />
            </Col>
            <Col>
              <p>Join us for Office Hours Code Along</p>
              <p>Thursday, October 28</p>
              <p>5:30 pm PDT / 8:30 pm EDT</p>
              <p>Ask questions &amp; get helpful tips on how to win!</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Community</h2>
              <p>To collaborate or ask for help, connect with us here. </p>
            </Col>
          </Row>
          <Row>
            <Col sm={3}>
              <Image
                src="/images/hacktoberfest/twitter-icon.png"
                alt="Twitter"
                width={75}
                height={75}
              />
            </Col>
            <Col sm={4}>
              <Image
                src="/images/hacktoberfest/slack-icon2.png"
                alt="Slack"
                width={100}
                height={100}
              />
            </Col>
            <Col sm={5}>
              <Image
                src="/images/hacktoberfest/linkedin-icon.png"
                alt="LinkedIn"
                width={75}
                height={75}
              />
            </Col>
            <Col sm={6}>
              <a href="https://github.com/grouparoo/www.grouparoo.com">
                <Image
                  src="/images/hacktoberfest/github-icon.png"
                  alt="Github"
                  width={75}
                  height={75}
                />
              </a>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <h1>Prizes</h1>
              <h6>
                Last day to contribute is Nov. 12th, 2021. Winners will be
                contacted and awarded mid November.{" "}
              </h6>
              <Col> </Col>{" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                }}
              >
                <Col>
                  {" "}
                  <h6>
                    <ul>
                      <li>5 x Grouparoo T-shirts</li>
                      <li>5 x $50 Gift Cards</li>
                      <li>2 x Grouparoo Hoodies</li>
                    </ul>{" "}
                  </h6>{" "}
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
