import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { CodeBlock } from "../CodeBlock";

const code = (packageName: string) => `$ grouparoo install ${packageName}
$ grouparoo start`;

export default function IntegrationInstallation({
  packageName,
  displayName,
}: {
  packageName: string;
  displayName: string;
}) {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={5}>
          <h2>Free and Easy to Install</h2>
          <p>
            Add the <code>{packageName}</code> package to your project, restart
            your server, and you're good to go!{" "}
            <Link href="/docs/installation/plugins">
              Learn more about working with plugins
            </Link>
            .
          </p>
        </Col>
        <Col>
          <CodeBlock code={code(packageName)} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h4>Community Edition</h4>
          <p>
            Once you've installed the {displayName} Plugin, you can begin to
            configure it by <Link href="/docs/config/apps">adding an App</Link>.
          </p>
        </Col>
        <Col>
          <h4>Enterprise Edition</h4>
          <p>
            Our Enterprise Edition enables you to{" "}
            <Link href="/docs/running/ui-enterprise/apps">
              {`configure your ${displayName} apps through the UI`}
            </Link>
            .
          </p>
        </Col>
      </Row>
    </Container>
  );
}
