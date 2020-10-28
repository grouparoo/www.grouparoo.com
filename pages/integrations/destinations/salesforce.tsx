import { Container, Row, Col, Image } from "react-bootstrap";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationSources from "../../../components/home/integrationSources";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function SalesforcePage() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Sync Salesforce with all of your tools and customer data</h1>
            <p>
              Grouparoo's Salesforce integration allows you to sync all of your
              customer data that lives in various sources into Salesforce.
            </p>
          </Col>
          <Col lg={3} md={5} sm={5} xs={5} style={{ textAlign: "center" }}>
            <br />
            <IntegrationCard
              name="Grouparoo"
              slug="grouparoo"
              image="grouparoo.png"
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
              name="Salesforce"
              slug="salesforce"
              image="salesforce.jpg"
              showLink={false}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col />
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={6}
            style={{ textAlign: "center" }}
          ></Col>
          <Col />
        </Row>
        <br />
      </Container>
      <div
        id="Salesforce Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo & Salesforce</h2>
              <p>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
                such as Salesforce.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from all of your data
                sources and keeps that data synced to Salesforce.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Create and update any profileObject in Salesforce such as Contacts, Leads, or Individuals as new users sign up in your core product
                </li>
                <li>
                  Update existing Fields on people objects such as email and first name
                  and also create new custom Fields without needing engineering
                  help
                </li>
                <li>
                  Automatically create Campaigns or add people to Campaigns in Salesforce
                </li>
                <li>Keep Lead Fields up-to-date automatically</li>
                <li>Have better control over how you segment your Leads and Contacts</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <h2>An Overview of Salesforce's Data Model and API</h2>
            <p>
              Trying to figure out how to integrate your data with Salesforce?
              Here’s an overview for how Salesforce defines customer objects.
            </p>
            <p>At its core, Salesforce is a database, and a very flexible one at that. While most of the objects we name here are the primary default ways to use Salesforce, you can map Grouparoo profiles to just about any kind of object in Salesforce.</p>
            <p>
              Salesforce has a few primary objects: Leads, Contacts, and Individuals. Each of those three previous objects represents an
              individual person who might be a lead or a customer. These objects all have three required fields: Email and LastName
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
        </Row>
        <br />
      </Container>

      <Container>
        <Row>
          <Col>
            <h2>How Grouparoo Connects with Salesforce</h2>
            <br />
            <IntegrationMappings
              name="Salesforce"
              slug="salesforce"
              image="salesforce.jpg"
              destinationProfile="Salesforce Lead/Contact"
              destinationProperty="Salesforce Lead/Contact Fields"
              destinationGroup="Salesforce Campaigns"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Define what customer data you want in Salesforce
            </h3>
            <p>
              Grouparoo is low-code, so non-technical team members can modify
              what data they send to different tools without needing engineering
              support.
            </p>
          </Col>
          <Col md={9}>
            <Image
              className="productScreenshots"
              src={require("../../../public/images/home/integrations/salesforce/grouparoo-to-salesforce.png")}
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Grouparoo keeps your contact and lead data in Salesforce updated
              in real-time
            </h3>
            <p>
              Empower your sales team to make the right actions now that all of your lead and contact information is up-to-date in Salesforce
            </p>
          </Col>
          <Col md={9}>
            <Image
              className="productScreenshots"
              src={require("../../../public/images/home/integrations/salesforce/salesforce-campaign.png")}
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Salesforce"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Import your customer data from these tools into Salesforce</h2>
              <br />
              <IntegrationSources />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <GetStarted showLearnMore={false} />
      </Container>
    </>
  );
}
