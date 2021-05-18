import Link from "next/link";

import { PluginConfigOptions } from "../../../data/plugins";

import { Alert } from "../";
import CodeBlock from "./codeBlock";
import OptionsList from "./optionsList";

const PluginDocsTableSource = ({ plugin }: { plugin: string }) => {
  const slug = plugin.toLowerCase();

  const codeBlocks = {
    config: `
exports.default = async function buildConfig() {
  return [
    // --- Source ---
    {
      class: "source",
      id: "users",
      name: "users",
      type: "${slug}-table-import",
      appId: "my_${slug}_app",
      options: {
        table: "users",
      },
      mapping: {
        id: "user_id",
      },
      bootstrappedProperty: {
        id: "user_id",
        name: "user_id",
        type: "integer",
        options: {
          column: "id",
        },
      },
    },
    // --- Schedule ---
    {
      id: "users_schedule",
      name: "users_schedule",
      class: "schedule",
      sourceId: "users",
      recurring: true,
      recurringFrequency: 1000 * 60 * 15,
      options: {
        column: "updated_at",
      },
    },
  ];
};
  `,
    mapping: `
mapping: {
  email: "emailAddress",
}
  `,
    bootstrappedProperty: `
bootstrappedProperty: {
  id: "user_id",
  name: "user_id",
  type: "integer",
  options: {
    column: "id",
  },
},
  `,
    propertyFilters: `
{
  filters: [{ key: "state", op: "equals", match: "successful" }],
}
  `,
  };

  const optionLists: { [key: string]: PluginConfigOptions } = {
    source: {
      table: {
        required: true,
        description: `Name of the table in the ${plugin} database.`,
      },
    },
    mapping: {
      column: {
        required: true,
        description:
          "The name of the column to use as the [high watermark](/docs/getting-started/product-concepts#high-watermark).",
      },
    },
    property: {
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
  };

  return (
    <>
      <h2 id={`create-${slug}-table-source`}>Create a {plugin} Table Source</h2>

      <p>
        You can generate a {plugin} Table Source using the <code>generate</code>{" "}
        command. You must specify a <code>parent</code>, which should match the{" "}
        <code>id</code> of the App you created.
      </p>

      <p>
        This is the simplest form of{" "}
        <Link href="/docs/getting-started/product-concepts#generator">
          Generator
        </Link>{" "}
        you can use for Table Sources:
      </p>

      <CodeBlock
        code={`grouparoo generate ${slug}:table:source users --parent my_${slug}_app`}
        cli={true}
      />

      <p>
        This generates a file at <code>config/sources/users</code>. Open this
        file and{" "}
        <strong>edit the options to match your desired configuration</strong>.
        Table Sources are among the most complex config objects generated. There
        is a lot going on in these files.
      </p>

      <p>
        Here is a filled out version of a common use case. We'll step through
        the unique pieces below.
      </p>

      <CodeBlock code={codeBlocks.config} language="javascript" />

      <Alert variant="primary">
        <p className="mb-1">
          <strong>Pro Tip!</strong>
        </p>
        <p>
          Table Sources support{" "}
          <Link href="/docs/getting-started/product-concepts#batch-generation">
            Batch Generation
          </Link>
          , which can speed up your development process. You can use the{" "}
          <code>--describe</code> flag to learn more about each command. For
          example:
        </p>
        <CodeBlock
          code={`grouparoo generate ${slug}:table:source --describe`}
          cli={true}
        />
        <p>
          The configuration example above could have been completely generated
          by using these extra options when running the <code>generate</code>{" "}
          command.
        </p>
        <p>
          To see an example of Batch Generation in action, check out our{" "}
          <Link href="/docs/tutorials/app-example-config">
            Declarative Sync Tutorial
          </Link>
          .
        </p>
      </Alert>

      {/* --- Options --- */}

      <h3 id="table-source-options">Table Source Options</h3>

      <p>Here are the options for a {plugin} </p>

      <OptionsList options={optionLists.source} />

      {/* --- Mappings --- */}

      <h3 id="table-source-mappings">Table Source Mappings</h3>

      <p>
        Defining{" "}
        <Link href="/docs/getting-started/product-concepts#mapping">
          Mappings
        </Link>{" "}
        is a critical part of the process, as it tells Grouparoo with which{" "}
        <Link href="/docs/getting-started/product-concepts#profile">
          Profile
        </Link>{" "}
        to associate imported data.
      </p>

      <p>
        For example, let's say your database has a column named{" "}
        <code>email</code> and that maps directly to a <em>unique</em> Property
        on the Profile in Grouparoo called <code>emailAddress</code>. In that
        case, your mapping would look like this:
      </p>

      <CodeBlock code={codeBlocks.mapping} language="javascript" />

      {/* --- First Source --- */}

      <h3 id="table-first-source">Configuring your First Source</h3>

      <p>
        Before you can define a Mapping, you must have a primary key for{" "}
        <Link href="/docs/getting-started/product-concepts#profile">
          Profiles
        </Link>
        In most cases, this is an ID or an e-mail address. Grouparoo will
        automatically determine what field is used for a primary key depending
        on the source and automatically generate one Profile per unique value in
        that field.
      </p>

      {/* --- Schedule --- */}

      <h3 id="table-source-schedule">Table Source Schedule</h3>

      <p>
        A{" "}
        <Link href="/docs/getting-started/product-concepts#schedule">
          Schedule
        </Link>{" "}
        is attached to every Source config file by default, commented out. If
        you want to import data from the source on a schedule (which is the
        typical behavior), then you should remove the comments and apply the
        necessary values.
      </p>

      <p>
        <Link href="/docs/config/sources/community#adding-a-schedule">
          You can read more about the common options here
        </Link>
        . The {plugin}-specific options (those in the <code>options</code>{" "}
        object) are:
      </p>

      <OptionsList options={optionLists.mapping} />

      {/* --- Properties --- */}

      <h3 id="table-source-properties">Table Source Properties</h3>

      <p>
        After you generate a Source, you'll likely want to add Properties to it.
        You can do this through the CLI:
      </p>

      <CodeBlock
        code={`grouparoo generate ${slug}:table:property first_name --parent users`}
        cli={true}
      />

      <Alert variant="primary">
        <p className="mb-1">
          <strong>Pro Tip!</strong>
        </p>
        <p className="mb-0">
          You can also create properties in a batch when creating the Table
          Source
          <Link href="/docs/cli/config#batch-generation">
            <span>
              using the <code>--with</code> option while running the{" "}
              <code>generate</code> command
            </span>
          </Link>
          .
        </p>
      </Alert>

      <p>
        The Property generator will drop individual files in the{" "}
        <code>config/properties</code> directory. Edit these files to match your
        desired configuration.
      </p>

      {/* --- Properties -> Options --- */}

      <h4 id="table-source-property-options">Table Source Property Options</h4>

      <p>
        The Property config object has several options.{" "}
        <Link href="/docs/config/properties/community#configuring-your-property">
          Some are share across all Properties
        </Link>
        , while others are more specific to the type of Property generated. A{" "}
        {plugin} Table Source has a few unique options. These can be found in
        the <code>options</code> object in the config file. They are:
      </p>

      <OptionsList options={optionLists.property} />

      {/* --- Properties -> Filters --- */}

      <h4 id="table-source-property-filters">Table Source Property Filters</h4>

      <p>
        A {plugin} Table Source also provides the ability to{" "}
        <Link href="/docs/getting-started/product-concepts#filter">filter</Link>{" "}
        your data via the <code>filters</code> option. This is a series of rules
        that will filter data in the database table to find the appropriate
        value for each Profile for a given Property.
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

      <CodeBlock code={codeBlocks.propertyFilters} language="javascript" />

      <p>
        The available operators (<code>op</code>) will be added to the generated
        config file as a comment near the <code>filters</code> section.
      </p>
    </>
  );
};

export default PluginDocsTableSource;
