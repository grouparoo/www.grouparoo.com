import { Alert } from "react-bootstrap";
import Link from "next/link";

export type DisplayReleaseNote = { name: string; description: string };

export function WhatsNewBanner({
  releaseNote,
}: {
  releaseNote: DisplayReleaseNote;
}) {
  if (!releaseNote) return null;

  return (
    <Alert variant="primary" style={{ textAlign: "center", margin: 0 }}>
      <small>
        <strong>What&apos;s New</strong> - {releaseNote.description}{" "}
        <Link href="/whats-new">
          <a>Learn More</a>
        </Link>
      </small>
    </Alert>
  );
}
