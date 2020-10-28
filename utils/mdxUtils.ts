import fs from "fs";
import path from "path";
import glob from "glob";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";

// markdown plugins
import rehypePrism from "@mapbox/rehype-prism";
import externalLinks from "remark-external-links";

const dirname = __dirname;
let pagesDir;
if (!dirname || dirname === "/") {
  pagesDir = path.resolve(path.join(process.cwd(), "pages"));
} else {
  pagesDir = path.resolve(path.join(__dirname, "..", "pages"));
}

export const mdxOptions = {
  remarkPlugins: [[externalLinks, { target: "_blank" }]],
  rehypePlugins: [[rehypePrism, {}]],
};

export async function loadMdxFile(dirParts: string[], components) {
  const fullPath = path.resolve(path.join(pagesDir, ...dirParts));
  return loadMdxFilePath(fullPath, components);
}

function getMetadata(fullPath) {
  const relativePath = fullPath.replace(pagesDir, "").split(".")[0];
  const slug = path.basename(fullPath, ".mdx");
  return { filePath: fullPath, path: relativePath, slug };
}

export async function loadMdxFilePath(fullPath, components) {
  if (!fs.existsSync(fullPath)) {
    throw new Error(`mdx path does not exist: ${fullPath}`);
  }
  const file = fs.readFileSync(fullPath);
  const { content, data } = matter(file);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
    mdxOptions,
  });

  return Object.assign(
    {},
    { source: mdxSource, frontMatter: data },
    getMetadata(fullPath)
  );
}

export function loadEntries(dirParts: string[]) {
  const entries = [];
  const rootPath = path.resolve(path.join(pagesDir, ...dirParts));
  if (!fs.existsSync(rootPath)) {
    throw new Error(`entries path does not exist: ${rootPath}`);
  }
  const files = glob.sync(path.join(rootPath, "**", "*.mdx"));
  for (const i in files) {
    const source = fs.readFileSync(files[i]);
    const { data } = matter(source);
    entries.push(Object.assign({}, data, getMetadata(files[i])));
  }

  return entries;
}

export async function getStaticMdxPaths(dirParts: string[], depth = 1) {
  if (!fs.existsSync(pagesDir)) {
    throw new Error(`mdx paths does not exist: ${pagesDir}`);
  }
  const paths = glob
    .sync(path.join(pagesDir, ...dirParts, "**", "*.mdx"))
    .map((p) => p.replace(pagesDir, ""))
    .map((p) => p.split(".")[0])
    .filter((p) => p.split("/").length === depth + 2);

  return {
    paths,
    fallback: false,
  };
}
