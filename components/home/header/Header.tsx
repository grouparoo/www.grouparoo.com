import { Button, Col, Container, Row } from "react-bootstrap";
import { HeaderImage } from "./HeaderImage";
import styles from "./Header.module.scss";

interface HeaderProps {
  tagline: string;
}

export const Header = ({ tagline }: HeaderProps) => (
  <Container fluid className={`pipes ${styles.container}`} data-testid="header">
    <Row>
      <Col md="6" className={`${styles.text}`}>
        <h2>{tagline}</h2>
        <p className="outline">
          Grouparoo is an open source framework that helps you move data between
          your data warehouse and all of your cloud-based tools.
        </p>
        <Button type="button" variant="primary" className="rounded-pill">
          Get Started
        </Button>
      </Col>
      <Col md="6" className={`${styles.image}`}>
        <HeaderImage />
      </Col>
    </Row>
  </Container>
);
