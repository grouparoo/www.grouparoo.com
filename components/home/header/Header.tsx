import { Col, Container, Row, Button } from "react-bootstrap";
import { HeaderImage } from "./HeaderImage";
import styles from "./Header.module.scss";

interface HeaderProps {
  tagline: string;
}

export const Header = ({ tagline }: HeaderProps) => (
  <Container className={styles.background} fluid>
    <Row>
      <Col>
        <h1>{tagline}</h1>
        <p className="outline">
          Grouparoo is an open source framework that helps you move data between
          your data warehouse and all of your cloud-based tools.
        </p>
        <Button type="button" variant="primary">
          Get Started
        </Button>
      </Col>
      <Col>
        <HeaderImage />
      </Col>
    </Row>
  </Container>
);
