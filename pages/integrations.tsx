import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import IntegrationCard from "../components/home/integrationCard";
import { PluginData } from "../data/plugins";
import SEO from "../components/seo";

export default function IntegrationsPage() {
  return (
    <>
      <SEO
        canonical={true}
        description="Grouparoo is the Reverse ETL product that integrates with all of your team's business tools such as CRMs and Marketing Automation."
        image="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        path="/integrations"
        title="Grouparoo: Integrations with all of your tools"
      />

      <div
        id="headline"
        className="integrationPageSection"
        style={{ textAlign: "center", paddingTop: 100, paddingBottom: 100 }}
      >
        <Container>
          <Row>
            <Col>
              <h1>
                Connect your data stack with all the tools that your team uses
              </h1>
              <p className="text-big-muted">
                Grouparoo has integrations with leading data warehouses,
                databases, CRMs, ad platforms, and more. Grouparoo is making new
                integrations all the time.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <h2>Integrations</h2>
          <br />
        </Container>
      </div>
      <div
        id="integrations"
        className="integrationPageSection"
        style={{ textAlign: "center" }}
      >
        <Container>
          <Row>
            {PluginData.length > 0
              ? PluginData.sort((a, b) => {
                  return b.priority - a.priority;
                }).map((plugin) => {
                  return (
                    <Col
                      lg={4}
                      md={4}
                      sm={6}
                      xs={6}
                      key={`plugin-${plugin.name}`}
                      className="py-4"
                    >
                      <IntegrationCard
                        type={plugin.primaryType}
                        otherType={
                          plugin.otherTypes.length > 0
                            ? plugin.otherTypes[0]
                            : ""
                        }
                        category={plugin.category}
                        slug={plugin.slug}
                        showLink={plugin.showLink}
                      />
                    </Col>
                  );
                })
              : null}
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <div
        id="request-integration"
        className="integrationPageSection"
        style={{ textAlign: "center" }}
      >
        <Container>
          <Row>
            <Col>
              <p>
                Grouparoo is making new integrations all the time. Don’t see an
                integration you need?{" "}
                <Link href="/meet">
                  <a>Contact us to let us know! </a>
                </Link>
                👋
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
