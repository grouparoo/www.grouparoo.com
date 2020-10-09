import { Container, Row, Col, Button } from "react-bootstrap";
import IntegrationCard from "./integrationCard";
import Link from "next/link";

export default function IntegrationsSection() {
  return (
    <div
      id="integrations"
      className="homePageSection"
      style={{ textAlign: "center" }}
    >
      <Container>
        <Row>
          <Col>
            <h2>Integrations with all of your tools</h2>
            <br />
          </Col>
        </Row>

        <Row>
          <Col lg={4} md={4} sm={6} xs={6}>
            <IntegrationCard
              name="Mailchimp"
              slug="mailchimp"
              image="mailchimp.svg"
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <IntegrationCard
              name="Postgres"
              slug="postgres"
              image="postgres.svg"
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <IntegrationCard
              name="BigQuery"
              slug="bigquery"
              image="bigquery.png"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={6} xs={6}>
            <IntegrationCard name="MySQL" slug="mysql" image="mysql.png" />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <IntegrationCard
              name="Salesforce"
              slug="salesforce"
              image="salesforce.jpg"
              showLink={false}
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <IntegrationCard
              name="Hubspot"
              slug="hubspot"
              image="hubspot.svg"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={4} sm={6} xs={6}>
            <IntegrationCard
              name="Redshift"
              slug="redshift"
              image="redshift.svg"
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <IntegrationCard
              name="Zendesk"
              slug="zendesk"
              image="zendesk.svg"
            />
          </Col>
          <Col lg={4} md={4} sm={6} xs={6}>
            <IntegrationCard
              name="Marketo"
              slug="marketo"
              image="marketo.png"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <br />
            <br />
            <Button
              variant="outline-primary"
              href="/integrations"
              className="integrations-button"
            >
              See all of our available integrations
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
