import { Button, Card } from "react-bootstrap";
import Link from "next/link";

export default function GetStarted({
  showLearnMore = true,
}: {
  showLearnMore?: boolean;
}) {
  return (
    <Card border="primary">
      <Card.Body>
        <h2>Get Started with Grouparoo</h2>
        <p>Start syncing your data with Grouparoo Cloud</p>
        <Button
          variant="primary"
          size="lg"
          href="/trial"
          className="ml-auto mt-1 mb-4"
        >
          Start Free Trial
        </Button>
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
