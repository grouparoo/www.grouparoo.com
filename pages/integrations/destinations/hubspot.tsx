import { Container, Row, Col } from "react-bootstrap";
import Image from "../../../components/Image";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationSources from "../../../components/home/integrationSources";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function HubspotPage() {
  return (
    <>
      <IntegrationsHead
        name="Hubspot"
        primaryType="destination"
        slug="hubspot"
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Sync Hubspot with all of your tools and customer data</h1>
            <p>
              Grouparoo's Hubspot integration allows you to sync all of your
              customer data that lives in various sources into Hubspot.
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
              name="Hubspot"
              slug="hubspot"
              image="hubspot.svg"
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
        id="Hubspot and Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo &amp; Hubspot</h2>
              <p>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
                such as Hubspot.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from all of your data
                sources and keeps that data synced to Hubspot.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Automatically create Contacts in Hubspot as new users sign up
                  in your core product
                </li>
                <li>
                  Send new Contact Properties to Hubspot without needing
                  engineering help
                </li>
                <li>Trigger email campaigns based on Contact Lists</li>
                <li>Keep Contact Property values up-to-date automatically</li>
                <li>
                  Have better control over how you segment your leads and
                  contacts
                </li>
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
            <h2>An Overview of Hubspot's Data Model and API</h2>
            <p>
              Trying to figure out how to integrate your data with Hubspot?
              Here’s an overview for how Hubspot defines customers and leads.
            </p>
            <p>
              The core object in Hubspot is a Contact. A Contact represents an
              individual person who might be a lead or a customer. Contacts have
              one required attribute, which is their email address.
            </p>
            <p>
              Hubspot calls attributes of a Contact a Contact Property. Hubspot
              pre-defines a number of Contact Properties like{" "}
              <code>firstname</code> and <code>lastname</code> for example, but
              you can create new Contact Properties as you'd like using
              Grouparoo or in the Hubspot website.
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
            <h2>How Grouparoo Connects with Hubspot</h2>
            <br />
            <IntegrationMappings
              name="Hubspot"
              slug="hubspot"
              image="hubspot.svg"
              destinationProfile="Hubspot Contacts"
              destinationProperty="Hubspot Contact Properties"
              destinationGroup="Hubspot Contact Lists"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Define what customer data you want in Hubspot
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
              src={require("../../../public/images/home/integrations/hubspot/grouparoo-to-hubspot.png")}
              alt="Hubspot destination settings"
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Grouparoo keeps your contact and customer data in Hubspot updated
              in real-time
            </h3>
            <p>
              Run campaigns in Hubspot based on the Contacts and Contact
              Properties that you've mapped from Grouparoo.
            </p>
          </Col>
          <Col md={9}>
            <Image
              className="productScreenshots"
              src={require("../../../public/images/home/integrations/hubspot/hubspot-list.png")}
              alt="List in Hubspot"
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Hubspot"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Import your customer data from these tools into Hubspot</h2>
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
