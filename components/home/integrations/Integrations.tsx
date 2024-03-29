import { Button, Col, Container, Row } from "react-bootstrap";
import { Plugin, PluginData } from "../../../data/plugins";
import { IntegrationCard } from "./IntegrationCard";

interface IntegrationsProps {
  center?: boolean;
  count?: number;
  filter?: (plugin: Plugin) => boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

export const Integrations = ({
  center,
  count = 9,
  filter = () => true,
  showHeader = true,
  showFooter = false,
}: IntegrationsProps) => {
  return (
    <Container className="pb-4">
      {showHeader && (
        <Row>
          <Col className={center ? "d-flex justify-content-center pb-3" : ""}>
            <h2>Integrations with all of your tools</h2>
            <br />
          </Col>
        </Row>
      )}
      <Row>
        {PluginData?.sort((a, b) => {
          return b.priority - a.priority;
        })
          .filter((integration) => integration.primaryType)
          .filter((integration) => filter(integration))
          .slice(0, count)
          .map((plugin) => (
            <Col
              lg={4}
              md={4}
              sm={6}
              xs={12}
              key={`plugin-${plugin.name}`}
              className="py-2"
            >
              <IntegrationCard
                slug={plugin.slug}
                type={plugin.primaryType}
                otherType={plugin.otherTypes[0]}
                showLink={plugin.showLink}
              />
            </Col>
          )) ?? null}
      </Row>
      {showFooter && (
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
      )}
    </Container>
  );
};
