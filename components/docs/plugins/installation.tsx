import Link from "next/link";
const PluginDocsInstallation = ({ plugin }: { plugin: string }) => {
  if (!plugin) return null;

  const pkgName = `@grouparoo/${plugin.toLowerCase()}`;

  return (
    <>
      <h2>Installing the {plugin} Plugin</h2>
      <p>
        To work with the {plugin} plugin, you must first install it in an
        existing Grouparoo project. You can do this using{" "}
        <Link href="/docs/cli/setup#install">
          <span>
            the <code>install</code> command
          </span>
        </Link>{" "}
        from <Link href="/docs/cli">our CLI</Link>:
      </p>
      <pre>
        <code>$ grouparoo install {pkgName}</code>
      </pre>
      <p>
        This adds the package to your <code>package.json</code> file as a
        dependency, and also drops the plugin in the{" "}
        <code>grouparoo.plugins</code> section in that same file, which enables
        it.
      </p>
      <p>
        Once the plugin is installed, you'll be working primarily with{" "}
        <Link href="/docs/cli/config">the CLI's configuration commands</Link> to
        get everything set up.
      </p>
    </>
  );
};

export default PluginDocsInstallation;
