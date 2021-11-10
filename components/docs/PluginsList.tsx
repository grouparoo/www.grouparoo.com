import { Table } from "react-bootstrap";
import Link from "next/link";
import pluginData from "../../public/plugins/v1/manifest.json";
import { PluginManifestItem } from "../../scripts/generate_plugin_json";

const PluginDocsLink = (plugin: PluginManifestItem) => {
  if (!plugin.docsUrl) return <span>{plugin.name}</span>;
  return <Link href={plugin.docsUrl}>{plugin.name}</Link>;
};

export default function PluginsList() {
  return (
    <Table size="sm" striped bordered hover style={{ fontSize: "14px" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Package Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {pluginData.map((plugin) => (
          <tr key={plugin.name}>
            <td style={{ width: 210 }}>
              <PluginDocsLink {...plugin} />
            </td>
            <td>
              <a href={plugin.npmUrl} target="_blank" rel="noreferrer">
                {plugin.packageName}
              </a>
            </td>
            <td>{plugin.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
