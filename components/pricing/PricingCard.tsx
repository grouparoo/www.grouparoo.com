import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import styles from "../../pages/pricing.module.scss";
interface PricingCardProps {}

export const PricingCard = () => {
  return (
    <Card
      className={`mx-auto col-12 p-3
shadow-lg h-100 text-start feature-card ${styles.featureCard}`}
      bg="white"
    >
      <Card.Body className="d-flex align-items-start flex-column">
        <div className="h3">Community Edition</div>
        Grouparoo is open source and free to run in your own cloud.
        <br />
        <br />
        <div className={styles.pricingList}>
          <b>Features include:</b>
          <li>Realtime syncing infrastructure</li>
          <li>Access to all Sources and Destinations </li>
          <li>Configurable with code and our CLI</li>
          <li>Dynamic Group definition</li>
          <li>Ticket-based support</li>
          <li>
            Enterprise UI add-on available (
            <Link href="/meet">contact sales</Link>)
          </li>
        </div>
        <Button
          variant="outline-dark"
          className="w-100 mx-auto mt-auto"
          href="/docs/getting-started"
        >
          Try it now
        </Button>
        <small> </small>
      </Card.Body>
    </Card>
  );
};
