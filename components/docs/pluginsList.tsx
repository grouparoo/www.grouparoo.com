import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const url = "https://registry.npmjs.com/-/v1/search";
import DocsNav from "../../data/docs-nav";

interface NPMPackage {
  name: string;
  scope: string;
  version: string;
  description: string;
  date: string;
  links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  };
  url: string;
}

const ignoredPlugins = [
  "@grouparoo/ui",
  "@grouparoo/ui-components",
  "@grouparoo/client-web",
];

export default function PluginsList() {
  const [plugins, setPlugins] = useState<NPMPackage[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, []);

  async function load(query = "@grouparoo") {
    setLoading(true);
    const response = await fetch(`${url}?text=${query}&size=250`).then((r) =>
      r.json()
    );
    setLoading(false);

    if (!response.objects) return;

    const isPluginDoc = (plugin) => plugin.title === "Plugins";
    const pluginPath = (plugin) => plugin.path;
    const localPluginPaths = DocsNav.find(isPluginDoc).children.map(pluginPath);

    const pluginDocsUrl = (pkg: { name: string; links: { npm: string } }) => {
      const name = pkg.name
        .replace(/\@/g, "") // Characters to remove
        .replace(/[\ \/]/g, "-"); // Characters to replace with a hyphen
      const localPath = `/docs/plugins/${name}`;
      return localPluginPaths.includes(localPath) ? localPath : pkg.links.npm;
    };

    const packages: NPMPackage[] = response.objects
      .filter((o) => o.package)
      .map((o) => ({ ...o.package, url: pluginDocsUrl(o.package) }))
      .filter((o) => !ignoredPlugins.includes(o.name))
      .sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });

    setPlugins(packages);
  }

  return (
    <Table size="sm" striped bordered hover style={{ fontSize: "14px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Version</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td colSpan={3} style={{ textAlign: "center" }}>
              <em>Loading...</em>
            </td>
          </tr>
        ) : (
          plugins.map((plugin) => (
            <tr key={plugin.name}>
              <td style={{ width: 210 }}>
                <a href={plugin.url}>{plugin.name}</a>
              </td>
              <td>{plugin.version}</td>
              <td>{plugin.description}</td>
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
}
