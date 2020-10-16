import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import path from "path";
import fs from "fs";
import glob from "glob";

import Image from "../../components/blog/image";
import { Alert, Card } from "react-bootstrap";

const components = { Image, Alert, Card };

export default function TestPage({ pageProps }) {
  const { source, frontMatter } = pageProps;
  const content = hydrate(source, { components });
  return (
    <div className="wrapper">
      <h1>{frontMatter.title}</h1>
      {content}
    </div>
  );
}

export async function getStaticProps({ params }) {
  //   const source = `
  // ---
  // title: Test
  // ---

  // Some **mdx** text, with a component
  //   `;

  const file = path.join(process.cwd(), "pages", "blog", `${params.post}.mdx`);
  const source = fs.readFileSync(file);
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, { components, scope: data });
  return { props: { source: mdxSource, frontMatter: data } };
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "pages", "blog");
  const paths = glob
    .sync(path.join(dir, "*.mdx"))
    .map((p) => path.parse(p).base)
    .map((p) => p.split(".")[0])
    .map((p) => `/blog/${p}`);

  return {
    paths,
    fallback: false,
  };
}
