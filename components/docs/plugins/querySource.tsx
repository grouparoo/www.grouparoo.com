import Link from "next/link";

import { PluginConfigOptions, PluginData } from "../../../data/plugins";

import { Alert } from "..";
import CodeBlock from "./codeBlock";
import OptionsList from "./optionsList";

const PluginDocsQuerySource = ({
  plugin,
  isTablesUpperCase = false,
}: {
  plugin: string;
  isTablesUpperCase?: boolean;
}) => {
  const pluginData = PluginData.find(({ name }) => name === plugin);
  const table = pluginData.tableAlternative || "table";
  const column = pluginData.columnAlternative || "column";
  const queryLanguage =
    plugin === "Mongo" ? "MongoDB Query Language (MQL)" : "SQL";

  const querySchedule =
    plugin === "Mongo"
      ? `{
  options: {
    query: [
      {
        $match: {
          updatedAt: {
            $gt: "new Date(ISODate().getTime() - 1000 * 60 * 60 * 24 * 2)",
          },
        },
      },
      {
        $project: {
          _id: 1,
        },
      },
    ], 
    propertyId: "userId"
  }
}`
      : `{
  options: {
    query: "SELECT ${isTablesUpperCase ? "id".toUpperCase() : "id"} FROM ${
          isTablesUpperCase ? "users".toUpperCase() : "users"
        } WHERE ${
          isTablesUpperCase ? "updated_at".toUpperCase() : "updated_at"
        } >= (NOW() - INTERVAL '2 day')", propertyId: "userId"
  }
}`;

  const queryProperties =
    plugin === "Mongo"
      ? `{
  options: {
    query: [
      {
       $match: {
         user_id: {{userId}},
       },
      },
      {
       $group: {
         _id: null,
         total: {
           $sum: "$price",
         },
       },
      },
      {
       $project: {
         _id: 0,
       },
      },
    ],
  }
}`
      : `
{
  options: {
    query: "SELECT SUM(${
      isTablesUpperCase ? "price".toUpperCase() : "price"
    }) from ${
          isTablesUpperCase ? "purchases".toUpperCase() : "purchases"
        } where ${
          isTablesUpperCase ? "user_id".toUpperCase() : "user_id"
        } = {{userId}}";
  }
}`;

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
    querySchedule,
    queryProperties,
  };

  const optionLists: { [key: string]: PluginConfigOptions } = {
    tableSource: {
      table: {
        required: true,
        description: `Name of the ${table} in the {plugin} database.`,
      },
    },
    tableMapping: {
      column: {
        required: true,
        description: `The name of the ${column} to use as the high watermark.`,
      },
    },
    tableProperties: {
      column: {
        required: true,
        description: `The name of the ${column} to use for the Property.`,
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
        description: `A ${queryLanguage} query to return that tells Grouparoo which Profiles to check each time the interval occurs.`,
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

  return (
    <>
      <h2 id={`create-${pluginData.slug}-query-source`}>
        Create a {plugin} Query Source
      </h2>

      <p>
        You can generate a {plugin} Query Source using the <code>generate</code>{" "}
        command. You must specify a <code>parent</code>, which should match the{" "}
        <code>id</code> of the App you created.
      </p>

      <CodeBlock
        code={`grouparoo generate ${pluginData.slug}:query:source users --parent my_${pluginData.slug}_app`}
        cli={true}
      />

      <p>
        A Query Source is a more flexible way to build properties. With a Query
        Source, you can add custom {queryLanguage} commands to your Properties,
        which could pull data from one or more {table}s in your database.
      </p>

      {/* --- Options --- */}

      <h3 id="create-source-options">Query Source Options</h3>

      <p>
        The unique thing about the way a Query Source works is that there aren't
        any unique options for the Source itself.
      </p>

      {/* --- Schedule --- */}

      <h3 id="query-source-schedule">Query Source Schedule</h3>

      <p>
        Like a <Link href="#table-source-schedule">Table Source Schedule</Link>,
        a Query Source Schedule is included with the generated config file,
        commented. It has a couple unique options:
      </p>

      <OptionsList options={optionLists.querySchedule} />

      <Alert variant="warning">
        <p className="mb-1">
          <strong>Important!</strong>
        </p>
        <p className="mb-0">
          Be sure that your query only returns one {column} of data, and that it
          maps to the Grouparoo Property you set with{" "}
          <code>options.propertyId</code>.
        </p>
      </Alert>

      <p>Here's an example:</p>

      <CodeBlock code={codeBlocks.querySchedule} language="javascript" />

      <h3 id="query-source-properties">Query Source Properties</h3>

      <p>
        Query Sources are a little simpler than Table Sources when it comes to
        Properties. You can generate a Property using the CLI:
      </p>

      <CodeBlock
        code={`grouparoo generate ${pluginData.slug}:query:property lifetime_value --parent users`}
        cli={true}
      />

      <p>
        This will drop a file at{" "}
        <code>config/properties/lifetime_value.js</code>. Edit this file to
        match your desired configuration.
      </p>

      <p>There is one unique option for Query Source Properties:</p>

      <OptionsList options={optionLists.queryProperties} />

      <p>
        Here's an example that sums the values in the <code>price</code>{" "}
        {column} for rows in which the <code>user_id</code> {column}'s value
        matches the value of the Grouparoo Profile's <code>userId</code> field
        (i.e. <code>userId</code> is the <code>id</code> for the Property in
        Grouparoo):
      </p>

      <CodeBlock code={codeBlocks.queryProperties} language="javascript" />
    </>
  );
};

export default PluginDocsQuerySource;
