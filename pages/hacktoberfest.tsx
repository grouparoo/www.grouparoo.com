import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";

import SEO from "../components/seo";

export default function Hacktoberfest({ pageProps }) {
  return (
    <>
      <SEO
        canonical={true}
        description="TODO"
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
          <Row>
            <Col>
              <Image
                thumbnail
                src="/images/hacktoberfest/header_hacktoberfest.png"
                alt="Hacktoberfest Grouparoo 2021"
                width={1184}
                height={300}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <p>
                We’re celebrating Open Source with a contest and giving away
                prizes for Hacktoberfest! Hacktoberfest is a month-long
                challenge encouraging Github contributions and collaboration.
                Everyone is invited to participate!
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                thumbnail
                src="/images/hacktoberfest/header_hacktoberfest.png"
                alt="Hacktoberfest Grouparoo 2021"
                width={1184}
                height={300}
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
                For an entire month, Oct 8 - Nov 5, we're holding a raffle for
                contributors to Grouparoo. We are encouraging pull requests that
                improve documentation or creating destinations to our platform
                to sync code to third-party services.
              </p>
              <p>
                We’ll be giving away prizes in November because we know the more
                the merrier in Open Source! All contributions will receive 2
                entries into the raffle.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>To Qualify for Prizes</h2>
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
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Event</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <Image
                thumbnail
                src="/images/hacktoberfest/grouparoo_event_hacktoberfest.png"
                alt="October 21, 2021"
                width={176}
                height={200}
              />
            </Col>
            <Col>
              <p>Join us for Office Hours Code Along</p>
              <p>Thursday, October 21</p>
              <p>5:30 pm PDT / 8:30 pm EDT</p>
              <p>Ask questions &amp; get helpful tips on how to win!</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
