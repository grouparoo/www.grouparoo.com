import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import cheerio from "cheerio";
import hydrate from "next-mdx-remote/hydrate";
import { loadMdxFile } from "../utils/mdxUtils";

const components = {
  TableOfContents: function () {
    return null;
  },
};

export default function DataSync({ pageProps }) {
  const toc = pageProps.tableOfContents;
  function dataTOC() {
    return <TOC tableOfContents={toc} />;
  }

  const content = hydrate(pageProps.source, {
    components: Object.assign({}, components, { TableOfContents: dataTOC }),
  });

  return (
    <>
      <Head>
        <title>Data Sync Apps</title>
        <meta
          name="description"
          content="Key tenants on how to build apps that sync customer data."
        />
        <link rel="canonical" href="https://www.grouparoo.com/data-sync-apps" />
      </Head>

      <Container>
        <Row>
          <Col>
            <h1>Data Sync Apps</h1>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <div className="mdxContent">{content}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { source } = await loadMdxFile(
    ["components", "documents", "data-sync-apps.mdx"],
    components
  );
  const tableOfContents = parseTableOfContents(source);

  return {
    props: { tableOfContents, source },
  };
}

function parseTableOfContents(source) {
  const html = source.renderedOutput;
  const tableOfContents = [];

  const $ = cheerio.load(html);
  const headers = $("h2, h3");
  let h2 = null;
  for (let i = 0; i < headers.length; i++) {
    const header = $(headers[i]);
    const name = header.prop("tagName");
    const id = header.attr("id");
    const text = header.text();
    if (!name || !id || !text) {
      continue;
    }
    const href = `#${id}`;
    const elem = {
      text,
      href,
    };
    if (name === "H2") {
      h2 = Object.assign(elem, { children: [] });
      tableOfContents.push(h2);
    } else if (h2) {
      h2.children.push(elem);
    }
  }
  return tableOfContents;
}

function TOC({ tableOfContents }) {
  return (
    <Row style={{ marginTop: 20, marginBottom: 50 }}>
      <Col className="d-flex justify-content-center">
        <div
          style={{
            padding: "10px 25px 10px 25px",
            lineHeight: 2,
            display: "inline-block",
          }}
          className="border border-primary"
        >
          <>
            {tableOfContents.map(({ href, text, children }) => (
              <>
                <strong>
                  <a href={href}>{text}</a>
                </strong>
                <ul>
                  {children.map(({ href, text }) => (
                    <li>
                      <a href={href}>{text}</a>
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </>
        </div>
      </Col>
    </Row>
  );
}
