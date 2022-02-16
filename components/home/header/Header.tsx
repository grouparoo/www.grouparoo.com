import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";
import { HeaderImage } from "./HeaderImage";
import styles from "./Header.module.scss";

interface HeaderProps {
  pluginName: string;
}

export const Header = ({ pluginName }: HeaderProps) => (
  <Container fluid className={`pipes ${styles.container}`} data-testid="header">
    <Container>
      <Row>
        <Col lg="6" className={`${styles.text}`}>
          <h2 suppressHydrationWarning>
            Stop writing code to sync data to {pluginName}*
          </h2>
          <p className="outline">
            Grouparoo is an open source framework that helps you move data
            between your data warehouse and all of your cloud-based tools.
          </p>
          <Link href="/get-started" passHref>
            <Button type="button" variant="secondary" className="rounded-pill">
              Get Started
            </Button>
          </Link>
          <p className="mt-4">
            <small>
              <em>
                * Sorry,{" "}
                <Link
                  href={`/integrations/destinations/${pluginName.toLowerCase()}`}
                >
                  <a suppressHydrationWarning>{pluginName}</a>
                </Link>{" "}
                - we don't mean to pick on you specifically. We integrate with{" "}
                <Link href="/integrations">
                  <a>lots of marketing, operations, and sales tools</a>
                </Link>
                .
              </em>
            </small>
          </p>
        </Col>
        <Col
          lg="6"
          className={`${styles.image} d-md-none d-lg-block text-center`}
        >
          <HeaderImage className={styles.headerImage} />
        </Col>
      </Row>
    </Container>
  </Container>
);
