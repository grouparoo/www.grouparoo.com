import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";
import SEO from "../components/SEO";
import { TrialForm } from "../components/TrialForm";

export default function Trial() {
  return (
    <>
      <SEO
        title="Grouparoo: Free Trial"
        description="Get started with Grouparoo, the open source framework that helps you move data between your database and all of your cloud-based tools."
        path="/trial_landing"
        canonical={false}
        noIndex={true}
      />

      <Container>
        <Row className="align-self-center m-0">
          <Col
            md={9}
            xl={5}
            className="align-self-center pb-2 pb-lg-5 text-center mx-auto"
          >
            <Link href="/">
              <a>
                <Image
                  src="/images/logo-and-wordmark-black-words.svg"
                  alt="Grouparoo Logo"
                  width={300}
                  height={64}
                  className="mb-3"
                />
              </a>
            </Link>
            <h2>Start Your Free 30 Day Trial</h2>
            <br />
            <br />
            <div className="text-start">
              <h4>Operationalize your customer data</h4>
              <p>Connect your data warehouse to all of your business tools. </p>
              <h4>Reverse ETL for the modern data stack</h4>
              <p>Grouparoo fits into your data engineering workflow</p>
              <h4>New integrations</h4>
              <p>
                Integrations with all your favorite data warehouses and business
                tools
              </p>
            </div>
            <br />
            <Row>
              <Col>
                <Image
                  src="/images/home/integrations/snowflake/snowflake.png"
                  alt="Snowflake logo"
                  width={60}
                  height={60}
                />
              </Col>
              <Col>
                <Image
                  src="/images/home/integrations/redshift/redshift.png"
                  alt="Redshift logo"
                  width={60}
                  height={60}
                />
              </Col>
              <Col>
                <Image
                  src="/images/home/integrations/bigquery/bigquery.png"
                  alt="Bigquery logo"
                  width={60}
                  height={60}
                />
              </Col>
              <Col>
                <Image
                  src="/images/home/integrations/salesforce/salesforce.png"
                  alt="Salesforce logo"
                  width={60}
                  height={60}
                />
              </Col>
              <Col>
                <Image
                  src="/images/home/integrations/marketo/marketo.png"
                  alt="Marketo logo"
                  width={60}
                  height={60}
                />
              </Col>
            </Row>
          </Col>
          <Col
            xs={12}
            md={9}
            xl={7}
            className="d-flex justify-content-around mx-auto m-0 "
          >
            <TrialForm />
          </Col>
        </Row>
        <Row>
          <Col className="mx-auto text-center pt-3">
            <small>
              For all other inquiries, please email{" "}
              <a href="mailto:help@grouparoo.com">help@grouparoo.com</a>
            </small>
          </Col>
        </Row>
      </Container>
    </>
  );
}
