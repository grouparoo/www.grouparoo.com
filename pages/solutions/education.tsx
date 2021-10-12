import React from "react";
import { Container, Button, Tab, Nav, Row, Col } from "react-bootstrap";
import Image from "../../components/Image";
import SEO from "../../components/seo";
import IntegrationsSection from "../../components/home/integrationsSection";
import ImageInBrowserFrame from "../../components/imageInBrowserFrame";

export default function Education() {
  return (
    <>
      <SEO
        canonical={true}
        path={`/solutions/education`}
        title="Grouparoo for Schools and EdTech companies"
        description="Grouparoo is a reverse ETL tool to power data for schools and EdTech companies."
        twitterCard={"summary"}
      />

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>
                Data syncing infrastructure for K-12 schools, colleges,
                universities, and EdTech companies
              </h1>
              <p className="text-big-muted">
                Better understand your student and teacher data and engage with
                them using the tools you trust
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
                  href="/docs/getting-started"
                >
                  Install Now
                </Button>
              </p>
            </Col>
          </Row>
          <br />
        </Container>
      </div>

      <div id="value-prop" className="bg-dark text-white homePageSection">
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col md={12}>
              <h2>
                Grouparoo is a self-hosted reverse ETL tool, syncing your
                source-of-truth data with the communications tools you're
                familiar with.
              </h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={6}>
              <h3>☁️ Deploy in your own cloud</h3>
              <p>
                Because Grouparoo is self-hosted in your own private cloud such
                as AWS and Google Cloud Platform, you have complete control over
                your student and teacher data.
              </p>
              <br />
            </Col>
            <Col md={6}>
              <h3>🖥 Source code access</h3>
              <p>
                Our code is available on{" "}
                <a href="https://github.com/grouparoo/grouparoo">Github</a>, so
                you can understand exactly how the code works and modify it if
                you so please!
              </p>
              <br />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <h3>🔒 Sync protected data securely and safely</h3>
              <p>
                Keep the email tools you already use to run campaigns always up
                to date.
              </p>
              <br />
            </Col>
            <Col>
              <h3>✅ Enable FERPA compliant communication</h3>
              <p>
                Grouparoo is hosted within your own cloud, staying in compliance
                with your FERPA-compliant infrastructure.
              </p>
              <br />
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
              <h2>Synchronize your student and teacher data</h2>
              <br />
              <Image
                centered
                src="/images/home/bowtie.svg"
                alt="Grouparoo sources and Destination connections"
                width={1000}
                height={537}
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
                <h3 className="homepageBlueH3">
                  Pull in your student and teacher data
                </h3>
                <p>
                  You don’t have to know SQL to build records. Use a simple
                  interface to keep student and teacher data up to date with the
                  sources that matter.
                </p>
              </div>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/how-it-works-1.png"
                alt="Grouparoo Record"
                width={650}
                height={398}
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">Create Groups</h3>
              <p>
                Point and click segmentation. Find out the size of the Group in
                seconds, not hours. Use your Group definitions across
                destinations.
              </p>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/how-it-works-2.png"
                alt="Grouparoo groups"
                width={650}
                height={396}
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">Send to Destinations</h3>
              <p>
                Integrations make it easy to send the right data to each tool
                you use. No code is necessary to change what data gets sent. You
                control exactly what data gets sent. And we're adding new
                integrations all the time.
              </p>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/how-it-works-3.png"
                alt="Grouparoo Destination"
                width={650}
                height={355}
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <h3 className="homepageBlueH3">Execute your Campaigns</h3>
              <p>
                Run campaigns in the email and push notification tools of your
                choice. Switch providers easily without needing engineers to
                build new integrations.
              </p>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/how-it-works-4.png"
                alt="Data synced to Destination"
                width={650}
                height={398}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div
        id="for-marketing-teams"
        className="bg-dark text-white homePageSection"
        style={{ marginTop: 40 }}
      >
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col>
              <h2>Built for Modern Education IT Teams</h2>
              <br />
            </Col>
          </Row>

          {/* On Big screens, show a tab selector */}
          <div className="d-none d-lg-block">
            <Tab.Container defaultActiveKey="email-marketing">
              <Row>
                <Col md={4}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="email-marketing">
                        <h3>Email marketing</h3>
                        <p>
                          Segment students and teachers to give them relevant,
                          personalized emails all while keeping their data safe.
                        </p>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="customer-support">
                        <h3>Support</h3>
                        <p>
                          Support teams will have all of the data they need in
                          one tool.
                        </p>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="product-customization">
                        <h3>In-product customization</h3>
                        <p>
                          Product and eng teams can personalize the product
                          experience based on the Groups that you make in
                          Grouparoo.
                        </p>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col md={8}>
                  <Tab.Content style={{ textAlign: "center" }}>
                    <Tab.Pane eventKey="email-marketing">
                      <Image
                        centered
                        src="/images/home/retention-marketing.png"
                        alt="Sync groups to destinations"
                        width={776}
                        height={480}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="customer-support">
                      <Image
                        src="/images/home/solutions/healthcare/zendesk-users.png"
                        alt="Users in Zendesk"
                        width={730}
                        height={425}
                      />
                    </Tab.Pane>
                    <Tab.Pane eventKey="product-customization">
                      <Image
                        src="/images/home/solutions/healthcare/in-product.png"
                        alt="Map data to product database"
                        width={730}
                        height={492}
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
                <h3>Email marketing</h3>
                <p>
                  Segment students and teachers to give them relevant,
                  personalized emails all while keeping their data safe.
                </p>
              </Col>
              <Col md={6}>
                <Image
                  centered
                  src="/images/home/retention-marketing.png"
                  alt="Sync groups to destinations"
                  width={300}
                  height={197}
                />
              </Col>
            </Row>

            <br />

            <Row>
              <Col md={6}>
                <h3>Customer Support & Ops</h3>
                <p>
                  Customer support teams will have all of the patient data they
                  need in one tool.
                </p>
              </Col>
              <Col md={6}>
                <Image
                  src="/images/home/solutions/healthcare/zendesk-users.png"
                  alt="Users in Zendesk"
                  width={730}
                  height={175}
                />
              </Col>
            </Row>

            <br />

            <Row>
              <Col md={6}>
                <h3>In-product customization</h3>
                <p>
                  Product and eng teams can personalize the product experience
                  based on the Groups that you make in Grouparoo.
                </p>
              </Col>
              <Col md={6}>
                <Image
                  src="/images/home/solutions/healthcare/in-product.png"
                  alt="Map data to product database"
                  width={300}
                  height={202}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <IntegrationsSection />
    </>
  );
}
