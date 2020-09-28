import Head from "next/head";
import { Fragment } from "react";
import DocEngine, { DocEntry } from "../../utils/docEngine";
import { Container, Row, Col, Breadcrumb, Card } from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";

export default function DocsPageLayout({ frontMatter, children: content }) {
  const entry = new DocEntry(frontMatter);

  return (
    <>
      <Head>
        <title>Grouparoo Docs: {entry.title}</title>
        <meta name="description" content={entry.pullQuote} />
        <link rel="canonical" href={`http://www.grouparoo.com${entry.path}`} />
      </Head>

      <Container>
        {entry.path !== "/docs/index" ? (
          <Breadcrumb>
            {entry.path
              .split("/")
              .splice(1)
              .map((part, idx) => (
                <Breadcrumb.Item
                  key={`breadcrumb-${idx}`}
                  href={`${entry.path
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
            <TableOfContents />
          </Col>
          <Col
            xl={9}
            lg={9}
            md={8}
            sm={12}
            xs={12}
            className="documentationPage"
          >
            <h1>{entry.title}</h1>
            <small>
              <em>Last Updated: {entry.date.toLocaleDateString()}</em>
            </small>
            <hr />
            <div>{content}</div>
          </Col>
          <Col className="d-md-none">
            <TableOfContents />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

export function TableOfContents() {
  const tableOfContents = DocEngine.getTableOfContents();
  const router = useRouter();
  const highlightColor = "#fd7e14";

  return (
    <>
      <Card>
        <Card.Header>Grouparoo Docs</Card.Header>
        <Card.Body>
          <small>
            {Object.keys(tableOfContents).map((section) => {
              return (
                <Fragment key={`toc-section-${section}`}>
                  <Link href={`/docs/${section}`}>
                    <a
                      style={{
                        color:
                          router.pathname === `/docs/${section}`
                            ? highlightColor
                            : undefined,
                      }}
                    >
                      <strong>{capitalize(section)}</strong>
                    </a>
                  </Link>
                  {tableOfContents[section].map((entry) => (
                    <li key={`toc-${section}-${entry.title}`}>
                      <Link href={entry.path}>
                        <a
                          style={{
                            color:
                              router.pathname === entry.path
                                ? highlightColor
                                : undefined,
                          }}
                        >
                          {entry.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </Fragment>
              );
            })}
          </small>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

function capitalize(word: string) {
  return word
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
