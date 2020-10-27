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
console.log({ pagesDir });

export const mdxOptions = {
  remarkPlugins: [[externalLinks, { target: "_blank" }]],
  rehypePlugins: [[rehypePrism, {}]],
};

export async function loadMdxFile(dirParts: string[], components) {
  const fullPath = path.resolve(path.join(pagesDir, ...dirParts));
  return loadMdxFilePath(fullPath, components);
}

export async function loadMdxFilePath(fullPath, components) {
  const file = fs.readFileSync(fullPath);
  const { content, data } = matter(file);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
    mdxOptions,
  });

  return { source: mdxSource, frontMatter: data };
}

export async function loadEntries(dirParts: string[]) {
  const entries = [];
  const rootPath = path.resolve(path.join(pagesDir, ...dirParts));
  const files = glob.sync(path.join(rootPath, "**", "*.mdx"));
  for (const i in files) {
    const source = fs.readFileSync(files[i]);
    const { data } = matter(source);
    data.path = files[i].replace(pagesDir, "").split(".")[0];
    data.filePath = files[i];
    data.slug = path.basename(files[i], ".mdx");
    entries.push(data);
  }

  return entries;
}

export async function getStaticMdxPaths(dirParts: string[], depth = 1) {
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
