import { Container, Row, Col, Image } from "react-bootstrap";
import Link from "next/link";
import { TrialForm } from "../components/TrialForm";
import SEO from "../components/SEO";

const title = "Grouparoo: Free Trial";
const description =
  "Get started with Grouparoo, the open source framework that helps you move data between your database and all of your cloud-based tools.";

export default function TrialPage() {
  return (
    <>
      <SEO
        description={description}
        title={title}
        canonical={true}
        path="/trial"
      />
      <Container>
        <Row className="align-self-center m-0">
          <Col
            md={9}
            xl={5}
            className="align-self-center pb-2 pb-lg-5 text-center mx-auto"
          >
            <Link href="/" passHref={true}>
              <Image
                src="/images/logo-and-wordmark-black-words.svg"
                alt="Grouparoo Logo"
                width={150}
                height={32}
                className="mb-3"
              />
            </Link>
            <h1>Grouparoo Cloud</h1>
            <h2>Start Your Free 30 Day Trial</h2>
            <p>No credit card required.</p>
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
