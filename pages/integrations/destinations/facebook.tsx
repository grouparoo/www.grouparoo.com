import { Container, Row, Col } from "react-bootstrap";
import Image from "../../../components/Image";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationInstallation from "../../../components/home/integrationInstallation";
import IntegrationSources from "../../../components/home/integrationSources";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function FacebookPage() {
  return (
    <>
      <IntegrationsHead
        name="Facebook"
        primaryType="destination"
        slug="facebook"
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>
              Sync Facebook Custom Audiences with all of your tools and customer
              data
            </h1>
            <p>
              Grouparoo's Facebook Audiences integration allows you to sync all
              of your customer data that lives in various sources into Facebook.
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
              name="Facebook"
              slug="facebook"
              image="facebook.png"
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
        id="Facebook and Grouparoo Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo &amp; Facebook</h2>
              <p>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
                such as Facebook Audiences.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from all of your data
                sources and keeps that data synced to Facebook Audiences.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Automatically create Contacts in Facebook Audiences as new
                  users sign up in your core product
                </li>
                <li>
                  Send new Contact Properties to Facebook without needing
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
      <IntegrationInstallation
        displayName="Facebook"
        packageName="@grouparoo/facebook"
      />

      <Container>
        <Row>
          <Col>
            <h2>An Overview of Facebook's Audience Data Model and API</h2>
            <p>
              Trying to figure out how to integrate your data with Facebook?
              Here’s an overview for how Facebook defines users and audiences.
            </p>
            <p>
              The core object in Facebook is a User. A User represents an
              individual person who might be a lead or a customer. Contacts have
              one required attribute, which is their email address.
            </p>
            <p>
              On every User are various keys and values such as{" "}
              <code>EMAIL</code>, <code>FN</code> (first name), <code>LN</code>{" "}
              (last name) pre-defines a number of Contact Properties like , and
              others.
            </p>
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        <Row>
          <Col>
            <h2>How Grouparoo Connects with Facebook</h2>
            <br />
            <IntegrationMappings
              name="Facebook"
              slug="facebook"
              image="facebook.png"
              destinationProfile="Facebook Users"
              destinationProperty="Facebook User Keys"
              destinationGroup="Facebook Custom Audiences"
            />
          </Col>
        </Row>
        <br />
        <br />
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Facebook"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Import your customer data from these tools into Facebook</h2>
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
