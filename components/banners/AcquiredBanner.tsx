import { Alert } from "react-bootstrap";

export function AcquiredBanner() {

  return (
    <Alert variant="success" style={{ textAlign: "center", margin: 0 }}>
      <small>
        Grouparoo has been acquired by Airbyte.{" "}
        <strong>
          <a
            href="/blog/grouparoo-acquired-by-airbyte"
            rel="noreferrer"
          >
            Learn more
          </a>
        </strong>{" "}
      </small>
    </Alert>
  );
}
