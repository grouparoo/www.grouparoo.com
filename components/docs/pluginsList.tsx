import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
const url = "https://registry.npmjs.com/-/v1/search";

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
}

const ignoredPlugins = [
  "@grouparoo/ui",
  "@grouparoo/ui-components",
  "@grouparoo/client-web",
  "@grouparoo/app-templates",
  "@grouparoo/email-authentication",
  "@grouparoo/logger",
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

    const packages: NPMPackage[] = response.objects
      .filter((o) => o.package)
      .map((o) => o.package)
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
                <a target="_blank" href={plugin.links.npm}>
                  {plugin.name}
                </a>
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
