import fs from "fs";
import path from "path";
import glob from "glob";
import rehypePrism from "@mapbox/rehype-prism";
import renderToString from "next-mdx-remote/render-to-string";
import matter from "gray-matter";

export const mdxOptions = {
  remarkPlugins: [],
  rehypePlugins: [[rehypePrism, {}]],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "both",
  },
};

export async function loadMdxFile(dirParts: string[], components) {
  const pagesDir = path.join(process.cwd(), "pages");
  const source = fs.readFileSync(path.join(pagesDir, ...dirParts));
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
    mdxOptions,
  });

  return { source: mdxSource, frontMatter: data };
}

export async function loadEntries(dirParts: string[]) {
  const entries = [];
  const pagesDir = path.join(process.cwd(), "pages");
  const files = glob.sync(path.join(pagesDir, ...dirParts, "**", "*.mdx"));
  for (const i in files) {
    const source = fs.readFileSync(files[i]);
    const { data } = matter(source);
    data.path = files[i].replace(pagesDir, "").split(".")[0];
    entries.push(data);
  }

  return entries;
}

export async function getStaticMdxPaths(dirParts: string[], depth = 1) {
  const pagesDir = path.join(process.cwd(), "pages");
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
