import { Alert } from "react-bootstrap";
import { NextRouter } from "next/router";

export function OpenSourceDataStackConfBanner({
  router,
}: {
  router: NextRouter;
}) {
  if (router.asPath !== "/") return null;

  return (
    <Alert variant="success" style={{ textAlign: "center", margin: 0 }}>
      <small>
        Grouparoo is part of the Open Source Data Stack Conference on Sept.
        28-30th.{" "}
        <strong>
          <a
            href="https://www.opensourcedatastack.com"
            target="_blank"
            rel="noreferrer"
          >
            Register now
          </a>
        </strong>{" "}
      </small>
    </Alert>
  );
}
