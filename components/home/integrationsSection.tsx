import { Container, Row, Col, Button } from "react-bootstrap";
import IntegrationCard from "./integrationCard";
import { PluginData } from "../../data/plugins";

export default function IntegrationsSection() {
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
          {PluginData.length > 0
            ? PluginData.sort((a, b) => {
                return b.priority - a.priority;
              })
                .slice(0, 9)
                .map((plugin) => {
                  return (
                    <Col
                      lg={4}
                      md={4}
                      sm={6}
                      xs={6}
                      key={`plugin-${plugin.name}`}
                      className="py-2"
                    >
                      <IntegrationCard
                        slug={plugin.slug}
                        type={plugin.primaryType}
                        showLink={plugin.showLink}
                      />
                    </Col>
                  );
                })
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
    </div>
  );
}
