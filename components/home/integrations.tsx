import { Container, Row, Col } from "react-bootstrap";
import Integration from "./integration";
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
            <Integration
              name="Mailchimp"
              type="destination"
              image="mailchimp.svg"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration
              name="Sailthru"
              type="destination"
              image="sailthru.png"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration name="Postgres" type="source" image="postgres.svg" />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration name="BigQuery" type="source" image="bigquery.png" />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration name="MySQL" type="source" image="mysql.png" />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration
              name="CSV"
              type="source"
              image="csv.svg"
              showLink={false}
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration
              name="Hubspot"
              type="destination"
              image="hubspot.svg"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration
              name="Google Sheets"
              type="source"
              image="google-sheets.png"
              showLink={false}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={1} md={1} sm={0} xs={0} />
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration name="Redshift" type="source" image="redshift.svg" />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration
              name="Zendesk"
              type="destination"
              image="zendesk.svg"
            />
          </Col>
          <Col lg={3} md={3} sm={6} xs={6}>
            <Integration
              name="Marketo"
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
