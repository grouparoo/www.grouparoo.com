import { Container, Row, Col } from "react-bootstrap";
import { loadMdxFile } from "../../utils/mdxUtils";
import hydrate from "next-mdx-remote/hydrate";
import { PageNavigation } from "../../components/PageNavigation";
import SEO from "../../components/SEO";

export default function Meet({ pageProps }) {
  const content = hydrate(pageProps.source, {});

  return (
    <>
      <SEO
        title="Grouparoo Hosted Services Addendum"
        path="/legal/hosted-services-addendum"
        canonical={true}
        description="Grouparoo Legal Documents: Hosted Services Addendum"
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
  const props = await loadMdxFile(
    ["data", "legal", "hosted-services-addendum.md"],
    {}
  );
  return { props };
}
