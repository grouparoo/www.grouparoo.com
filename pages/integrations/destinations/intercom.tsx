import { Container, Row, Col } from "react-bootstrap";
import Image from "../../../components/Image";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationInstallation from "../../../components/home/integrationInstallation";
import IntegrationSources from "../../../components/home/integrationSources";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function IntercomPage() {
  return (
    <>
      <IntegrationsHead
        name="Intercom"
        primaryType="destination"
        slug="intercom"
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Sync Intercom with all of your tools and customer data</h1>
            <p>
              Grouparoo's Intercom integration allows you to sync all of your
              customer data that lives in various sources into Intercom.
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
              name="Intercom"
              slug="intercom"
              image="intercom.png"
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
        id="Intercom and Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo &amp; Intercom</h2>
              <p>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
                such as Intercom.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from all of your data
                sources and keeps that data synced to Intercom.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Automatically create Contacts in Intercom as new users sign up
                  in your core product
                </li>
                <li>
                  Create new Users and Leads in Intercom, or update existing
                  Users and Leads
                </li>
                <li>Trigger email campaigns based on Contact Lists</li>
                <li>Keep Contact Attribute values up-to-date automatically</li>
                <li>
                  Have better control over how you segment your Users and Leads
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <IntegrationInstallation
        displayName="Intercom"
        packageName="@grouparoo/intercom"
      />

      <Container>
        <Row>
          <Col>
            <h2>An Overview of Intercom's Data Model and API</h2>
            <p>
              Trying to figure out how to integrate your data with Intercom?
              Here’s an overview for how Intercom defines Contacts, Users, and
              Leads.
            </p>
            <p>
              The core object in Intercom is a Contact. A Contact represents an
              individual person who might be a Lead or a User. Leads have one
              required attribute: <code>email</code>. Users on the other hand
              have two required attributes: <code>email</code> and{" "}
              <code>external_id</code>.
            </p>
            <p>
              All of these Leads and Users have additional attributes that you
              can set, like name, role, phone, as well as custom attributes.{" "}
            </p>
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        <Row>
          <Col>
            <h2>How Grouparoo Connects with Intercom</h2>
            <br />
            <IntegrationMappings
              name="Intercom"
              slug="intercom"
              image="intercom.png"
              destinationProfile="Intercom Contacts"
              destinationProperty="Intercom User/Lead Attributes"
              destinationGroup="Intercom Tags"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="align-items-center">
          <Col md={4}>
            <br />
            <h3 className="integrationsBlueH3">
              Define what customer data you want in Intercom
            </h3>
            <p>
              Grouparoo can be configured either in code or in our web UI, so
              non-technical team members can modify what data they send to
              different tools without needing engineering support.
            </p>
          </Col>
          <Col md={8}>
            <Image
              className="productScreenshots border"
              src="/images/home/integrations/intercom/grouparoo-to-intercom.png"
              alt="Intercom destination settings"
              width={1184}
              height={919}
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={4} className="order-1 order-md-2">
            <br />
            <h3 className="integrationsBlueH3">
              Grouparoo keeps your Contacts in Intercom updated in real-time
            </h3>
            <p>
              Run campaigns in Intercom based on the Contacts, Leads, and Users
              that you've synced
            </p>
          </Col>
          <Col md={8} className="order-2 order-md-1">
            <Image
              className="productScreenshots border"
              src="/images/home/integrations/intercom/intercom-list.png"
              alt="List in Intercom"
              width={742}
              height={549}
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Intercom"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Import your customer data from these tools into Intercom</h2>
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
