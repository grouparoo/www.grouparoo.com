import { Container, Row, Col, Button } from "react-bootstrap";
import IntegrationButton from "../home/integrationButton";
import { PluginData } from "../../data/plugins";
import { Fragment } from "react";

export default function IntegrationSources() {
  return (
    <>
      <Container>
        <Row>
          {PluginData.length > 0
            ? PluginData.sort((a, b) => {
                return b.priority - a.priority;
              })
                .filter((pluginType) => pluginType.primaryType === "source")
                .filter((pluginType) => pluginType.showLink === true)
                .slice(0, 5)
                .map((plugin, idx) => {
                  return (
                    <Fragment key={`integrationSource-${idx}`}>
                      <IntegrationButton
                        name={plugin.name}
                        slug={plugin.slug}
                        type={plugin.primaryType}
                        image={plugin.logo}
                      />{" "}
                      &nbsp; &nbsp;
                    </Fragment>
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
    </>
  );
}
