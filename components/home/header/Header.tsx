import { Button, Col, Container, Row } from "react-bootstrap";
import { HeaderImage } from "./HeaderImage";
import styles from "./Header.module.scss";
import Link from "next/link";

interface HeaderProps {
  tagline: string;
}

export const Header = ({ tagline }: HeaderProps) => (
  <Container fluid className={`pipes ${styles.container}`} data-testid="header">
    <Container>
      <Row>
        <Col md="6" className={`${styles.text}`}>
          <h2>{tagline}</h2>
          <p className="outline">
            Grouparoo is an open source framework that helps you move data
            between your data warehouse and all of your cloud-based tools.
          </p>
          <Link href="/get-started" passHref>
            <Button type="button" variant="primary" className="rounded-pill">
              Get Started
            </Button>
          </Link>
        </Col>
        <Col md="6" className={`${styles.image}`}>
          <HeaderImage className={styles.headerImage} />
        </Col>
      </Row>
    </Container>
  </Container>
);
