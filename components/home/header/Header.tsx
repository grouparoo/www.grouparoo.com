import Link from "next/link";
import Image from "next/image";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { HeaderImage } from "./HeaderImage";
import styles from "./Header.module.scss";

interface HeaderProps {
  pluginName: string;
}

export const Header = ({ pluginName }: HeaderProps) => (
  <Container fluid className={`pipes ${styles.container}`} data-testid="header">
    <Container>
      <Row>
        <Col>
          <Card bg="info">
            <Card.Header as="h2">
              Grouparoo has been acquired by Airbyte!
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <Image
                    width={3869}
                    height={2613}
                    alt="Gropuaroo + Airbyte logos"
                    src="/images/2022-Grouparoo.png"
                  />
                </Col>
                <Col md={9}>
                  <p>
                    We are excited to announce that Grouparoo has joined Airbyte
                    to accelerate data movement.
                  </p>
                  <p>
                    With Grouparoo and Airbyte joining forces, we are on our way
                    to offering a unique place in the open-source ecosystem
                    where every data engineer, every analytics engineer, every
                    data analyst can easily move data whether for analytics or
                    operational use cases.
                  </p>
                  <p>
                    See the full announcement on the{" "}
                    <Link href="https://airbyte.com/blog/airbyte-acquires-grouparoo-to-accelerate-data-movement">
                      <a style={{ color: "#2fe5a4" }} target="_blank">
                        Airbyte Blog
                      </a>
                    </Link>{" "}
                    , and see{" "}
                    <Link href="/blog/grouparoo-acquired-by-airbyte">
                      <a style={{ color: "#2fe5a4" }}>Grouparoo's message</a>
                    </Link>{" "}
                    to our community.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <br />
      <br />

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
