import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import cheerio from "cheerio";
import hydrate from "next-mdx-remote/hydrate";
import { loadMdxFile } from "../utils/mdxUtils";
import SEO from "../components/SEO";

const components = {};

export default function DataSync({ pageProps }) {
  const headerContent = hydrate(pageProps.header.source, { components });
  const dataRows = pageProps.data.tableOfContents;
  const dataContent = hydrate(pageProps.data.source, { components });
  const orgRows = pageProps.organization.tableOfContents;
  const orgContent = hydrate(pageProps.organization.source, { components });

  return (
    <>
      <SEO
        title="Data Sync Apps"
        description="Key tenants on how to build apps that sync customer data."
        path="/data-sync-apps"
        canonical={true}
      />

      <Container>
        <Row>
          <Col>
            <h1>Data Sync Apps</h1>
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <div className="mdxContent">{headerContent}</div>
          </Col>
        </Row>
        <Row style={{ marginTop: 20, marginBottom: 50 }}>
          <Col md={9} className="d-flex justify-content-center">
            <TableOfContents data={dataRows} organization={orgRows} />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <div className="mdxContent">
              {dataContent}
              <br />
              {orgContent}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function TableOfContents({ data, organization }) {
  const dataRows = data.map((row) => (
    <li key={row.text}>
      <a href={row.href}>{row.text}</a>
    </li>
  ));
  const orgRows = organization.map((row) => (
    <li key={row.text}>
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
        <strong>
          <a href="#data">Data</a>
        </strong>
        <ul>{dataRows}</ul>
        <strong>
          <a href="#organization">Organization</a>
        </strong>
        <ul>{orgRows}</ul>
      </>
    </div>
  );
}

export async function getStaticProps() {
  const header = await getDocument("data-sync-header.mdx");
  const data = await getDocument("data-sync-data.mdx");
  const organization = await getDocument("data-sync-organization.mdx");
  return {
    props: { header, data, organization },
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
