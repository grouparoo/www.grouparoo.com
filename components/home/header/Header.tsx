import { Col, Container, Row, Button } from "react-bootstrap";
import { HeaderImage } from "./HeaderImage";
import styles from "./Header.module.scss";

interface HeaderProps {
  tagline: string;
}

export const Header = ({ tagline }: HeaderProps) => (
  <header className={`d-flex justify-content-evenly ${styles.header}`}>
    <div>
      <h2>{tagline}</h2>
      <p className="outline">
        Grouparoo is an open source framework that helps you move data between
        your data warehouse and all of your cloud-based tools.
      </p>
      <Button type="button" variant="primary" className="rounded-pill">
        Get Started
      </Button>
    </div>
    <div className="d-flex flex-column justify-content-center">
      <HeaderImage />
    </div>
  </header>
);
