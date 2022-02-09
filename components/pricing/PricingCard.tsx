import { Card, Button } from "react-bootstrap";
import styles from "../../pages/pricing.module.scss";
export interface PricingCardProps {
  title: string;

  blurb?: string;
  subtitle: string;
  listItems: string[];
  buttonVariant: string;
  buttonText: string;
  footerText?: string;
}

export const PricingCard = ({
  title,
  blurb,
  subtitle,
  listItems,
  buttonVariant,
  buttonText,
  footerText,
}: PricingCardProps) => {
  return (
    <Card
      className={`mx-auto col-12 p-3
shadow-lg h-100 text-start ${styles.featureCard} ${
        title === "Standard Cloud" ? styles.bgLight : "bg-white"
      }`}
    >
      <Card.Body className="d-flex align-items-start flex-column">
        <div className="h3">{title}</div>
        {blurb && <p className="bold text-uppercase">{blurb}</p>}
        <p>{subtitle}</p>
        <br />
        <div className={`${styles.pricingList}`}>
          <b>Features include:</b>
          <ul>
            {listItems.map((listItem, idx) => {
              return <li key={idx}>{listItem}</li>;
            })}
          </ul>
        </div>
        <Button
          variant={buttonVariant}
          className="w-100 mx-auto mt-auto rounded-pill"
          href="/docs/getting-started"
        >
          {buttonText}
        </Button>
        {footerText && <span className="small mt-4 mx-auto">{footerText}</span>}
      </Card.Body>
    </Card>
  );
};
