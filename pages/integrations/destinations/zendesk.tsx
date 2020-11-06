import { Container, Row, Col } from "react-bootstrap";
import Image from "../../../components/Image";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationSources from "../../../components/home/integrationSources";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function ZendeskPage() {
  return (
    <>
      <IntegrationsHead
        name="Zendesk"
        primaryType="destination"
        slug="zendesk"
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Sync Zendesk with all of your tools and customer data</h1>
            <p>
              Grouparoo's Zendesk integration allows you to sync all of your
              customer data that lives in various sources into Zendesk.
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
              name="Zendesk"
              slug="zendesk"
              image="zendesk.svg"
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
        id="Zendesk and Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo &amp; Zendesk</h2>
              <p>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
                such as Zendesk.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from all of your data
                sources and keeps that data synced to Zendesk.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Automatically create Users in Zendesk as new users sign up in
                  your core product
                </li>
                <li>
                  Create dynamic Tags or User Fields in Zendesk without needing
                  engineering help
                </li>
                <li>
                  Automatically create Lists or add Users to Lists in Zendesk
                </li>
                <li>
                  Route Users to different queues automatically based on their
                  Tags and User Fields
                </li>
                <li>Keep Tags and User Fields up-to-date automatically</li>
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
            <h2>An Overview of Zendesk's Data Model and API</h2>
            <p>
              Trying to figure out how to integrate your data with Zendesk?
              Here’s an overview for how Zendesk defines customer objects.
            </p>
            <p>
              The core object in Zendesk is a User. A User represents an
              individual person who might contact you or be a customer. Users
              have two required User Fields: <code>external_id</code> and{" "}
              <code>name</code>. The <code>external_id</code> can be something
              like your unique user ID, and name can be the person's name.
            </p>
            <p>
              To add details on a User, you can add and update User Fields.
              Zendesk also has a concept of Tags. Users can have any number of
              Tags, and you can create automated workflows and triggers based on
              these Tags.
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
            <h2>How Grouparoo Connects with Zendesk</h2>
            <br />
            <IntegrationMappings
              name="Zendesk"
              slug="zendesk"
              image="zendesk.svg"
              destinationProfile="Zendesk Users"
              destinationProperty="Zendesk User Fields"
              destinationGroup="Zendesk Tags"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Define what customer data you want in Zendesk
            </h3>
            <p>
              Grouparoo is low-code, so non-technical team members can modify
              what data they send to different tools without needing engineering
              support.
            </p>
          </Col>
          <Col md={9}>
            <Image
              unsized
              className="productScreenshots"
              src="/images/home/integrations/zendesk/grouparoo-to-zendesk.png"
              alt="Zendesk destination settings"
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Grouparoo keeps your contact and customer data in Zendesk updated
              in real-time
            </h3>
            <p>Keep customer data accurate and up-to-date in Zendesk</p>
          </Col>
          <Col md={9}>
            <Image
              unsized
              className="productScreenshots"
              src="/images/home/integrations/zendesk/zendesk-users.png"
              alt="Users in Zendesk"
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Zendesk"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Import your customer data from these tools into Zendesk</h2>
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
