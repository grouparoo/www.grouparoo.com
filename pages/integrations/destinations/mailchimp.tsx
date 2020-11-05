import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationSources from "../../../components/home/integrationSources";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function MailchimpPage() {
  return (
    <>
      <IntegrationsHead
        name="Mailchimp"
        primaryType="destination"
        slug="mailchimp"
      />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>Sync Mailchimp with all of your tools and customer data</h1>
            <p>
              Grouparoo's Mailchimp integration allows you to sync all of your
              customer data that lives in various sources into Mailchimp.
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
              name="Mailchimp"
              slug="mailchimp"
              image="mailchimp.svg"
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
        id="Mailchimp and Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo &amp; Mailchimp</h2>
              <p>
                Grouparoo is open source data infrastructure to keep customer
                data in-sync between your data warehouse and 3rd party tools
                such as Mailchimp.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from all of your data
                sources and keeps that data synced to Mailchimp.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Automatically create Customers as new users sign up in your
                  core product
                </li>
                <li>
                  Create new Merge Fields in Mailchimp without needing
                  engineering help
                </li>
                <li>Trigger email campaigns based on dynamic Audiences</li>
                <li>Keep Merge Field values up-to-date automatically</li>
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
            <h2>An Overview of Mailchimp’s Data Model and API</h2>
            <p>
              Trying to figure out how to integrate with Mailchimp? Here’s an
              overview for how Mailchimp defines customers.
            </p>
            <p>
              The core object in Mailchimp is a Contact (also known as a
              Member). A Contact represents an individual person that lives on a
              List or Audience. Contacts have one required attribute, which is
              their email address.
            </p>
            <p>
              Mailchimp calls attributes of a Contact a Merge Field (formerly a
              Merge Var). MailChimp pre-defines a number of Merge Fields like{" "}
              <code>FNAME</code> (first name) and <code>LNAME</code> (last name)
              for example, but you can define as many Merge Fields as you'd like
              using Grouparoo or in the Mailchimp website.
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
            <h2>How Grouparoo Connects with Mailchimp</h2>
            <br />
            <IntegrationMappings
              name="Mailchimp"
              slug="mailchimp"
              image="mailchimp.svg"
              destinationProfile="Mailchimp Contacts"
              destinationProperty="Mailchimp Merge Vars"
              destinationGroup="Mailchimp Tags"
            />
          </Col>
        </Row>
        <br />
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Define what customer data you want in Mailchimp
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
              src={require("../../../public/images/home/integrations/mailchimp/grouparoo-to-mailchimp.png")}
              alt="Map data to Mailchimp"
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Grouparoo keeps your customer data in Mailchimp updated in
              real-time
            </h3>
            <p>
              Run campaigns in Mailchimp based on the Merge Fields and Tags that
              you've mapped from Grouparoo.
            </p>
          </Col>
          <Col md={9}>
            <Image
              className="productScreenshots"
              src={require("../../../public/images/home/integrations/mailchimp/mailchimp-audience.png")}
              alt="Mailchimp audience populated"
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Mailchimp"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Import your customer data from these tools into Mailchimp</h2>
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
