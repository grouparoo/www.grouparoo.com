import { Container, Row, Col } from "react-bootstrap";
import IntegrationCard from "./integrationCard";
import Link from "next/link";

export default function Integrations() {
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
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="Mailchimp"
              slug="mailchimp"
              type="destination"
              image="mailchimp.svg"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="Sailthru"
              slug="sailthru"
              type="destination"
              image="sailthru.png"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="Postgres"
              slug="postgres"
              type="source"
              image="postgres.svg"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="BigQuery"
              slug="bigquery"
              type="source"
              image="bigquery.png"
            />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="MySQL"
              slug="mysql"
              type="source"
              image="mysql.png"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="CSV"
              slug="csv"
              type="source"
              image="csv.svg"
              showLink={false}
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="Hubspot"
              slug="hubspot"
              type="destination"
              image="hubspot.svg"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="Google Sheets"
              slug="google-sheets"
              type="source"
              image="google-sheets.png"
              showLink={false}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={1} md={1} sm={0} xs={0} />
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="Redshift"
              slug="redshift"
              type="source"
              image="redshift.svg"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="Zendesk"
              slug="zendesk"
              type="destination"
              image="zendesk.svg"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <IntegrationCard
              name="Marketo"
              slug="marketo"
              type="destination"
              image="marketo.png"
            />
          </Col>
          <Col lg={1} md={1} sm={0} xs={0} />
        </Row>

        <Row>
          <Col>
            <p />
            <p>And many more on the way!</p>
            <p>
              <Link href="/meet">
                <a>Let us know </a>
              </Link>
              what products you want to connect with.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
