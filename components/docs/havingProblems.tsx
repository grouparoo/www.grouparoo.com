import { Alert } from "react-bootstrap";
import Link from "next/link";

export default function HavingProblems() {
  return (
    <>
      <br />
      <Alert variant="primary">
        <h5>Having Problems?</h5>

        <p>
          If you are having trouble, visit the list of{" "}
          <Link href="/docs/deployment/common-issues">
            <a>common issues</a>
          </Link>{" "}
          or{" "}
          <Link href="/support">
            <a>open a Github issue</a>
          </Link>{" "}
          to get support.
        </p>
      </Alert>
    </>
  );
}
