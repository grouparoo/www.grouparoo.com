import { Col, Container, Row, Button } from "react-bootstrap";
import styles from "./Header.module.scss";

interface HeaderProps {
  tagline: string;
}

export const Header = ({ tagline }: HeaderProps) => (
  <header>
    <Container>
      <Row>
        <Col>
          <h1>{tagline}</h1>
          <p className="outline">
            Grouparoo is an open source framework that helps you move data
            between your data warehouse and all of your cloud-based tools.
          </p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <Button type="button" variant="primary">
            Get Started
          </Button>
        </Col>
      </Row>
    </Container>
  </header>
);
