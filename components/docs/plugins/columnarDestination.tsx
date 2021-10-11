// import Link from "next/link";

import { PluginConfigOptions } from "../../../data/plugins";

import CodeBlock from "./codeBlock";
import OptionsList from "./optionsList";

const PluginDocsColumnarDestination = ({ plugin }: { plugin: string }) => {
  const slug = plugin.toLowerCase();

  const destOptions: PluginConfigOptions = {
    table: {
      description:
        "The name of the table which Grouparoo which use to export **Records**.",
    },
    primaryKey: { description: "The primary key for the specified table." },
    groupsTable: {
      description:
        "Grouparoo also exports group memberships. This is the table used to export Group data.",
    },
    groupForeignKey: {
      description:
        "The foreign key that the groups table uses to reference the records table.",
    },
    groupColumnName: {
      description: "The column name used to store the Group name values.",
    },
  };

  return (
    <>
      <h2 id={`create-${slug}-destination`}>Create a {plugin} Destination</h2>

      <p>
        {plugin} is one of the few integrations that can be both a Source and a
        Destination. You can use Grouparoo to export data to a {plugin}{" "}
        database. Like a Source, a Destination requires that you've already
        configured an App to describe the connection details to you {plugin}{" "}
        database.
      </p>

      <p>
        Once your App exists, you can generate the config file for the
        Destination:
      </p>

      <CodeBlock
        code={`grouparoo generate ${slug}:destination my_exports`}
        cli={true}
      />

      <p>
        This would generate a config file at{" "}
        <code>config/destinations/my_export.js</code>
        in your Grouparoo project. Edit this file to match your desired
        configuration.
      </p>

      <p>The {plugin} Destination has a few unique options:</p>

      <OptionsList options={destOptions} />
    </>
  );
};

export default PluginDocsColumnarDestination;
