import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import styles from "./GetStarted.module.scss";

export default function GetStarted({
  showLearnMore = true,
}: {
  showLearnMore?: boolean;
}) {
  return (
    <Card className={styles.card}>
      <Card.Body>
        <h2>Get Started with Grouparoo</h2>
        <p>Start syncing your data with Grouparoo Cloud</p>
        <Link href="/trial" passHref={true}>
          <Button
            variant="primary"
            size="lg"
            className="ms-auto mt-1 mb-4 rounded-pill"
          >
            Start Free Trial
          </Button>
        </Link>
        {showLearnMore ? (
          <p>
            <small>
              Or download and try our open source{" "}
              <Link href="/docs/getting-started">
                <a> Community edition</a>
              </Link>
              .
            </small>
          </p>
        ) : null}
      </Card.Body>
    </Card>
  );
}
