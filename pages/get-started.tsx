import { Container, Button, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import SEO from "../components/SEO";
import { GetStartedCard } from "../components/getStarted/GetStartedCard";

export default function GetStarted({ props }) {
  const title = "Grouparoo: Get started";

  return (
    <>
      <SEO
        title={title}
        description="Get Started Using Grouparoo. Learn how to use the open source community edition or request a trial for the cloud version."
        path="/get-started"
        canonical={true}
      />

      <div
        id="headline"
        className="homePageSection"
        style={{ textAlign: "center", paddingTop: 0, paddingBottom: 20 }}
      >
        <Container>
          <Row className="pt-5 pb-3">
            <Col>
              <h1 className="pt-1 pb-3">Sync data how you want</h1>
              <p className="big pb-3 pb-xl-5">
                Use Grouparoo to power your Reverse ETL pipelines and workflows.
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col className="mb-4 col-12 col-xl-5 col-md-7">
              <GetStartedCard
                title="Self-Hosted"
                image="/images/home/get-started/server.svg"
                imageWidth="64"
                tagline="Grouparoo is open source and free to run in your own cloud."
                buttonVariant="outline-dark"
                buttonText="Learn More"
              />
            </Col>
            <Col className="mb-4 col-12 col-xl-5 col-md-7">
              <GetStartedCard
                title="Cloud"
                image="/images/home/get-started/cloud-cycle.svg"
                imageWidth="80"
                tagline="Get syncing from databases to SaaS tools right away."
                buttonVariant="secondary"
                buttonText="Start Free Trial"
                footerText="No credit card required"
              />
            </Col>
          </Row>
          <Link href="/pricing" passHref>
            <a className="my-2 text-black text-decoration-underline">
              View pricing plans
            </a>
          </Link>
        </Container>
      </div>
    </>
  );
}
