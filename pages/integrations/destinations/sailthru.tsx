import { Container, Row, Col, Image } from "react-bootstrap";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationSources from "../../../components/home/integrationSources";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function SailthruPage() {
  return (
    <>
      <IntegrationsHead
        name="Sailthru"
        primaryType="destination"
        slug="sailthru"
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Sync Sailthru with all of your tools and customer data</h1>
            <p>
              Grouparoo's Sailthru integration allows you to sync all of your
              customer data that lives in various sources into Sailthru.
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
              name="Sailthru"
              slug="sailthru"
              image="sailthru.png"
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
        id="Sailthru and Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo & Sailthru</h2>
              <p>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
                such as Sailthru.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from all of your data
                sources and keeps that data synced to Sailthru.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Automatically create Users or User objects in Sailthru as new
                  users sign up in your core product
                </li>
                <li>
                  Send new User Vars to Sailthru without needing engineering
                  help
                </li>
                <li>
                  Automatically create Lists or add Users to Lists in Sailthru
                </li>
                <li>
                  Trigger automated emails based on User Lists through the
                  Lifecycle Optimizer
                </li>
                <li>Keep User Vars up-to-date automatically</li>
                <li>Have better control over how you segment your Users</li>
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
            <h2>An Overview of Sailthru's Data Model and API</h2>
            <p>
              Trying to figure out how to integrate your data with Sailthru?
              Here’s an overview for how Sailthru defines customer objects.
            </p>
            <p>
              The core object in Sailthru is a User. A User represents an
              individual person who might be a lead or a customer. Users have
              one required variable, which is their email address.
            </p>
            <p>
              Sailthru calls attributes of a User a User Var or User Variable.
              The two default User Vars in Sailthru are <code>email</code> and{" "}
              <code>extId</code>, which stands for external ID. We recommend
              passing through an identifying value from your system like a user
              ID to this User Var. You can also create more User Vars based on
              the Grouparoo Profile Properties that you define.
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
            <h2>How Grouparoo Connects with Sailthru</h2>
            <br />
            <IntegrationMappings
              name="Sailthru"
              slug="sailthru"
              image="sailthru.png"
              destinationProfile="Sailthru Users"
              destinationProperty="Sailthru User Vars"
              destinationGroup="Sailthru Lists"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Define what customer data you want in Sailthru
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
              src={require("../../../public/images/home/integrations/sailthru/grouparoo-to-sailthru.png")}
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Grouparoo keeps your contact and customer data in Sailthru updated
              in real-time
            </h3>
            <p>
              Run automated lifecycle campaigns in Sailthru based on the Users
              and Lists that you've mapped from Grouparoo.
            </p>
          </Col>
          <Col md={9}>
            <Image
              className="productScreenshots"
              src={require("../../../public/images/home/integrations/sailthru/sailthru-list.png")}
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Sailthru"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Import your customer data from these tools into Sailthru</h2>
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
