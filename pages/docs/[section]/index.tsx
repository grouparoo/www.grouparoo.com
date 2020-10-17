import Head from "next/head";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import rehypePrism from "@mapbox/rehype-prism";
import fs from "fs";
import path from "path";
import glob from "glob";
import matter from "gray-matter";
import {
  TableOfContents,
  capitalize,
} from "../../../components/docs/tableOfContents";
import HavingProblems from "../../../components/docs/havingProblems";
import DocImage from "../../../components/docs/image";

const components = { HavingProblems, Image: DocImage };

export default function DocPage({ pageProps }) {
  const { source, frontMatter, entries } = pageProps;
  const content = hydrate(source, { components });

  return (
    <>
      <Head>
        <title>Grouparoo Docs: {frontMatter.title}</title>
        <meta name="description" content={frontMatter.pullQuote} />
        <link
          rel="canonical"
          href={`http://www.grouparoo.com${frontMatter.path}`}
        />
      </Head>

      <Container>
        {frontMatter.path !== "/docs/index" ? (
          <Breadcrumb>
            {frontMatter.path
              .split("/")
              .splice(1)
              .map((part, idx) => (
                <Breadcrumb.Item
                  key={`breadcrumb-${idx}`}
                  href={`${frontMatter.path
                    .split("/")
                    .filter((_p, i) => i <= idx + 1)
                    .join("/")}`}
                >
                  {capitalize(part)}
                </Breadcrumb.Item>
              ))}
          </Breadcrumb>
        ) : null}
        <Row>
          <Col className="d-none d-md-block">
            <TableOfContents entries={entries} />
          </Col>

          <Col
            xl={9}
            lg={9}
            md={8}
            sm={12}
            xs={12}
            className="documentationPage"
          >
            <h1>{frontMatter.title}</h1>
            <small>
              <em>Last Updated: {frontMatter.date}</em>
            </small>
            <hr />
            <div>{content}</div>
          </Col>

          <Col className="d-md-none">
            <TableOfContents entries={entries} />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export async function getStaticProps({ params }) {
  const mdxOptions = {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrism, {}]],
    extendFrontMatter: {
      process: (mdxContent, frontMatter) => {},
      phase: "both",
    },
  };

  const entries = [];
  const dir = path.join(process.cwd(), "pages", "docs");
  const files = glob.sync(path.join(dir, `**`, `*.mdx`));

  for (const i in files) {
    const source = fs.readFileSync(files[i]);
    const { data } = matter(source);
    data.path =
      "/docs" +
      files[i]
        .replace(path.join(process.cwd(), "pages", "docs"), "")
        .split(".")[0];
    entries.push(data);
  }

  const file = path.join(
    process.cwd(),
    "pages",
    "docs",
    `${params.page ? `${params.section}/${params.page}` : params.section}.mdx`
  );
  const source = fs.readFileSync(file);
  const { content, data } = matter(source);
  data.path =
    "/docs" +
    file.replace(path.join(process.cwd(), "pages", "docs"), "").split(".")[0];
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
    mdxOptions,
  });

  return { props: { source: mdxSource, frontMatter: data, entries } };
}

export async function getStaticPaths(depth = 1) {
  const dir = path.join(process.cwd(), "pages", "docs");
  const paths = glob
    .sync(path.join(dir, "**", "*.mdx"))
    .map((p) => p.replace(path.join(process.cwd(), "pages", "docs"), ""))
    .map((p) => p.split(".")[0])
    .map((p) => `/docs${p}`)
    .filter((p) => p.split("/").length === depth + 2);

  return {
    paths,
    fallback: false,
  };
}
