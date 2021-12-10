import { Alert } from "react-bootstrap";
import Link from "next/link";

export default function Callout({ children, ...props }) {
  return <Alert {...props}>{children}</Alert>;
}

export function EnterpriseCTA() {
  return (
    <Alert variant="primary">
      <p className="mb-0">
        If you are interested in using the Enterprise Edition,{" "}
        <Link href="/meet">
          <a>send us a message</a>
        </Link>
        .
      </p>
    </Alert>
  );
}

export function HavingProblems() {
  return (
    <>
      <br />
      <Alert variant="primary">
        <h5>Having Problems?</h5>

        <p className="mb-0">
          If you are having trouble, visit the list of{" "}
          <Link href="/docs/support/common-issues">
            <a>common issues</a>
          </Link>{" "}
          or{" "}
          <Link href="/docs/support">
            <a>open a Github issue</a>
          </Link>{" "}
          to get support.
        </p>
      </Alert>
    </>
  );
}
