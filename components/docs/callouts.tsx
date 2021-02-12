import { Alert } from "react-bootstrap";
import Link from "next/link";
import { titleize } from "../../utils/inflectors";

export default function Callout({ children, ...props }) {
  return <Alert {...props}>{children}</Alert>;
}

export function ConfigToggle({ edition, section }) {
  const otherEdition = edition === "community" ? "enterprise" : "community";
  const ctaHref = `/docs/config/${section}/${otherEdition}`;
  const ctaLabel = `use the ${titleize(otherEdition)} ${titleize(
    section
  )} Guide`;

  return (
    <Alert variant="primary">
      <p className="mb-0">
        {edition === "enterprise" ? (
          <>
            <p>
              This guide covers configuration with Grouparoo's Enterprise
              Edition. If your application is using the Community Edition,{" "}
              <Link href={ctaHref}>{ctaLabel}</Link> instead.
            </p>
            <p className="mb-0">
              If you are interested in using the Enterprise Edition,{" "}
              <Link href="/meet">send us a message</Link>.
            </p>
          </>
        ) : (
          <>
            This guide covers configuration with Grouparoo's Code Config, which
            is the recommended way to configure your application. If you have{" "}
            <Link href="/meet">purchased the Enterprise Edition</Link>, you may
            wish to <Link href={ctaHref}>{ctaLabel}</Link> instead.
          </>
        )}
      </p>
    </Alert>
  );
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
