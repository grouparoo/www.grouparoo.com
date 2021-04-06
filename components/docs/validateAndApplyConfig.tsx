import Link from "next/link";

import { Alert } from ".";
import CodeBlock from "./plugins/codeBlock";

export default function ValidateAndApplyConfig() {
  return (
    <>
      <h2 id="validating-and-applying-your-config">
        <a href="#validating-and-applying-your-config">
          Validating &amp; Applying Your Config
        </a>
      </h2>

      <p>
        You can validate your config at any time using{" "}
        <Link href="/docs/cli/config#validate">
          <span>
            the <code>validate</code> command
          </span>
        </Link>
        :
      </p>

      <CodeBlock code="grouparoo validate" language="cli" />

      <p>
        And you can apply that config (save it to your{" "}
        <Link href="/docs/getting-started/product-concepts#application-database">
          Grouparoo application's database
        </Link>
        ) using{" "}
        <a href="/docs/cli/config#apply">
          the <code>apply</code> command
        </a>
        :
      </p>

      <CodeBlock code="grouparoo apply" language="cli" />

      <Alert variant="primary">
        <p className="mb-0">
          Note that <code>apply</code> will run <code>validate</code>, but it's
          recommended to run <code>validate</code> on its own first, just to be
          safe.
        </p>
      </Alert>
    </>
  );
}
