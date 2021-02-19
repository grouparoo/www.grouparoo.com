import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import HomepageCodeBox from "../../components/home/homepageCodeBox";

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
          <HomepageCodeBox
            code={
              <>
                {`$`} grouparoo install {packageName}
                <br />
                {`$`} grouparoo start
              </>
            }
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h4>Community Edition</h4>
          <p>
            Once you've installed the {displayName} plugin, you can begin to
            configure it by{" "}
            <Link href="/docs/config/apps/community">adding an App</Link>.
          </p>
        </Col>
        <Col>
          <h4>Enterprise Edition</h4>
          <p>
            Our Enterprise Edition enables you to{" "}
            <Link href="/docs/config/apps/enterprise">
              {`configure your ${displayName} apps through the UI`}
            </Link>
            .
          </p>
        </Col>
      </Row>
    </Container>
  );
}
