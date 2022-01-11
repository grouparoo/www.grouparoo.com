import { Container, Row, Col } from "react-bootstrap";
import { loadMdxFile } from "./../../utils/mdxUtils";
import hydrate from "next-mdx-remote/hydrate";
import { PageNavigation } from "../../components/PageNavigation";
import SEO from "../../components/SEO";

export default function Meet({ pageProps }) {
  const content = hydrate(pageProps.source, {});

  return (
    <>
      <SEO
        title="Grouparoo Privacy Policy"
        path="/legal/privacy"
        canonical={true}
      />

      <Container className="mb-5">
        <Row>
          <Col md={9}>{content}</Col>
          <Col md={3}>
            <div
              style={{
                position: "sticky",
                top: 10,
              }}
            >
              <PageNavigation />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const props = await loadMdxFile(["data", "legal", "privacy.md"], {});
  return { props };
}
