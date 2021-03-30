import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import cheerio from "cheerio";
import hydrate from "next-mdx-remote/hydrate";
import { loadMdxFile } from "../utils/mdxUtils";

const components = {};

export default function DataSync({ pageProps }) {
  const dataRows = pageProps.data.tableOfContents;
  const dataContent = hydrate(pageProps.data.source, { components });

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
            <div className="mdxContent">
              <p>
                A data sync app connects customer data to one or more external
                systems, keeping them up-to-date.
              </p>
              <p>
                One or more data sync apps are built in every company by the
                time it reaches the scale to focus on the efficiency of the
                teams that require this data. For example, your Marketing team
                can do their job better if they know who has made a purchase.
                Sales, Customer Success, and Operations have similar needs.
              </p>
              <p>
                We have met with many of these companies and have distilled the
                best practices here.
              </p>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 20, marginBottom: 50 }}>
          <Col md={9} className="d-flex justify-content-center">
            <TableOfContents data={dataRows} />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <div className="mdxContent">{dataContent}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function TableOfContents({ data }) {
  console.log(data);
  const dataRows = data.map((row) => (
    <li>
      <a href={row.href}>{row.text}</a>
    </li>
  ));

  return (
    <div
      style={{
        padding: "10px 25px 10px 25px",
        lineHeight: 2,
        display: "inline-block",
      }}
      className="border border-primary"
    >
      <>
        <strong>Data</strong>
        <ul>{dataRows}</ul>
      </>
    </div>
  );
}

export async function getStaticProps() {
  const data = await getDocument("data-sync-data.mdx");
  return {
    props: { data },
  };
}

async function getDocument(fileName) {
  const { source } = await loadMdxFile(
    ["components", "documents", fileName],
    components
  );

  const tableOfContents = parseTableOfContents(source);
  return { tableOfContents, source };
}

function parseTableOfContents(source) {
  const html = source.renderedOutput;
  const table = [];

  const $ = cheerio.load(html);
  const headers = $("h3 a");
  for (let i = 0; i < headers.length; i++) {
    const header = $(headers[i]);
    const href = header.attr("href");
    const text = header.text();
    if (href && text) {
      table.push({ href, text });
    }
  }
  return table;
}
