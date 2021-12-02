import { Col, Container, Row } from "react-bootstrap";
import { PluginData } from "../../../data/plugins";
import { IntegrationCard } from "./IntegrationCard";

export const Integrations = () => {
  return (
    <Container className="pb-4">
      <Row>
        <Col>
          <h2>Integrations with all of your tools</h2>
          <br />
        </Col>
      </Row>
      <Row>
        {PluginData?.sort((a, b) => {
          return b.priority - a.priority;
        })
          .filter((integration) => integration.primaryType)
          .slice(0, 9)
          .map((plugin) => (
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
                otherType={plugin.otherTypes[0]}
                showLink={plugin.showLink}
              />
            </Col>
          )) ?? null}
      </Row>
    </Container>
  );
};
