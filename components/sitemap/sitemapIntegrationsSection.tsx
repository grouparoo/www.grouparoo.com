import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { titleize } from "../../utils/inflectors";
import { useState } from "react";

export default function SitemapIntegrationsSection({
  integrations,
}: {
  integrations;
}) {
  return (
    <div
      style={{ backgroundImage: "linear-gradient(#242436,#43435F)" }}
      className="bg-dark text-white homePageSection my-5"
    >
      <Container>
        <h2 className="border-bottom col-10 mx-auto">Integrations</h2>
        <Col className="col-9 mx-auto">
          <Row>
            <h3 className="col-12 mb-1 mt-3">Sources</h3>
            {integrations["sources"].map((integration) => {
              <Col key={integration} className="col-md-6 col-12 my-1">
                <Link href={`/integrations/sources/${integration}`}>
                  {titleize(integration)}
                </Link>
              </Col>;
            })}
          </Row>
          <Row>
            <h3 className="col-12 mb-1 mt-3">Destinations</h3>
            {integrations["destinations"].map((integration) => {
              <Col key={integration} className="col-md-6 col-12 my-1">
                <Link href={`/integrations/destinations/${integration}`}>
                  {titleize(integration)}
                </Link>
              </Col>;
            })}
          </Row>
          <Row>
            <h3 className="col-12 mb-1 mt-3">Misc</h3>
            {integrations["other"].map((integration) => {
              return (
                <Col key={integration} className="col-md-6 col-12 my-1">
                  <Link href={`/integrations/${integration}`}>
                    {titleize(integration)}
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
