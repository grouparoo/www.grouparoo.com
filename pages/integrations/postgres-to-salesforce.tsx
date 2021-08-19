import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import Image from "../../components/Image";
import IntegrationCard from "../../components/home/integrationCard";
import SEO from "../../components/seo";
import BigArrow from "../../components/bigArrow";
import ImageInBrowserFrame from "../../components/imageInBrowserFrame";
import Link from "next/link";

export default function PostgresToSalesforce() {
  return (
    <>
      <SEO
        canonical={true}
        path={`/integrations/postgres-to-salesforce`}
        title="Postgres to Salesforce Integrations"
        description="Connect your Postgres database or warehouse to your Salesforce instance using Grouparoo. Grouparoo keeps your Salesforce data updated as new data gets added or changed in your Postgres warehouse"
        twitterCard={"summary"}
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Connect Postgres with Salesforce</h1>
            <p>
              Grouparoo connects data in your Postgres data warehouse to your
              Salesforce instance. Use our prebuilt connectors so you don't have
              to write code yourself. Connect your data in minutes instead of
              weeks.
            </p>
          </Col>
          <Col lg={3} md={5} sm={5} xs={5} style={{ textAlign: "center" }}>
            <br />
            <IntegrationCard slug="postgres" showLink={false} />
          </Col>
          <Col lg={1} md={2} sm={2} xs={2} style={{ textAlign: "center" }}>
            <br />
            <br />
            <br />
            <BigArrow />
          </Col>
          <Col lg={3} md={5} sm={5} xs={5} style={{ textAlign: "center" }}>
            <br />
            <IntegrationCard slug="salesforce" showLink={false} />
          </Col>
        </Row>
      </Container>
      <div
        id={`Postgres to Salesforce Use Cases`}
        style={{ textAlign: "center", paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col>
              <Button
                size="lg"
                variant="primary"
                style={{ padding: ".5rem 1rem" }}
                href="/meet"
                className="ml-auto"
              >
                Get a demo
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <div
        id={`Postgres to Salesforce Use Cases`}
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={2} md={0} xs={0}>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 110,
                  width: 130,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #C4C4C4",
                }}
              >
                <Image
                  src={`/images/home/integrations/postgres/postgres.svg`}
                  alt="postgres"
                  height={80}
                  width={80}
                />
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: 5,
                  marginTop: 10,
                  marginBottom: 10,
                  height: 110,
                  width: 130,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #C4C4C4",
                }}
              >
                <Image
                  src={`/images/home/integrations/salesforce/salesforce.png`}
                  alt="salesforce"
                  height={80}
                  width={80}
                />
              </div>
            </Col>
            <Col lg={9} md={9} xs={9}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Add Leads and Contacts to Salesforce for new Postgres rows
                </li>
                <li>
                  Enrich Salesforce Contacts with additional user data from your
                  Postgres data
                </li>
                <li>
                  Take product usage data in Postgres and that data to Contacts
                  and Leads in Salesforce
                </li>
                <li>
                  Add Leads and Contacts to Salesforce for new or updated
                  Postgres rows
                </li>
                <li>
                  Update all profileObjects including Contacts, Leads, and
                  Individuals in Salesforce automatically{" "}
                </li>
                <li>
                  Update existing Fields on people objects such as email and
                  first name and also create new custom Fields based on data
                  updates in your Postgres db
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <Container>
        <div id="how-it-works" className="integrationsPageSection">
          <h2 style={{ textAlign: "center" }}>
            How Grouparoo connects Postgres and Salesforce
          </h2>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <br />
              <h3 className="integrationsBlueH3">
                Easily connect to your Postgres data
              </h3>
              <p>
                Connect Grouparoo to any number of Postgres databases you may
                have running.
              </p>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/integrations/postgres/add-postgres-app.png"
                alt="Grouparoo Postgres settings"
                width={742}
                height={506}
              />
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/integrations/postgres/postgres-table-mode.png"
                alt="Grouparoo table source settings"
                width={742}
                height={614}
              />
            </Col>
            <Col md={4}>
              <br />
              <h3 className="integrationsBlueH3">
                Define the customer data you want to pull from Postgres
              </h3>
              <p>
                Connect Grouparoo to any number of Postgres databases you may
                have running.
              </p>
            </Col>
          </Row>
          <br />
          <Row className="align-items-center">
            <Col md={4}>
              <br />
              <h3 className="integrationsBlueH3">
                Define what customer data you want in Salesforce
              </h3>
              <p>
                Grouparoo can be configured either in code or in our web UI, so
                non-technical team members can modify what data they send to
                different tools without needing engineering support.
              </p>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/integrations/salesforce/grouparoo-to-salesforce.png"
                alt="Map data to Salesforce"
                width={742}
                height={487}
              />
            </Col>
          </Row>
          <br />
        </div>
      </Container>
      <div
        id="synchronize"
        style={{
          textAlign: "center",
          backgroundImage: "linear-gradient(#242436,#43435F)",
        }}
        className="text-white homePageSection"
      >
        <Container>
          <Row>
            <Col>
              <h2>Reverse ETL makes your data warehouse actionable</h2>

              <p>
                Grouparoo connects your customer data to all the places where it
                can make a difference. Use your data warehouse to power
                marketing campaigns, customer service, and everything else your
                business needs to succeed.
              </p>
              <small>
                <Link href="/solutions/reverse-etl">
                  <a>Learn more about reverse ETL</a>
                </Link>
              </small>

              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <div
        id="about-postgres-and-salesforce"
        className="integrationsPageSection"
      >
        <Container>
          <Row>
            <Col>
              <h2>About PostgreSQL</h2>
              <p>
                PostgreSQL (or Postgres for short) is a powerful, open source
                object-relational database. Postgres is one of the most popular
                database types in modern application development, and it's also
                the foundation for Amazon's Redshift data warehouse product.{" "}
              </p>
              <small>
                <Link href="/integrations/sources/postgres">
                  <a>Learn more about Grouparoo's Postgres integration</a>
                </Link>
              </small>
            </Col>
            <Col>
              <h2>About Salesforce</h2>
              <p>
                Salesforce is a leader in the SaaS-based CRM space. They have an
                extensive product suite that encompasses marketing, sales,
                support, and many other functions. Salesforce allows companies
                and organizations to manage the customer experience and journey
                across many different channels.
              </p>
              <small>
                <Link href="/integrations/destinations/salesforce">
                  <a>
                    Learn more about Grouparoo's Salesforce data integration
                  </a>
                </Link>
              </small>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      </div>
    </>
  );
}
