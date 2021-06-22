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
        <a href="/meet">send us a message</a>.
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

        <p>
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

export function UIConfigPrereqs() {
  return (
    <Alert variant="warning">
      <p className="mb-0">
        UI Config requires that your Grouparoo application{" "}
        <a href="/docs/deployment">is running in production</a>.
      </p>
    </Alert>
  );
}
