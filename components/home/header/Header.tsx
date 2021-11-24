import { Col, Container, Row, Button } from "react-bootstrap";
import { HeaderImage } from "./HeaderImage";
import styles from "./Header.module.scss";

interface HeaderProps {
  tagline: string;
}

export const Header = ({ tagline }: HeaderProps) => (
  <header>
    <Container fluid>
      <Row sm={12}>
        <Col>
          <h1>{tagline}</h1>
          <p className="text-big-muted outline">
            Grouparoo is an open source framework that helps you move data
            between your data warehouse and all of your cloud-based tools.
          </p>
          <Button type="button" variant="primary">
            Get Started
          </Button>
        </Col>
        <Col className="d-flex flex-column justify-content-center">
          <HeaderImage />
        </Col>
      </Row>
    </Container>
  </header>
);
