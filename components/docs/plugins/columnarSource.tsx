import Link from "next/link";

import { PluginConfigOptions } from "../../../data/plugins";

import CodeBlock from "./codeBlock";
import OptionsList from "./optionsList";

const codeBlocks = {
  tableSourceMapping: `
mapping: {
  email: "emailAddress",
}
  `,
  tablePropertyFilters: `
{
  filters: [{ key: "state", op: "equals", match: "successful" }],
}
  `,
  querySchedule: `
{
  options: {
    query: "SELECT id FROM users WHERE updated_at >= (NOW() - INTERVAL '2 day')",
    propertyId: "userId"
  }
}
  `,
  queryProperties: `
{
  options: {
    query: "SELECT SUM(price) from purchases where user_id = {{userId}}";
  }
}
  `,
};

const optionLists: { [key: string]: PluginConfigOptions } = {
  tableSource: {
    table: {
      required: true,
      description: "Name of the table in the {plugin} database.",
    },
  },
  tableMapping: {
    column: {
      required: true,
      description: "The name of the column to use as the high watermark.",
    },
  },
  tableProperties: {
    column: {
      required: true,
      description: "The name of the column to use for the Property.",
    },
    aggregationMethod: {
      required: true,
      default: `"exact"`,
      description:
        "The type of aggregation method to use when extracting the data. The available options will be added to the generated config file as a comment.",
    },
    sort: {
      required: true,
      default: `null`,
    },
  },
  querySchedule: {
    query: {
      description:
        "A SQL query to return that tells Grouparoo which Profiles to check each time the interval occurs.",
    },
    propertyId: {
      description:
        "The `id` of the Grouparoo Property whose data is returned by `options.query`.",
    },
  },
  queryProperties: {
    query: {
      description:
        "The query to extract the Property. You can use [mustache variables](https://github.com/janl/mustache.js#variables) to represent the keys of other Properties in the system. You can use the `id` of any other Properties you created in Grouparoo.",
    },
  },
};

const PluginDocsColumnarSource = ({ plugin }: { plugin: string }) => {
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

      {/* --- Table Source --- */}

      <h3 id="table-source">Table Source</h3>

      <p>
        There are two objects in the Table Source config file that are unique to
        this type: <code>options</code> and <code>mappings</code>. More on these
        and other related items below.
      </p>

      {/* --- Table Source: Options --- */}

      <h4 id="table-source-options">Table Source Options</h4>

      <p>There is only one option:</p>

      <OptionsList options={optionLists.tableSource} />

      {/* --- Table Source: Mappings --- */}

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

      {/* --- Table Source: Mappings --- */}

      <h4 id="table-source-schedule">Table Source Schedule</h4>

      <p>
        A schedule is attached to every Source config file by default, commented
        out. If you want to import data from the source on a schedule (which is
        the typical behavior), then you should remove the comments and apply the
        necessary values.
      </p>

      <p>
        <Link href="/docs/config/sources/community#adding-a-schedule">
          You can read more about the common options here
        </Link>
        . The {plugin}-specific options (those in the <code>options</code>{" "}
        object) are:
      </p>

      <OptionsList options={optionLists.tableMapping} />

      <p>
        A <em>high watermark</em> is a value used for comparison. Grouparoo will
        only import items where the high watermark column is greater than the
        largest previously imported high watermark value. For example, let's say
        you use <code>updated_at</code> as your high watermark. Grouparoo will
        run an import and record the highest value from that column (presumably
        from the most recently updated record). The next time the import runs,
        Grouparoo will only consider records where <code>updated_at</code> is
        greater than the previous high watermark value. And it doesn't have to
        be a date, it just has to be comparable. Another example would be a
        numeric field, like <code>version</code>, in which the value is
        incremented when changes are made to the record in the Source database.
      </p>

      {/* --- Table Source: Properties --- */}

      <h4 id="table-source-properties">Table Source Properties</h4>

      <p>
        After you generate a Source, you'll likely want to add Properties to it.
        You can do this through the CLI:
      </p>

      <CodeBlock
        code={`grouparoo generate ${slug}:table:property first_name --parent users`}
        language="cli"
      />

      <p>
        You can also create properties in a batch when creating the Table Source
        <Link href="/docs/cli/config#batch-generation">
          <span>
            using the <code>--with</code> option while running the{" "}
            <code>generate</code> command
          </span>
        </Link>
        .
      </p>

      <p>
        The Property generator will drop individual files in the{" "}
        <code>config/properties</code> directory. Edit these files to match your
        desired configuration.
      </p>

      <p>
        The Property config object has several options.{" "}
        <Link href="/docs/config/properties/community#configuring-your-property">
          Some are share across all Properties
        </Link>
        , while others are more specific to the type of Property generated. A
        {plugin} Table Source has a few unique options. These can be found in
        the <code>options</code> object in the config file. They are:
      </p>

      <OptionsList options={optionLists.tableProperties} />

      <p>
        A {plugin} Table Source also provides the ability to filter your data
        via the <code>filters</code> option. This is a series of rules that will
        filter data in the database table to find the appropriate value for each
        Profile for a given Property.
      </p>

      <p>
        For example, let's say you had a property called{" "}
        <code>lifetime_value</code> which summed all the purchases for a given
        user. Your Source is a <code>purchases</code>
        table that has a <code>state</code> column set to either{" "}
        <code>successful</code> or <code>returned</code>. You may only want to
        include <code>successful</code> purchases. Your <code>filters</code>{" "}
        config might look like this:
      </p>

      <CodeBlock code={codeBlocks.tablePropertyFilters} language="js" />

      <p>
        The available operators (<code>op</code>) will be added to the generated
        config file as a comment near the <code>filters</code> section.
      </p>

      {/* --- Query Source --- */}

      <h3 id="query-source">Query Source</h3>

      <p>
        A Query Source is a more flexible way to build properties. With a Query
        Source, you can add custom SQL commands to your Properties, which could
        pull data from one or more tables in your database.
      </p>

      <p>
        The unique thing about the way a Query Source works is that there aren't
        any unique options for the Source itself. But the Schedule and
        Properties look a little different.
      </p>

      {/* --- Query Source: Schedule --- */}

      <h4 id="query-source-schedule">Query Source Schedule</h4>

      <p>
        Like a <Link href="#table-source-schedule">Table Source Schedule</Link>,
        a Query Source Schedule is included with the generated config file,
        commented. It has a couple unique options:
      </p>

      <OptionsList options={optionLists.querySchedule} />

      <p>
        <strong>
          Be sure that your query only returns one column of data, and that it
          maps to the Grouparoo Property you set with{" "}
          <code>options.propertyId</code>.
        </strong>
      </p>

      <p>Here's an example:</p>

      <CodeBlock code={codeBlocks.querySchedule} language="js" />

      <h4 id="query-source-properties">Query Source Properties</h4>

      <p>
        Query Sources are a little simpler when it comes to Properties. You can
        generate a Property using the CLI:
      </p>

      <CodeBlock
        code={`grouparoo generate ${slug}:query:property lifetime_value --parent purchases`}
        language="cli"
      />

      <p>
        This will drop a file at{" "}
        <code>config/properties/lifetime_value.js</code>. Edit this file to
        match your desired configuration.
      </p>

      <p>There is one unique option for Query Source Properties:</p>

      <OptionsList options={optionLists.queryProperties} />

      <p>
        Here's an example that sums the values in the <code>price</code> column
        for rows in which the <code>user_id</code> column's value matches the
        value of the Grouparoo Profile's <code>userId</code> field (i.e.{" "}
        <code>userId</code> is the <code>id</code> for the Property in
        Grouparoo):
      </p>

      <CodeBlock code={codeBlocks.queryProperties} language="js" />
    </>
  );
};

export default PluginDocsColumnarSource;
