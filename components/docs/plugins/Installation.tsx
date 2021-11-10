import Link from "next/link";

import { PluginData } from "../../../data/plugins";
import CodeBlock from "./CodeBlock";

const packageJsonAfterInstallation = (pkgName) => `
// package.json

{
  // ...
  "dependencies": {
    "${pkgName}": "...",
    // ...
  },
  "grouparoo": {
    "plugins": [
      "${pkgName}",
      // ...
    ]
  }
}
`;

const PluginDocsInstallation = ({ plugin }: { plugin: string }) => {
  if (!plugin) return null;

  const pluginData = PluginData.find(({ name }) => name === plugin);

  return (
    <>
      <h2 id={`installing-${plugin}-plugin`}>Install the {plugin} Plugin</h2>
      <p>
        To work with the {plugin}{" "}
        <Link href="/docs/getting-started/product-concepts#plugin">Plugin</Link>
        , you must first install it in an existing Grouparoo project. You can do
        this using <code>grouparoo config</code> and choosing to add the new
        App. You can also install a plugin with the Grouparoo CLI and use{" "}
        <Link href="/docs/cli/setup#install">
          <span>
            the <code>install</code> command
          </span>
        </Link>{" "}
        from <Link href="/docs/cli">our CLI</Link>:{" "}
        <code>grouparoo install {pluginData.packageName}</code>
      </p>
      <p>
        Both methods of installation add the package to your{" "}
        <code>package.json</code> file as a dependency, and also drops the
        Plugin in the <code>grouparoo.plugins</code> section in that same file,
        which enables it.
      </p>
      <CodeBlock
        code={packageJsonAfterInstallation(pluginData.packageName)}
        language="json"
      />
      <p>
        Once the Plugin is installed, you'll be working primarily with{" "}
        <Link href="/docs/cli/config">the CLI's configuration commands</Link> to
        get everything set up.
      </p>
    </>
  );
};

export default PluginDocsInstallation;
