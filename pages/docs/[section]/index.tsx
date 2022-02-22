import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import hydrate from "next-mdx-remote/hydrate";
import { TableOfContents } from "../../../components/docs/TableOfContents";
import { PageNavigation } from "../../../components/PageNavigation";
import * as components from "../../../components/docs/Index";
import { loadMdxFile, getStaticMdxPaths } from "../../../utils/mdxUtils";
import SEO from "../../../components/SEO";

export default function DocPage({ pageProps }) {
  const { source, frontMatter, path, breadcrumbs } = pageProps;
  const content = hydrate(source, { components });

  return (
    <>
      <SEO
        canonical={true}
        description={frontMatter.pullQuote}
        image={frontMatter.image}
        path={path}
        title={`${frontMatter.title} | Grouparoo`}
      />

      <Container>
        {path !== "/docs/index" ? (
          <Breadcrumb>
            {breadcrumbs.map(({ title, path }, idx) => (
              <Breadcrumb.Item key={idx} href={path}>
                {title}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        ) : null}
        <Row>
          <Col className="d-none d-md-block">
            <PageNavigation pageNavSelector={frontMatter.pageNavSelector} />
            <br />
            <TableOfContents />
          </Col>

          <Col className="d-md-none">
            <PageNavigation />
            <br />
          </Col>

          <Col
            xl={9}
            lg={9}
            md={8}
            sm={12}
            xs={12}
            className="documentationPage"
          >
            {frontMatter.hideTitle ? (
              ""
            ) : (
              <>
                <h1>{frontMatter.title}</h1>
                <small>
                  <em>Last Updated: {frontMatter.date}</em>
                </small>
                <hr />
              </>
            )}

            <div>{content}</div>
            <components.HavingProblems />
          </Col>

          <Col className="d-md-none">
            <TableOfContents />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps({ params }) {
  let dirParts = ["pages", "docs", params.section, params.page, params.subpage];
  dirParts = `${dirParts.filter((x) => x).join("/")}.mdx`.split("/");

  const { source, frontMatter, path, breadcrumbs } = await loadMdxFile(
    dirParts,
    components
  );

  return { props: { source, frontMatter, path, breadcrumbs } };
}

export async function getStaticPaths(args: { depth: number }) {
  const depth = args.depth || 1;
  return getStaticMdxPaths(["pages", "docs"], depth);
}
