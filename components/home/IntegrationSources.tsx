import { Container, Row, Col, Button } from "react-bootstrap";
import IntegrationButton from "./IntegrationButton";
import { PluginData } from "../../data/plugins";
import { Fragment } from "react";

export default function IntegrationSources() {
  return (
    <>
      <Container>
        <Row>
          {PluginData.length
            ? PluginData.sort((a, b) => {
                return b.priority - a.priority;
              })
                .filter(
                  ({ primaryType, showLink }) =>
                    showLink && primaryType === "source"
                )
                .slice(0, 5)
                .map((plugin, idx) => (
                  <Col
                    key={`integrationSource-${idx}`}
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                  >
                    <IntegrationButton
                      name={plugin.name}
                      slug={plugin.slug}
                      type={plugin.primaryType}
                      image={plugin.logo}
                    />{" "}
                    &nbsp; &nbsp;
                  </Col>
                ))
            : null}
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
    </>
  );
}
