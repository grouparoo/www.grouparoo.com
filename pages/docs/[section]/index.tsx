import Head from "next/head";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import hydrate from "next-mdx-remote/hydrate";
import {
  TableOfContents,
  capitalize,
} from "../../../components/docs/tableOfContents";
import * as components from "../../../components/docs";
import {
  loadEntries,
  loadMdxFile,
  getStaticMdxPaths,
} from "../../../utils/mdxUtils";

export default function DocPage({ pageProps }) {
  const { source, frontMatter, docs, path } = pageProps;
  const content = hydrate(source, { components });

  return (
    <>
      <Head>
        <title>Grouparoo Docs: {frontMatter.title}</title>
        <meta name="description" content={frontMatter.pullQuote} />
        <link rel="canonical" href={`https://www.grouparoo.com${path}`} />
      </Head>

      <Container>
        {path !== "/docs/index" ? (
          <Breadcrumb>
            {path
              .split("/")
              .splice(1)
              .map((part, idx) => (
                <Breadcrumb.Item
                  key={`breadcrumb-${idx}`}
                  href={`${path
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
            <TableOfContents docs={docs} />
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
            <TableOfContents docs={docs} />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export async function getStaticProps({ params }) {
  const dirParts = ["docs"];
  if (params.page) {
    dirParts.push(params.section);
    dirParts.push(`${params.page}.mdx`);
  } else {
    dirParts.push(`${params.section}.mdx`);
  }

  const { source, frontMatter, path } = await loadMdxFile(dirParts, components);
  const docs = loadEntries(["docs"]);

  return { props: { source, frontMatter, docs, path } };
}

export async function getStaticPaths(args: { depth: number }) {
  const depth = args.depth || 1;
  return getStaticMdxPaths(["docs"], depth);
}
