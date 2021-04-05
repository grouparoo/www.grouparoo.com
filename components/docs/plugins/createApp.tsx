import Link from "next/link";

import { PluginData, PluginConfigOptions } from "../../../data/plugins";

import { Alert } from "../";
import CodeBlock from "./codeBlock";
import Markdown from "./markdown";
import OptionsList from "./optionsList";

const PluginDocsCreateApp = ({ plugin }: { plugin: string }) => {
  if (!plugin) return null;

  const cmdName = plugin.toLowerCase();
  const pkgName = `@grouparoo/${cmdName}`;

  const pluginData = PluginData.find(({ name }) => name === plugin);

  return (
    <div>
      <h2 id={`creating-a-${plugin}-app`}>Creating a {plugin} App</h2>
      <p>
        With Grouparoo, an App is how we establish a connection with a source or
        destination. Add this connection by generating an App:
      </p>
      <CodeBlock
        code={`grouparoo generate ${cmdName}:app my_${cmdName}_app`}
        language="cli"
      />
      <Alert variant="primary">
        <p className="mb-0">
          Note that every generator requires an <code>id</code> argument. It is
          a unique value describing the App you just created. It should be
          alphanumeric, lower case, without spaces, and unique among other
          objects of the same type (Apps).
        </p>
      </Alert>
      <p>
        Here our <code>id</code> is <code>my_data_warehouse</code>.{" "}
        <Link href="/docs/cli/config#generate">
          <span>
            Learn more about the <code>generate</code> command
          </span>
        </Link>
        .
      </p>
      <p>
        This will generate a file at{" "}
        <code>config/apps/my_data_warehouse.js</code>. Open this file and{" "}
        <strong>
          edit the connection details to match your desired configuration
        </strong>
        .
      </p>
      <p>
        Every config object has a similar starting shape.{" "}
        <Link href="/docs/config/code-config#config-object-shapes">
          Learn more about config object shapes
        </Link>
        .
      </p>
      {pluginData.configOptions && (
        <>
          <p>
            Here are the {plugin}-specific options available to you in the{" "}
            <code>options</code> section of the config file:
          </p>
          <OptionsList options={pluginData.configOptions} />
        </>
      )}
    </div>
  );
};

export default PluginDocsCreateApp;
