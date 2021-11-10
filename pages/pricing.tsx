import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Table,
  Image,
} from "react-bootstrap";
import SEO from "../components/SEO";
import Link from "next/link";

export default function PricingPage() {
  const boxTextStyle = {
    fontSize: "14px",
    textAlign: "left" as "left",
    paddingLeft: "1.4em",
    textIndent: "-1.4em",
  };

  return (
    <>
      <SEO
        canonical={true}
        description="Find Grouparoo pricing options to power your Reverse ETL pipelines. Open-source or cloud hosted options available."
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        path="/pricing"
        title="Grouparoo Pricing Options"
      />

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
          <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3">
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100" bg="white">
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
                  <Button
                    variant="outline-primary"
                    href="/docs/getting-started"
                  >
                    Try it now
                  </Button>
                  <small> </small>
                </Card.Footer>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card
                className="pricingCard pt-5 pb-4
                 shadow-lg h-100"
                border="primary"
                bg="secondary"
                text="white"
              >
                <Card.Body>
                  <Card.Title>Standard Cloud</Card.Title>
                  <h5>Starting at $150/month</h5>
                  For companies who want to sync up to 100k Records to their
                  destinations.
                  <br />
                  <br />
                  <div style={boxTextStyle}>
                    <b>Features include:</b>
                    <li>Up to 100k Records synced/month</li>
                    <li>Access to all Sources and Destinations</li>
                    <li>
                      A no-code web UI allowing team members to access data
                    </li>
                    <li>Business hours support</li>
                  </div>
                </Card.Body>
                <Card.Footer style={{ borderTop: "none" }}>
                  <Button variant="primary" href="/trial">
                    Start free trial
                  </Button>
                </Card.Footer>
                <small>No credit card required</small>
              </Card>
            </Col>
            <Col className="mb-4 offset-md-3 offset-xl-0">
              <Card
                className="pricingCard py-5 shadow-lg h-100"
                border="primary"
                bg="secondary"
                text="white"
              >
                <Card.Body>
                  <Card.Title>Enterprise Cloud</Card.Title>
                  For enterprises with larger data sets or unique use cases.
                  <br />
                  <br />
                  <div style={boxTextStyle}>
                    <b>Features include:</b>
                    <li> &gt; 100k Records synced/month</li>
                    <li>Business hours support</li>
                    <li>Enhanced support response time SLAs</li>
                  </div>
                </Card.Body>
                <Card.Footer style={{ borderTop: "none" }}>
                  <Button variant="primary" href="/meet">
                    Contact Sales
                  </Button>
                  <small> </small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-3 mx-auto">
        <Row>
          <Col className="">
            <Table className="text-center w-100">
              <thead>
                <tr>
                  <th></th>
                  <th>Community</th>
                  <th>Standard Cloud</th>
                  <th className="d-none d-md-table-cell">Enterprise Cloud</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      textAlign: "left",
                      backgroundColor: "white",
                    }}
                  >
                    <b>Features</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    Real-time data-syncing framework
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Integrations available</td>
                  <td>All</td>
                  <td>All</td>
                  <td className="d-none d-md-table-cell">All</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    Dynamic Group Definitions
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Configurable with Code</td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Configurable in the UI</td>
                  <td> - </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>SaaS Hosted</td>
                  <td>-</td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    Teams, Team Members, and Permissions
                  </td>
                  <td> - </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    Insights and Analytics (coming soon)
                  </td>
                  <td> - </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    Data Governance (coming soon)
                  </td>
                  <td> - </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>

                <tr>
                  <td
                    colSpan={4}
                    style={{
                      textAlign: "left",
                      backgroundColor: "white",
                    }}
                  >
                    <b>Support</b>
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Access to the community</td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Ticket-based Support</td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    Support during Business Hours
                  </td>
                  <td> - </td>
                  <td>
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-blue-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left" }}>Enhanced Support SLAs</td>
                  <td> - </td>
                  <td>add-on</td>
                  <td className="d-none d-md-table-cell">add-on</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <div
        id="frequently-asked-questions"
        style={{
          textAlign: "center",
          backgroundImage: "linear-gradient(#242436,#43435F)",
        }}
        className="text-white homePageSection"
      >
        <Container>
          <Row>
            <Col>
              <h2>Frequently Asked Questions</h2>
              <br />
              <Row style={{ textAlign: "left" }}>
                <Col>
                  <h4>Is the Community edition of Grouparoo really free?</h4>
                  <p>
                    Yes! Our Community edition is open source and free. You will
                    need to be able to host it somewhere such as Heroku or AWS.
                  </p>
                  <h4>
                    What are Records, and how is Pricing based on Record volume?
                  </h4>
                  <p>
                    Records are the primary object type in Grouparoo. In short,
                    Records are people, whether they are leads, contacts, or
                    users in your system. When syncing data from your data
                    warehouse to a business tool like a CRM, most tools are
                    person-based.
                  </p>
                </Col>
                <Col>
                  {" "}
                  <h4>
                    Is there a limit to the number of Sources and Destinations
                    that I can use?
                  </h4>
                  <p>
                    Nope! Whether you're using the Community, Cloud, or
                    Enterprise editions of Grouparoo, you can connect as many
                    Sources and Destinations as you'd like.
                  </p>
                  <h4>Do you have onboarding support?</h4>
                  <p>
                    For customers on the Cloud or Enterprise plans, we provide
                    hands-on support for getting set up with Grouparoo. For
                    folks using the Community edition of Grouparoo, you can join
                    the Grouparoo
                    <a href="docs/community">community</a> and discuss any
                    questions or topics you may have there. We're also active in
                    the community, so we're happy to help!
                  </p>
                </Col>
              </Row>

              <br />
              <br />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      </div>
    </>
  );
}
