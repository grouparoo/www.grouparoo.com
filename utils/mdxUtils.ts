import fs from "fs";
import path from "path";
import glob from "glob";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";

// markdown plugins
import rehypePrism from "@mapbox/rehype-prism";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import externalLinks from "remark-external-links";

import { titleize } from "../utils/inflectors";

const dirname = __dirname;
let rootDir;
if (!dirname || dirname === "/") {
  rootDir = path.resolve(path.join(process.cwd()));
} else {
  rootDir = path.resolve(path.join(__dirname, ".."));
}
const pagesDir = path.join(rootDir, "pages");

export const mdxOptions = {
  remarkPlugins: [[externalLinks, { target: "_blank" }]],
  rehypePlugins: [
    [rehypeSlug, {}],
    [rehypeAutolinkHeadings, { behavior: "wrap" }],
    [rehypePrism, {}],
  ],
};

export async function loadMdxFile(dirParts: string[], components) {
  const fullPath = path.resolve(path.join(rootDir, ...dirParts));
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
    getBreadcrumbs(fullPath),
    getMetadata(fullPath)
  );
}

export function loadEntries(dirParts: string[]) {
  const entries = [];
  const rootPath = path.resolve(path.join(rootDir, ...dirParts));
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
  if (!fs.existsSync(rootDir)) {
    throw new Error(`mdx paths does not exist: ${rootDir}`);
  }
  const paths = glob
    .sync(path.join(rootDir, ...dirParts, "**", "*.mdx"))
    .map((p) => p.replace(pagesDir, ""))
    .map((p) => p.split(".")[0])
    .filter((p) => p.split("/").length === depth + 2);

  return {
    paths,
    fallback: false,
  };
}

/**
 * Given an absolute path to a page, build an array of breadcrumb objects. Look
 * for MDX files at every segment in the path to extract the title. If they
 * don't exist, use the path segment to generate the title.
 *
 * @param fullPath Path to the file
 */
export function getBreadcrumbs(fullPath: string) {
  // The path the to the page (e.g. "/docs/deployment/docker")
  const fullPagePath = fullPath.replace(pagesDir, "").replace(/.mdx/g, "");
  // Split the path into individual segments. The first one is an empty string
  // because we would have had a leading slash.
  const pathParts = fullPagePath.split("/");
  // Initialize breadcrumbs object.
  let breadcrumbs = [];
  // Step through each of the segments in the path, starting with the empty one.
  pathParts.reduce((prev, curr) => {
    // Path to this segment, from the pages directory.
    const pagePath = `${prev}/${curr}`;
    // Absolute path to the file we're looking for.
    const filePath = `${path.join(pagesDir, pagePath)}.mdx`;
    // The default title is a titleized version of the segment, in case we can't
    // find the file.
    let title = titleize(curr).replace(/-/g, " ");
    // If the file does exist ...
    if (fs.existsSync(filePath)) {
      // Read it.
      const content = fs.readFileSync(filePath);
      // Extract the frontmatter.
      const { data } = matter(content);
      // Look for a title value, and set the title if it's there.
      if (data.breadcrumb_label || data.title) {
        title = data.breadcrumb_label || data.title;
      }
    }
    // Add the breadcrumb object.
    breadcrumbs.push({ title, path: pagePath });
    // Return the path to the next iteration so we can build on top of it.
    return pagePath;
  });
  // Return the breadcrumbs object.
  return { breadcrumbs };
}
