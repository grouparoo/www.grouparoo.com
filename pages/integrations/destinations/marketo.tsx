import { Container, Row, Col } from "react-bootstrap";
import Image from "../../../components/Image";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationInstallation from "../../../components/home/integrationInstallation";
import IntegrationSources from "../../../components/home/integrationSources";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function MarketoPage() {
  return (
    <>
      <IntegrationsHead
        name="Marketo"
        primaryType="destination"
        slug="marketo"
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Sync Marketo with all of your tools and customer data</h1>
            <p>
              Grouparoo's Marketo integration allows you to sync all of your
              customer data that lives in various sources into Marketo.
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
              name="Marketo"
              slug="marketo"
              image="marketo.png"
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
        id="Marketo and Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo &amp; Marketo</h2>
              <p>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
                such as Marketo.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from all of your data
                sources and keeps that data synced to Marketo.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Automatically create Lead (also known as People or Person)
                  objects in Marketo as new users sign up in your core product
                </li>
                <li>
                  Update existing Fields on a Lead such as email and first name
                  and also create new custom Fields without needing engineering
                  help
                </li>
                <li>
                  Automatically create Lists or add Leads to Lists in Marketo
                </li>
                <li>
                  Trigger automated emails based on Lists through the Lifecycle
                  Optimizer
                </li>
                <li>Keep Lead Fields up-to-date automatically</li>
                <li>Have better control over how you segment your Users</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <IntegrationInstallation
        displayName="Marketo"
        packageName="@grouparoo/marketo"
      />

      <Container>
        <Row>
          <Col>
            <h2>An Overview of Marketo's Data Model and API</h2>
            <p>
              Trying to figure out how to integrate your data with Marketo?
              Here’s an overview for how Marketo defines customer objects.
            </p>
            <p>
              The core object in Marketo is a Lead. A Lead represents an
              individual person who might be a lead or a customer. Leads have
              one required field, which is their email address.
            </p>
            <p>
              Marketo calls attributes of a Lead a Field. The one required Field
              in Marketo is <code>email</code>.
            </p>
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        <Row>
          <Col>
            <h2>How Grouparoo Connects with Marketo</h2>
            <br />
            <IntegrationMappings
              name="Marketo"
              slug="marketo"
              image="marketo.png"
              destinationProfile="Marketo Leads"
              destinationProperty="Marketo Lead Fields"
              destinationGroup="Marketo Lists"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="align-items-center">
          <Col md={4}>
            <br />
            <h3 className="integrationsBlueH3">
              Define what customer data you want in Marketo
            </h3>
            <p>
              Grouparoo is low-code, so non-technical team members can modify
              what data they send to different tools without needing engineering
              support.
            </p>
          </Col>
          <Col md={8}>
            <Image
              className="productScreenshots border"
              src="/images/home/integrations/marketo/grouparoo-to-marketo.png"
              alt="Map data to Marketo"
              width={742}
              height={506}
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={4} className="order-1 order-md-2">
            <br />
            <h3 className="integrationsBlueH3">
              Grouparoo keeps your contact and customer data in Marketo updated
              in real-time
            </h3>
            <p>
              Run automated lifecycle campaigns in Marketo based on the Users
              and Lists that you've mapped from Grouparoo.
            </p>
          </Col>
          <Col md={8} className="order-2 order-md-1">
            <Image
              className="productScreenshots border"
              src="/images/home/integrations/marketo/marketo-list.png"
              alt="List in Marketo"
              width={742}
              height={506}
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Marketo"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Import your customer data from these tools into Marketo</h2>
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
