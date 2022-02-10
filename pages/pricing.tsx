import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import SEO from "../components/SEO";
import {
  PricingCard,
  PricingCardProps,
} from "../components/pricing/PricingCard";
import { PricingTable } from "../components/pricing/PricingTable";
import PricingPlans from "../components/pricing/PricingPlans";
import { urlize } from "../utils/inflectors";

export default function PricingPage() {
  const cardContents: PricingCardProps[] = [
    {
      title: "Community Edition",
      subtitle: "Grouparoo is Open Source and free to run in your own cloud",
      listItems: [
        "Realtime syncing infrastructure",
        "Access to all Sources and Destinations",
        "Configurable with code and our CLI",
        "Dynamic Group definition",
        "Ticket-based support",
        "Enterprise UI add-on available",
      ],
      buttonVariant: "outline-dark",
      buttonText: "Try it Now",
    },
    {
      title: "Standard Cloud",
      blurb: "Starting at $150/month",
      subtitle:
        "For companies wanting to sync up to 1,000,000 Records to their destinations",
      listItems: [
        "Up to 1,000,000 Records synced/month",
        "Tiered pricing based on monthly usage",
        "Access to all Sources and Destinations",
        "A no-code web UI allowing team members to access data",
        "Business hours support",
      ],
      buttonVariant: "secondary",
      buttonText: "Start free Trial",
      footerText: "No credit card required.",
    },
    {
      title: "Enterprise Cloud",
      subtitle: "For engineers with larger datasets or unique use cases",
      listItems: [
        ">1,000,000 Records synced per month",
        "Business hours support",
        "Enhanced support response",
      ],
      buttonVariant: "secondary",
      buttonText: "Contact Sales",
    },
  ];

  return (
    <>
      <SEO
        canonical={true}
        description="Find Grouparoo pricing options to power your Reverse ETL pipelines. Open-source or cloud hosted options available."
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        path="/pricing"
        title="Grouparoo Pricing Options"
      />

      <Container className="mx-auto py-5">
        <Row className="pb-5 text-center">
          <Col>
            <h1 className="pb-3">Grouparoo Pricing Options</h1>
            <p className="text-big-muted">
              Choose the best plan for you and your team, whether you want to
              self-host or have Grouparoo host for you.
            </p>
          </Col>
        </Row>
        <Row className="mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 d-flex align-items-stretch">
          {cardContents.map((cardContent) => {
            return (
              <Col
                className="mb-4 mx-auto d-flex align-items-stretch"
                key={urlize(cardContent.title)}
              >
                <PricingCard {...cardContent} />
              </Col>
            );
          })}
        </Row>
        <Row className="col-10 mx-auto">
          <PricingTable />
        </Row>

        <PricingPlans />
        <Row>
          <Col>
            <h2>Frequently Asked Questions</h2>
            <br />
            <h4>Is the Community edition of Grouparoo really free?</h4>
            <p>
              Yes! Our Community edition is open source and free. You will need
              to be able to host it somewhere such as Heroku or AWS.
            </p>
            <br />
            <h4>
              What are Records, and how is Pricing based on Record volume?
            </h4>
            <p>
              Records are the primary object type in Grouparoo. Records may be
              people, such as leads or contacts, or a different object such as
              companies or accounts. Your Destination will determine what type
              of Record you use.
            </p>
            <p>
              Pricing is based on monthly synced Records. Each Record that you
              send to a Destination is a single synced Record, regardless of how
              many destinations it goes to. You can monitor your monthly usage
              at any time from your Grouparoo dashboard.
            </p>
            <br />
            <h4>
              Is there a limit to the number of Sources and Destinations that I
              can use?
            </h4>
            <p>
              Nope! Whether you're using the Community, Cloud, or Enterprise
              editions of Grouparoo, you can connect as many Sources and
              Destinations as you'd like.
            </p>
            <br />
            <h4>Do you have onboarding support?</h4>
            <p>
              For customers on the Cloud or Enterprise plans, we provide
              hands-on support for getting set up with Grouparoo. For folks
              using the Community edition of Grouparoo, you can join the
              Grouparoo <a href="docs/community">community</a> and discuss any
              questions or topics you may have there. We're also active in the
              community, so we're happy to help!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
