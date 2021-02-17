import Link from "next/link";

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

      <pre>
        <code>grouparoo validate</code>
      </pre>

      <p>
        And you can apply that config (save it to your Grouparoo application's
        database) using{" "}
        <a href="/docs/cli/config#apply">
          the <code>apply</code> command
        </a>
        :
      </p>

      <pre>
        <code>grouparoo apply</code>
      </pre>

      <p>
        Note that <code>apply</code> will run <code>validate</code>, but it's
        recommended to run <code>validate</code> on its own first, just to be
        safe.
      </p>
    </>
  );
}
