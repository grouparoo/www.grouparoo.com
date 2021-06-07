import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap";
import Image from "../../components/Image";
import IntegrationCard from "../../components/home/integrationCard";
import SEO from "../../components/seo";
import BigArrow from "../../components/bigArrow";
import ImageInBrowserFrame from "../../components/imageInBrowserFrame";

export default function PostgresToHubspot() {
  return (
    <>
      <SEO
        canonical={true}
        path={`/integrations/postgres-to-hubspot`}
        title="Postgres to Hubspot Integrations"
        description="Connect your Postgres database or warehouse to your Hubspot instance using Grouparoo. Grouparoo keeps your Hubspot data updated as new data gets added or changed in your Postgres warehouse"
        twitterCard={"summary"}
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Connect Postgres with Hubspot</h1>
            <p>
              Grouparoo connects data in your Postgres database to your Hubspot
              instance. Use our prebuilt connectors so you don't have to write
              code yourself. Connect your data in minutes instead of weeks.
            </p>
          </Col>
          <Col lg={3} md={5} sm={5} xs={5} style={{ textAlign: "center" }}>
            <br />
            <IntegrationCard
              name="Postgres"
              slug="postgres"
              image="postgres.svg"
              showLink={false}
            />
          </Col>
          <Col lg={1} md={2} sm={2} xs={2} style={{ textAlign: "center" }}>
            <br />
            <br />
            <br />
            <BigArrow />
          </Col>
          <Col lg={3} md={5} sm={5} xs={5} style={{ textAlign: "center" }}>
            <br />
            <IntegrationCard
              name="Hubspot"
              slug="hubspot"
              image="hubspot.svg"
              showLink={false}
            />
          </Col>
        </Row>
      </Container>
      <div
        id={`Postgres to Hubspot Use Cases`}
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
        id={`Postgres to Hubspot Use Cases`}
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
                  src={`/images/home/integrations/hubspot/hubspot.svg`}
                  alt="hubspot"
                  height={80}
                  width={80}
                />
              </div>
            </Col>
            <Col lg={9} md={9} xs={9}>
              <h2>Use Cases</h2>
              <ul>
                <li>Add Contacts to Hubspot for new Postgres rows</li>
                <li>
                  Enrich Hubspot Contacts with additional user data from your
                  Postgres database
                </li>
                <li>
                  Take product usage data in Postgres and add that data to
                  Contacts in Hubspot
                </li>
                <li>
                  Add Contacts to Hubspot for new or updated Postgres rows
                </li>
                <li>
                  Update existing Fields on Contacts such as email and first
                  name and also create new custom Fields based on data updates
                  in your Postgres database
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
            How Grouparoo connects Postgres and Hubspot
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
                Define what customer data you want in Hubspot
              </h3>
              <p>
                Grouparoo can be configured either in code or in our web UI, so
                non-technical team members can modify what data they send to
                different tools without needing engineering support.
              </p>
            </Col>
            <Col md={8}>
              <ImageInBrowserFrame
                src="/images/home/integrations/hubspot/grouparoo-to-hubspot.png"
                alt="Map data to Hubspot"
                width={742}
                height={506}
              />
            </Col>
          </Row>
          <br />
        </div>
      </Container>
    </>
  );
}
