import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import Head from "next/head";
import HomepageCodeBox from "../components/home/homepageCodeBox";
import IntegrationsSection from "../components/home/integrationsSection";
import SmallIntegration from "../components/home/smallIntegration";
import GetStarted from "../components/home/getStarted";
import WhyOpenSource from "../components/home/whyOpenSource";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Grouparoo: Open Source Real Time Data Infrastructure</title>
        <meta
          name="description"
          content="Grouparoo is real-time data infrastructure that puts marketers and operators in control."
        />
        <link rel="canonical" href="https://www.grouparoo.com/" />
      </Head>

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>Sync, Segment, and Send your Product Data Everywhere</h1>
              <p className="text-big-muted">
                Focus on building your core product, not integrating with
                3rd-party tools.
              </p>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <Button
                size="lg"
                variant="primary"
                style={{ padding: ".5rem 1rem" }}
                href="/docs"
                className="ml-auto"
              >
                Get Started
              </Button>
            </Col>
          </Row>

          <br />
          <br />
        </Container>
      </div>

      <div
        id="synchronize"
        style={{ textAlign: "center" }}
        className="bg-dark text-white homePageSection"
      >
        <Container>
          <Row>
            <Col>
              <h2>Easily sync your customer data</h2>
              <br />
              <Image
                unsized
                className="howItWorksImageWithoutDropShadow"
                style={{ width: "90%" }}
                src="/images/home/bowtie.svg"
                alt="Grouparoo sources and destination connections"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="value-prop" className="bg-dark text-white homePageSection">
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
              </h2>
            </Col>
          </Row>

          <br />
          <br />

          <Row className="align-items-center">
            <Col md={6}>
              <h3>Free and Easy to Install</h3>
              <p>
                Run Grouparoo on your computer today or install it on your
                company’s servers. Your data stays private on your servers. No
                usage or storage limits.
              </p>
            </Col>
            <Col>
              <HomepageCodeBox
                icon="npm"
                code={
                  <>
                    {`>`} npx grouparoo generate
                    <br />
                    {`>`} npm start
                  </>
                }
              />
              <a
                href="https://heroku.com/deploy?template=https://github.com/grouparoo/app-example"
                target="_blank"
                rel="noreferrer nofollow"
              >
                <HomepageCodeBox icon="heroku" code={`[ click to deploy ]`} />
              </a>
              <HomepageCodeBox
                icon="docker"
                code={
                  <>
                    {`>`} curl -L https://www.grouparoo.com/docker-compose
                    --output docker-compose.yml
                    <br />
                    {`>`} docker-compose up
                  </>
                }
              />
            </Col>
          </Row>

          <br />
          <br />
          <br />
          <br />

          <Row className="align-items-center">
            <Col md={6} className="d-none d-md-block">
              <Row className="align-items-center">
                <Col />
                <Col>
                  <br />
                  <br />
                  <br />
                  <SmallIntegration
                    name="MySQL"
                    slug="mysql"
                    image="mysql.png"
                  />
                  <SmallIntegration
                    name="Redshift"
                    slug="redshift"
                    image="redshift.svg"
                  />
                </Col>
                <Col>
                  <SmallIntegration
                    name="Postgres"
                    slug="postgres"
                    image="postgres.svg"
                  />
                  <SmallIntegration
                    name="BigQuery"
                    slug="bigquery"
                    image="bigquery.png"
                  />
                </Col>
                <Col />
              </Row>
            </Col>
            <Col md={6}>
              <h3>Use Source-of-truth data</h3>
              <p>
                Pull data from trusted sources like data warehouses instead of
                instrumenting Event streams.
              </p>
            </Col>
            <Col md={6} className="d-md-none">
              <Row className="align-items-center">
                <Col>
                  <SmallIntegration
                    name="MySQL"
                    slug="mysql"
                    image="mysql.png"
                    fillWidth={true}
                  />
                  <SmallIntegration
                    name="Redshift"
                    slug="redshift"
                    image="redshift.svg"
                    fillWidth={true}
                  />
                </Col>
                <Col>
                  <SmallIntegration
                    name="Postgres"
                    slug="postgres"
                    image="postgres.svg"
                    fillWidth={true}
                  />
                  <SmallIntegration
                    name="BigQuery"
                    slug="bigquery"
                    image="bigquery.png"
                    fillWidth={true}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <br />
          <br />
          <br />
          <br />

          <Row className="align-items-center">
            <Col md={6}>
              <h3>Connect new tools without writing code</h3>
              <p>
                Marketing, Sales, Customer Support and other teams are trying
                new tools all the time. Instead of building and maintaining all
                of these integrations, add our pre-built connectors.
              </p>
            </Col>
            <Col md={6}>
              <Row className="align-items-center">
                <Col className="d-none d-md-block" />
                <Col className="d-none d-md-block">
                  <SmallIntegration
                    name="Mailchimp"
                    slug="mailchimp"
                    image="mailchimp.svg"
                  />
                  <SmallIntegration
                    name="Marketo"
                    slug="marketo"
                    image="marketo.png"
                  />
                </Col>
                <Col className="d-md-none">
                  <SmallIntegration
                    name="Mailchimp"
                    slug="mailchimp"
                    fillWidth={true}
                    image="mailchimp.svg"
                  />
                  <SmallIntegration
                    name="Marketo"
                    slug="marketo"
                    fillWidth={true}
                    image="marketo.png"
                  />
                </Col>
                <Col className="d-none d-md-block">
                  <br />
                  <br />
                  <br />

                  <SmallIntegration
                    name="Hubspot"
                    slug="hubspot"
                    image="hubspot.svg"
                  />
                  <SmallIntegration
                    name="Zendesk"
                    slug="zendesk"
                    image="zendesk.svg"
                  />
                </Col>
                <Col className="d-md-none">
                  <SmallIntegration
                    name="Hubspot"
                    slug="hubspot"
                    fillWidth={true}
                    image="hubspot.svg"
                  />
                  <SmallIntegration
                    name="Zendesk"
                    slug="zendesk"
                    fillWidth={true}
                    image="zendesk.svg"
                  />
                </Col>
                <Col className="d-none d-md-block" />
              </Row>
            </Col>
          </Row>

          <br />
          <br />
          <br />
          <br />

          <Row className="align-items-center">
            <Col
              className="d-none d-md-block"
              md={6}
              style={{ textAlign: "center" }}
            >
              <Image
                unsized
                src="/images/home/github-white.png"
                alt="Github Logo"
                style={{ width: "100" }}
              />
            </Col>
            <Col md={6}>
              <h3>Open source</h3>
              <p>
                Maintain control over your data and infrastructure so you’re
                never locked in. While a dedicated team is building and
                maintaining Grouparoo, we welcome the developer community to
                contribute and improve it as well.
              </p>
              <p>
                <iframe
                  src="https://ghbtns.com/github-btn.html?user=grouparoo&repo=grouparoo&type=star&count=true"
                  frameBorder="0"
                  scrolling="0"
                  width="150"
                  height="20"
                  title="GitHub"
                ></iframe>
              </p>
            </Col>
            <Col className="d-md-none" md={6} style={{ textAlign: "center" }}>
              <Image
                unsized
                src="/images/home/github-white.png"
                alt="Github Logo"
                style={{ width: "100" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <br />
      <br />

      <div id="how-grouparoo-works">
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <h2>How Grouparoo Works</h2>
              <br />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md={4}>
              <div>
                <h3 className="homepageBlueH3">
                  Create Unified Customer Profiles
                </h3>
                <p>
                  Create a single view of your customers from all of your data
                  sources. Define what data you care about, either with our No
                  Code tool or with SQL.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <Image
                unsized
                className="howItWorksImage"
                style={{ width: "100%" }}
                src="/images/home/how-it-works-1.png"
                alt="Grouparoo profile"
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">Create Groups</h3>
              <p>
                Point and click to explore segmentation. Find out the size of
                the group in seconds, not hours. Use your group definitions
                across destinations.
              </p>
            </Col>
            <Col md={8}>
              <Image
                unsized
                className="howItWorksImage"
                style={{ width: "100%" }}
                src="/images/home/how-it-works-2.png"
                alt="Grouparoo groups"
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">Send to Destinations</h3>
              <p>
                Integrations make it easy to send the right data to each tool
                you use. No code is necessary to change what data gets sent
              </p>
            </Col>
            <Col md={8}>
              <Image
                unsized
                className="howItWorksImage"
                style={{ width: "100%" }}
                src="/images/home/how-it-works-3.png"
                alt="Grouparoo destination"
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">
                Use Group Definitions in your product and in your marketing
                tools
              </h3>
              <p>
                Run campaigns in the marketing and business tools of your
                choice. Switch providers easily without needing to rebuild
                integrations. Send Groups and Profiles
              </p>
            </Col>
            <Col md={8}>
              <Image
                unsized
                className="howItWorksImage"
                style={{ width: "100%" }}
                src="/images/home/how-it-works-4.png"
                alt="Data synced to destination"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <IntegrationsSection />
      <WhyOpenSource />
      <GetStarted />
    </>
  );
}
