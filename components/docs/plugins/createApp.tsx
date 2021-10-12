import Link from "next/link";

import { PluginData } from "../../../data/plugins";

import { Alert } from "../";
import CodeBlock from "./codeBlock";
import OptionsList from "./optionsList";

const PluginDocsCreateApp = ({ plugin }: { plugin: string }) => {
  if (!plugin) return null;

  const pluginData = PluginData.find(({ name }) => name === plugin);
  const cmdName = pluginData.slug;
  const appId = `my_${cmdName.replace("-", "_")}_app`;
  const appConfigPath = `config/apps/${appId}.js`;

  const appConfigCode: string = `
// ${appConfigPath}

exports.default = async function buildConfig() {
  return [
    {
      class: "app",
      id: "${appId}",
      name: "${appId}",
      type: "${cmdName}",
      options: {
        ${Object.entries(pluginData.configOptions || {})
          .map(([name, option]) => `${name}: ${option.default || '"..."'},`)
          .join("\n        ")}
      }
    },
  ];
};

  `;

  return (
    <div>
      <h2 id={`create-${plugin}-app`}>Create a {plugin} App</h2>
      <p>
        With Grouparoo, an{" "}
        <Link href="/docs/getting-started/product-concepts#app">App</Link> is
        how we establish a connection with a source or Destination. Add this
        connection by generating an App:
      </p>
      <CodeBlock
        code={`grouparoo generate ${cmdName}:app ${appId}`}
        cli={true}
      />
      <Alert variant="primary">
        <p>
          Note that every Generator requires an <code>id</code> argument. It is
          a unique value describing the App you just created. It should be
          alphanumeric, lower case, without spaces, and unique among other
          objects of the same type (Apps).
        </p>
        <p className="mb-0">
          Here our <code>id</code> is <code>{appId}</code>.{" "}
          <Link href="/docs/cli/config#generate" passHref>
            <a>
              Learn more about the <code>generate</code> command
            </a>
          </Link>
          .
        </p>
      </Alert>
      <p>
        This will generate a file at <code>{appConfigPath}</code>. Open this
        file and{" "}
        <strong>
          edit the connection details to match your desired configuration
        </strong>
        . Here is an example of what this config object will look like after
        generation:
      </p>
      <CodeBlock code={appConfigCode} language="javascript" />
      <Alert variant="primary">
        <p className="mb-0">
          Every config object has a similar starting shape.{" "}
          <Link href="/docs/config/code-config#config-object-shapes">
            Learn more about config object shapes
          </Link>
          .
        </p>
      </Alert>
      {pluginData.configOptions && (
        <>
          <h3 id={`${cmdName}-app-options`}>{plugin} App Options</h3>
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
