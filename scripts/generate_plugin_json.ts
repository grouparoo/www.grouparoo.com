import fs from "fs";
import path from "path";

import docsNavData from "../data/docs-nav";
import { Plugin, PluginData } from "../data/plugins";

const baseUrl = "https://www.grouparoo.com";

export interface PluginManifestItem {
  name: string;
  description?: string;
  imageUrl: string;
  packageName: string;
  source: boolean;
  destination: boolean;
  npmUrl: string;
  docsUrl?: string;
}

const manifestFilePath = path.join(
  __dirname,
  "../public/plugins/v1/manifest.json"
);

const manifestFileDir = path.dirname(manifestFilePath);
if (!fs.existsSync(manifestFileDir)) {
  fs.mkdirSync(manifestFileDir, { recursive: true });
}

const localPluginPaths = docsNavData
  .find((plugin) => plugin.title === "Plugins")
  .children.map((plugin) => plugin.path);

console.log(localPluginPaths);

const pluginDocsUrl = (plugin: Plugin) => {
  const name = plugin.packageName
    .replace(/\@/g, "") // Characters to remove
    .replace(/[\ \/]/g, "-"); // Characters to replace with a hyphen
  const localPath = `/docs/plugins/${name}`;
  console.log(localPath);

  return localPluginPaths.includes(localPath) ? `${baseUrl}${localPath}` : null;
};

const manifestData = PluginData.map((plugin): PluginManifestItem => {
  const {
    name,
    description,
    logo,
    packageName,
    slug,
    primaryType,
    otherTypes,
  } = plugin;
  return {
    name,
    description,
    imageUrl: `${baseUrl}/images/home/integrations/${slug}/${logo}`,
    packageName,
    source: primaryType === "source" || otherTypes.includes("source"),
    destination:
      primaryType === "destination" || otherTypes.includes("destination"),
    npmUrl: `https://www.npmjs.com/package/${packageName}`,
    docsUrl: pluginDocsUrl(plugin),
  };
})
  .filter(({ source, destination }) => source || destination)
  .sort((a, b) => (a.name > b.name ? 1 : -1));

fs.writeFileSync(manifestFilePath, JSON.stringify(manifestData, null, 2));

console.log(`Wrote plugin manifest file to: ${manifestFilePath}`);
