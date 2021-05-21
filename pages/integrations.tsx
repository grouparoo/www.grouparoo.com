import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import IntegrationCard from "../components/home/integrationCard";
import { PluginData } from "../data/plugins";

export default function IntegrationsPage() {
  return (
    <>
      <Head>
        <title>Grouparoo: Integrations with all of your tools</title>
        <meta
          name="description"
          content="Grouparoo is real-time data infrastructure that puts marketers and operators in control."
        />
        <link rel="canonical" href="https://www.grouparoo.com/integrations" />
      </Head>

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
                Grouparoo lets you import and export your data to the world's
                most popular tools
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
                        name={plugin.name}
                        type={plugin.primaryType}
                        otherType={
                          plugin.otherTypes.length > 0
                            ? plugin.otherTypes[0]
                            : ""
                        }
                        category={plugin.category}
                        slug={plugin.slug}
                        image={plugin.logo}
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
