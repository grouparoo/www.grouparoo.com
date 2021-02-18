import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Button,
  Table,
  Image,
} from "react-bootstrap";
import Head from "next/head";
import IntegrationsSection from "../components/home/integrationsSection";
import GetStarted from "../components/home/getStarted";

export default function PricingPage() {
  const boxTextStyle = {
    fontSize: "14px",
    textAlign: "left" as "left",
    paddingLeft: "1.4em",
    textIndent: "-1.4em",
  };

  return (
    <>
      <Head>
        <title>Grouparoo Pricing Options</title>
        <meta
          name="description"
          content="Grouparoo is open-source, so you can use our product for free today! Features and services available to fit your needs."
        />
        <link rel="canonical" href="https://www.grouparoo.com/pricing" />
      </Head>

      <div
        id="headline"
        className="pricingHeadline"
        style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>Grouparoo Pricing Options</h1>
              <p className="text-big-muted">
                Choose the best plan for you and your team, whether you want to
                self-host or have Grouparoo host for you.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        id="pricingPlans"
        className="pricingPlansSection"
        style={{ textAlign: "center" }}
      >
        <Container>
          <CardDeck>
            <Card
              className="pricingCard"
              style={{ paddingTop: 50, paddingBottom: 50 }}
              bg="white"
            >
              <Card.Body>
                <Card.Title>Community Edition</Card.Title>
                Grouparoo is open source and free to run in on your own cloud.
                <br />
                <br />
                <div style={boxTextStyle}>
                  <b>Features include:</b>
                  <li>Realtime syncing infrastructure</li>
                  <li>Access to all Sources and Destinations </li>
                  <li>Configurable with code and our CLI</li>
                  <li>Dynamic Group definition</li>
                  <li>Ticket-based support</li>
                </div>
              </Card.Body>
              <Card.Footer
                style={{ backgroundColor: "white", borderTop: "none" }}
              >
                <Button variant="outline-primary" href="/docs/getting-started">
                  Try free
                </Button>
              </Card.Footer>
            </Card>
            <Card
              style={{ paddingTop: 50, paddingBottom: 50 }}
              className="pricingCard"
              border="primary"
              bg="secondary"
              text="white"
            >
              <Card.Body>
                <Card.Title>Self-Managed Enterprise Edition</Card.Title>
                Empowers non-technical users and teams to use Grouparoo.
                <br />
                <br />
                <div style={boxTextStyle}>
                  <b>Everything in Community, plus:</b>
                  <li>
                    A no-code web UI allowing team members to access data.
                  </li>
                  <li>Data governance (coming soon)</li>
                  <li>Insights and analytics (coming soon)</li>
                  <li>Business hours support</li>
                </div>
              </Card.Body>
              <Card.Footer style={{ borderTop: "none" }}>
                <Button
                  variant="primary"
                  href="/meet?ref=pricing-page&button=enterprise"
                >
                  Get a quote
                </Button>
              </Card.Footer>
            </Card>
            <Card
              style={{ paddingTop: 50, paddingBottom: 50 }}
              className="pricingCard"
              border="primary"
              bg="secondary"
              text="white"
            >
              <Card.Body>
                <Card.Title>Hosted</Card.Title>
                Interested in using Grouparoo but don't want to host it
                yourself? Let's chat!
                <br />
                <br />
                <div style={boxTextStyle}>
                  <b>Everything in Enterprise Edition, plus:</b>
                  <li>Private single-tenant instance</li>
                  <li>
                    Keep the data in your databases or we can host it for you
                  </li>
                  <li>Business hours support</li>
                  <li>Enhanced support response time SLAs</li>
                </div>
              </Card.Body>
              <Card.Footer style={{ borderTop: "none" }}>
                <Button
                  variant="primary"
                  href="/meet?ref=pricing-page&button=hosted"
                >
                  Get a quote
                </Button>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div id="featureComparisons" className="featureTableSection">
        <Container>
          <Row>
            <Col>
              <Table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Community</th>
                    <th>Enterprise</th>
                    <th>Hosted</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Features</b>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Real-time data-syncing framework</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Integrations available</td>
                    <td>All</td>
                    <td>All</td>
                    <td>All</td>
                  </tr>
                  <tr>
                    <td>Dynamic Group Definitions</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Configurable with Code</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Configurable in the UI</td>
                    <td> - </td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Teams, Team Members, and Permissions</td>
                    <td> - </td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Insights and Analytics (coming soon)</td>
                    <td> - </td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Data Governance (coming soon)</td>
                    <td> - </td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Support</b>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Access to the community</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Ticket-based Support</td>
                    <td>✅</td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Support during Business Hours</td>
                    <td> - </td>
                    <td>✅</td>
                    <td>✅</td>
                  </tr>
                  <tr>
                    <td>Enhanced Support SLAs</td>
                    <td> - </td>
                    <td>add-on</td>
                    <td>add-on</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
      <br />

      <br />
      <IntegrationsSection />
      <GetStarted />
    </>
  );
}
