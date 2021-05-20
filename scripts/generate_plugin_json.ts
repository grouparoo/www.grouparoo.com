import fs from "fs";
import path from "path";

import { PluginData } from "../data/plugins";

interface PluginManifestItem {
  name: string;
  description?: string;
  imageUrl: string;
  packageName: string;
  source: boolean;
  destination: boolean;
}

const manifestFilePath = path.join(
  __dirname,
  "../public/plugins/v1/manifest.json"
);

const manifestFileDir = path.dirname(manifestFilePath);
if (!fs.existsSync(manifestFileDir)) {
  fs.mkdirSync(manifestFileDir, { recursive: true });
}

const manifestData = PluginData.map(
  ({
    name,
    description,
    logo,
    packageName,
    slug,
    primaryType,
    otherTypes,
  }): PluginManifestItem => {
    return {
      name,
      description,
      imageUrl: `https://www.grouparoo.com/images/home/integrations/${slug}/${logo}`,
      packageName,
      source: primaryType === "source" || otherTypes.includes("source"),
      destination:
        primaryType === "destination" || otherTypes.includes("destination"),
    };
  }
)
  .filter(({ source, destination }) => source || destination)
  .sort((a, b) => (a.name > b.name ? 1 : -1));

fs.writeFileSync(manifestFilePath, JSON.stringify(manifestData, null, 2));

console.log(`Wrote plugin manifest file to: ${manifestFilePath}`);
