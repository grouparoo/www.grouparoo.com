import Link from "next/link";

// import { PluginData, PluginConfigOptions } from "../../../data/plugins";

// import { Alert } from "../";
import CodeBlock from "./codeBlock";
// import Markdown from "./markdown";

const codeBlocks = {
  tableSourceMapping: `
mapping: {
  email: "emailAddress",
}
  `,
};

const PluginDocsColumnarSourceIntro = ({ plugin }: { plugin: string }) => {
  const slug = plugin.toLowerCase();

  return (
    <>
      <h2 id={`creating-a-${slug}-source`}>Creating a {plugin} Source</h2>
      <p>
        A Source is how you import data into Grouparoo. For columnar sources,
        like {plugin}, there are two <em>types</em> of sources:
      </p>

      <ul>
        <li>
          A <em>Table Source</em> targets specific columns within a single table
          and can perform aggregation methods on that column.
        </li>
        <li>
          A <em>Query Source</em> provides the ability to write custom SQL code
          to extract data from one or more tables and import the result into
          Grouparoo.
        </li>
      </ul>

      <p>
        You can generate each type of source using the <code>generate</code>{" "}
        command. Each requires that you specify a <code>parent</code>, which
        should match the <code>id</code> of the App you created.
      </p>

      <CodeBlock
        code={`
          grouparoo generate ${slug}:table:source users --parent my_${slug}_app
          grouparoo generate ${slug}:query:source purchases --parent my_${slug}_app
        `}
        language="cli"
      />

      <p>
        Each generator has additional options for speeding up the config
        process. You can use the <code>--describe</code> flag to learn more
        about each command. For example:
      </p>

      <CodeBlock
        code={`grouparoo generate ${slug}:table:source --describe`}
        language="cli"
      />

      <p>
        Some generators have a way to batch multiple generated config files
        together.{" "}
        <Link href="/docs/cli/config#batch-generation">Read more here</Link>.
      </p>

      <p>
        All Sources have a common set of options,{" "}
        <Link href="/docs/config/sources/community#configuring-your-source">
          which you can read about here
        </Link>
        . Type-specific options are listed below.
      </p>

      <h3 id="table-source">Table Source</h3>

      <p>
        There are two objects in the Table Source config file that are unique to
        this type: <code>options</code> and <code>mappings</code>. More on these
        and other related items below.
      </p>

      <h4 id="table-source-options">Table Source Options</h4>

      <p>There is only one option:</p>

      <ul>
        <li>
          <code>table</code>: (<strong>required</strong>) Name of the table in
          the SQLite database.
        </li>
      </ul>

      <h4 id="table-source-mappings">Table Source Mappings</h4>

      <p>
        Mapping is a section of key-value pairs which represents how Grouparoo
        should match a column from the Source table to a Profile in Grouparoo.
      </p>

      <p>
        For example, let's say your database has a column named{" "}
        <code>email</code> and that maps directly to a _unique_ Property on the
        Profile in Grouparoo called <code>emailAddress</code>. In that case,
        your mapping would look like this:
      </p>

      <CodeBlock code={codeBlocks.tableSourceMapping} language="js" />
    </>
  );
};

export default PluginDocsColumnarSourceIntro;
