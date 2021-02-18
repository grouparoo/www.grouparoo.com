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
        <Col md={6}>
          <h2>Free and Easy to Install</h2>
          <p>
            Add the <code>{packageName}</code> package to your project, restart
            your server, and you're good to go!{" "}
            <Link href="/docs/installation/plugins">
              Learn more about working with plugins
            </Link>
            .
          </p>
          <h4>Community Edition</h4>
          <p>
            Once you've installed the {displayName} plugin, you can begin to
            configure it by{" "}
            <Link href="/docs/config/apps/community">adding an App</Link>.
          </p>
          <h4>Enterprise Edition</h4>
          <p>
            Our Enterprise Edition enables you to{" "}
            <Link href="/docs/config/apps/enterprise">
              {`configure ${displayName} through the UI`}
            </Link>
            . If you'd like to try our Enterprise Edition,{" "}
            <Link href="/meet">let's talk</Link>.
          </p>
        </Col>
        <Col>
          <HomepageCodeBox
            code={
              <>
                {`$`} grouparoo install {packageName}
              </>
            }
          />
        </Col>
      </Row>
    </Container>
  );
}
