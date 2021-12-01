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
import styles from "./pricing.module.scss";

export default function PricingPage() {
  return (
    <>
      <SEO
        canonical={true}
        description="Find Grouparoo pricing options to power your Reverse ETL pipelines. Open-source or cloud hosted options available."
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        path="/pricing"
        title="Grouparoo Pricing Options"
      />

      <div id="headline" className="text-center py-5">
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
      <div id="pricingPlans" className="text-center">
        <Container>
          <Row className="mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex align-items-stretch">
            <Col className="mb-4 mx-auto d-flex align-items-stretch">
              <Card
                className="p-3 col-12 mx-auto shadow-lg h-100 text-start"
                bg="white"
                style={{ minHeight: "468px" }}
              >
                <Card.Body className="d-flex align-items-start flex-column">
                  <div className="h3">Community Edition</div>
                  Grouparoo is open source and free to run in on your own cloud.
                  <br />
                  <br />
                  <div className={styles.pricingList}>
                    <b>Features include:</b>
                    <li>Realtime syncing infrastructure</li>
                    <li>Access to all Sources and Destinations </li>
                    <li>Configurable with code and our CLI</li>
                    <li>Dynamic Group definition</li>
                    <li>Ticket-based support</li>
                    <li>
                      Enterprise UI add-on available (
                      <Link href="/meet">contact sales</Link>)
                    </li>
                  </div>
                  <Button
                    variant="outline-dark"
                    className="w-100 mx-auto mt-auto"
                    href="/docs/getting-started"
                  >
                    Try it now
                  </Button>
                  <small> </small>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card
                className="mx-auto col-12 p-3
                 shadow-lg h-100 text-start"
                bg="info"
                style={{ minHeight: "468px" }}
              >
                <Card.Body className="d-flex align-items-start flex-column">
                  <div className="h3">Standard Cloud</div>
                  <h5>Starting at $150/month</h5>
                  For companies wanting to sync up to 1MM Records to their
                  destinations.
                  <br />
                  <br />
                  <div className={styles.pricingList}>
                    <b>Features include:</b>
                    <li>Up to 1MM Records synced/month</li>
                    <li>Tiered pricing based on monthly usage</li>
                    <li> Access to all Sources and Destinations</li>
                    <li>
                      {" "}
                      A no-code web UI allowing team members to access data
                    </li>
                    <li> Business hours support</li>
                  </div>
                </Card.Body>
                <Button
                  variant="primary"
                  className="w-100 mx-auto"
                  href="/trial"
                >
                  Start free trial
                </Button>
                <small className="text-center pt-1">
                  No credit card required
                </small>
              </Card>
            </Col>

            <Col className="mb-4 mx-auto ">
              <Card
                className="mx-auto col-12 p-3
                 shadow-lg h-100 text-start"
                bg="info"
                style={{ minHeight: "468px" }}
              >
                <Card.Body className="d-flex align-items-start flex-column">
                  <div className="h3">Enterprise Cloud</div>
                  For enterprises with larger data sets or unique use cases.
                  <br />
                  <br />
                  <div className={styles.pricingList}>
                    <b>Features include:</b>
                    <li> &gt; 1MM synced Records/month</li>
                    <li> Business hours support</li>
                    <li> Enhanced support response time SLAs</li>
                  </div>
                  <Button
                    variant="primary"
                    className="w-100 mx-auto mt-auto"
                    href="/meet"
                  >
                    Contact Sales
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mt-3 mx-auto">
        <Row>
          <Col className="">
            <Table className="text-center bg-white w-100">
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
                  <td colSpan={4} className="text-start h5">
                    FEATURES
                  </td>
                </tr>
                <tr>
                  <td className="text-start">
                    Real-time data-syncing framework
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Integrations available</td>
                  <td>All</td>
                  <td>All</td>
                  <td className="d-none d-md-table-cell">All</td>
                </tr>
                <tr>
                  <td className="text-start">Dynamic Group Definitions</td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Configurable with Code</td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Configurable in the UI</td>
                  <td>License Available</td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">SaaS Hosted</td>
                  <td>-</td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">
                    Teams, Team Members, and Permissions
                  </td>
                  <td> - </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">
                    Insights and Analytics (coming soon)
                  </td>
                  <td> - </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Data Governance (coming soon)</td>
                  <td> - </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className="text-start h5">
                    SUPPORT
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Access to the community</td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Ticket-based Support</td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Support during Business Hours</td>
                  <td> - </td>
                  <td>
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="d-none d-md-table-cell">
                    <Image
                      src="/images/grouparoo-purple-checkmark.svg"
                      alt="Grouparoo blue checkmark"
                      width={24}
                      height={24}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="text-start">Enhanced Support SLAs</td>
                  <td> - </td>
                  <td>add-on</td>
                  <td className="d-none d-md-table-cell">add-on</td>
                </tr>
                <tr>
                  <td colSpan={4} className="text-start h5">
                    PRICING / USAGE
                  </td>
                </tr>
                <tr className="align-middle">
                  <td className="text-start">Monthly usage/price</td>
                  <td>
                    Free
                    <br />
                    <br />
                    Enterprise UI: $100/mo
                  </td>
                  <td>
                    <table className="table mb-0">
                      <tbody>
                        <tr className="w-100 mx-auto">
                          <td className="border-bottom-1 border-bottom-light">
                            100K synced Records: $150/mo
                          </td>
                        </tr>
                        <tr className="w-100 mx-auto">
                          <td className="border-bottom-1 border-bottom-light">
                            300K synced Records: $300/mo
                          </td>
                        </tr>
                        <tr className="w-100 mx-auto">
                          <td className="border-bottom-0">
                            1MM synced Records: $600/mo
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    &gt; 1MM synced Records:
                    <br />
                    <Link href="/meet">Contact sales</Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <div id="frequently-asked-questions" className="">
        <Container>
          <Row>
            <Col>
              <h2>Frequently Asked Questions</h2>
              <br />
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
                Records are people, whether they are leads, contacts, or users
                in your system. When syncing data from your data warehouse to a
                business tool like a CRM, most tools are person-based.
              </p>
              <p>
                Pricing is based on monthly synced Records. Each Record that you
                send to a Destination is a single synced Record, regardless of
                how many destinations it goes to. You can monitor your monthly
                usage at anytime from your Grouparoo dashboard.
              </p>
              <h4>
                Is there a limit to the number of Sources and Destinations that
                I can use?
              </h4>
              <p>
                Nope! Whether you're using the Community, Cloud, or Enterprise
                editions of Grouparoo, you can connect as many Sources and
                Destinations as you'd like.
              </p>
              <h4>Do you have onboarding support?</h4>
              <p>
                For customers on the Cloud or Enterprise plans, we provide
                hands-on support for getting set up with Grouparoo. For folks
                using the Community edition of Grouparoo, you can join the
                Grouparoo <a href="docs/community">community</a> and discuss any
                questions or topics you may have there. We're also active in the
                community, so we're happy to help!
              </p>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
      </div>
    </>
  );
}
