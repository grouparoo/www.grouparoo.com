import React from "react";
import { Container, Image, Button, Tab, Nav, Row, Col } from "react-bootstrap";
import Head from "next/head";
import IntegrationsSection from "../../components/home/integrationsSection";
import GetStarted from "../../components/home/getStarted";
import WhyOpenSource from "../../components/home/whyOpenSource";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>
          Grouparoo: Real Time Marketing and Operations Infrastructure
        </title>
        <meta
          name="description"
          content="Grouparoo is real-time data infrastructure that puts marketers and operators in control."
        />
        <link
          rel="canonical"
          href="https://www.grouparoo.com/solutions/marketers"
        />
      </Head>

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>All your customer data in one place</h1>
              <p className="text-big-muted">
                Grouparoo is real-time data infrastructure that puts marketers
                and operators in control.
              </p>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <Button variant="primary" href="/meet" className="ml-auto">
                Get a Demo →
              </Button>
            </Col>
          </Row>

          <br />

          <Row>
            <Col>
              <p>
                or try it free. We’re open source!&nbsp;&nbsp;&nbsp;
                <Button
                  size="sm"
                  variant="outline-primary"
                  style={{ padding: ".5rem 1rem" }}
                  href="https://github.com/grouparoo/grouparoo"
                >
                  Install Now
                </Button>
              </p>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      </div>

      <div id="value-prop" className="bg-dark text-white homePageSection">
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col md={12}>
              <h2>Customer data is often a mess.</h2>
              <h2>
                Grouparoo helps keep your data unified without needing engineers
              </h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={6}>
              <h3>👋 Know your customers</h3>
              <p>
                Unify data from many sources to create a single profile of each
                customer.
              </p>
              <br />
            </Col>
            <Col md={6}>
              <h3>👤 Target the right people</h3>
              <p>
                Quickly explore and segment profiles into groups that you want
                to message or track.
              </p>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>💬 Automate your messaging</h3>
              <p>
                Keep the tools you already use to execute campaigns always up to
                date.
              </p>
              <br />
            </Col>
            <Col>
              <h3>📈 Analyze the impact</h3>
              <p>Monitor and understand how the campaign performed.</p> <br />
            </Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col md={12}>
              <p>
                <strong>... all without ongoing help from engineering.</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        id="synchronize"
        style={{ textAlign: "center" }}
        className="homePageSection"
      >
        <Container>
          <Row>
            <Col>
              <h2>Synchronize all of your customer data</h2>
              <br />
              <Image
                className="howItWorksImageWithoutDropShadow"
                width="90%"
                src={require("../../public/images/home/bowtie.svg")}
                alt="Grouparoo sources and destination connections"
              />
            </Col>
          </Row>
        </Container>
      </div>

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
                <h3 className="homepageBlueH3">Pull in your Customer Data</h3>
                <p>
                  You don’t have to know SQL to build your profiles. Use a
                  simple interface to keep customer data up to date with the
                  sources that matter.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <Image
                className="howItWorksImage"
                width="100%"
                src={require("../../public/images/home/how-it-works-1.png")}
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
                className="howItWorksImage"
                style={{ width: "100%" }}
                src={require("../../public/images/home/how-it-works-2.png")}
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
                you use. No code is necessary to change what data gets sent.
              </p>
            </Col>
            <Col md={8}>
              <Image
                className="howItWorksImage"
                style={{ width: "100%" }}
                src={require("../../public/images/home/how-it-works-3.png")}
                alt="Grouparoo destination"
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">Execute your Campaigns</h3>
              <p>
                Run campaigns in the marketing tools of your choice. Switch
                providers easily without needing engineers to rebuild
                integrations.
              </p>
            </Col>
            <Col md={8}>
              <Image
                className="howItWorksImage"
                style={{ width: "100%" }}
                src={require("../../public/images/home/how-it-works-4.png")}
                alt="Data synced to destination"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div
        id="for-marketing-teams"
        className="bg-dark text-white homePageSection"
      >
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <h2>Built for Modern Marketing and Operations Teams</h2>
              <br />
            </Col>
          </Row>

          {/* On Big screens, show a tab selector */}
          <div className="d-none d-lg-block">
            <Tab.Container defaultActiveKey="retention-marketing">
              <Row>
                <Col md={4}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="retention-marketing">
                        <h3>Retention Marketing</h3>
                        <p>
                          Target and reach the exact customer segments you want
                          to retain across every channel.
                        </p>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="ops-enablement">
                        <h3>Marketing Ops & Enablement</h3>
                        <p>
                          Keep customer data definitions uniform and tidy, all
                          without needing CSVs or engineering help.
                        </p>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="growth-marketing">
                        <h3>Growth Marketing</h3>
                        <p>
                          Find and re-target the users and audiences who are
                          most likely to convert.
                        </p>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={8}>
                  <Tab.Content style={{ textAlign: "center" }}>
                    <Tab.Pane eventKey="retention-marketing">
                      <Image
                        style={{ width: "100%" }}
                        src={require("../../public/images/home/retention-marketing.png")}
                        alt="Sync groups to destinations"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="ops-enablement">
                      <Image
                        style={{ width: "100%" }}
                        src={require("../../public/images/home/marketing-ops.png")}
                        alt="Create properties from sources"
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="growth-marketing">
                      <Image
                        style={{ width: "100%" }}
                        src={require("../../public/images/home/growth-marketing.png")}
                        alt="Map data to destinations"
                      />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>

          {/* On Small screens, show a grid */}
          <div className="d-lg-none">
            <Row>
              <Col md={6}>
                <h3>Retention Marketing</h3>
                <p>
                  Target and reach the exact customer segments you want to
                  retain across every channel
                </p>
              </Col>
              <Col md={6}>
                <Image
                  style={{ width: "95%" }}
                  src={require("../../public/images/home/retention-marketing.png")}
                  alt="Sync groups to destinations"
                />
              </Col>
            </Row>

            <br />

            <Row>
              <Col md={6}>
                <h3>Marketing Ops &amp; Enablement</h3>
                <p>
                  Keep customer data definitions uniform and tidy, all without
                  needing CSVs or engineering help.
                </p>
              </Col>
              <Col md={6}>
                <Image
                  style={{ width: "95%" }}
                  src={require("../../public/images/home/marketing-ops.png")}
                  alt="Create properties from sources"
                />
              </Col>
            </Row>

            <br />

            <Row>
              <Col md={6}>
                <h3>Growth Marketing</h3>
                <p>
                  Find and re-target the users and audiences who are most likely
                  to convert.
                </p>
              </Col>
              <Col md={6}>
                <Image
                  style={{ width: "95%" }}
                  src={require("../../public/images/home/growth-marketing.png")}
                  alt="Map data to destinations"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <IntegrationsSection />
      <WhyOpenSource />
      <GetStarted />
    </>
  );
}
