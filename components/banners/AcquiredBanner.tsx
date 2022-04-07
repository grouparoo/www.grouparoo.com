import { Alert } from "react-bootstrap";
import Link from "next/link";

export function AcquiredBanner() {

  return (
    <Alert variant="success" style={{ textAlign: "center", margin: 0 }}>
      <small>
        Grouparoo has been acquired by Airbyte.{" "}
        <strong>
          <Link
            href="/blog/grouparoo-acquired-by-airbyte"
          >
            Learn more
          </Link>
        </strong>{" "}
      </small>
    </Alert>
  );
}
