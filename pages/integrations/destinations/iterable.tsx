import { Container, Row, Col } from "react-bootstrap";
import Image from "../../../components/Image";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationInstallation from "../../../components/home/integrationInstallation";
import IntegrationSources from "../../../components/home/integrationSources";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function IterablePage() {
  return (
    <>
      <IntegrationsHead
        name="Iterable"
        primaryType="destination"
        slug="iterable"
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Sync Iterable with all of your tools and customer data</h1>
            <p>
              Grouparoo's Iterable integration allows you to sync all of your
              customer data that lives in various sources into Iterable.
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
              name="Iterable"
              slug="iterable"
              image="iterable.png"
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
        id="Iterable and Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo &amp; Iterable</h2>
              <p>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
                such as Iterable.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from all of your data
                sources and keeps that data synced to Iterable.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Automatically create Users in Iterable as new users sign up in
                  your core product
                </li>
                <li>Automatically update Audiences</li>
                <li>Keep User Fields up-to-date automatically</li>
                <li>Have better control over how you segment your Users</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <IntegrationInstallation
        displayName="Iterable"
        packageName="@grouparoo/iterable"
      />

      <Container>
        <Row>
          <Col>
            <h2>An Overview of Iterable's Data Model and API</h2>
            <p>
              Trying to figure out how to integrate your data with Iterable?
              Here’s an overview for how Iterable defines Users and Audiences
            </p>
            <p>
              The core object in Iterable is a User. A User represents an
              individual person. Users have one required user field:{" "}
              <code>email</code>.
            </p>
            <p>
              All of these Users have additional user fields that you can set,
              like name, role, phone, as well as custom fields.{" "}
            </p>
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        <Row>
          <Col>
            <h2>How Grouparoo Connects with Iterable</h2>
            <br />
            <IntegrationMappings
              name="Iterable"
              slug="iterable"
              image="iterable.png"
              destinationProfile="Iterable Users"
              destinationProperty="Iterable User Fields"
              destinationGroup="Iterable Audiences"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="align-items-center">
          <Col md={4}>
            <br />
            <h3 className="integrationsBlueH3">
              Define what customer data you want in Iterable
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
              src="/images/home/integrations/iterable/grouparoo-to-iterable.png"
              alt="Iterable destination settings"
              width={1184}
              height={879}
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={4} className="order-1 order-md-2">
            <br />
            <h3 className="integrationsBlueH3">
              Grouparoo keeps your Users in Iterable updated in real-time
            </h3>
            <p>
              Run campaigns in Iterable based on the Users and Audiences that
              you've synced
            </p>
          </Col>
          <Col md={8} className="order-2 order-md-1">
            <Image
              className="productScreenshots border"
              src="/images/home/integrations/iterable/iterable-audience.png"
              alt="Audience in Iterable"
              width={1184}
              height={879}
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Iterable"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Import your customer data from these tools into Iterable</h2>
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
