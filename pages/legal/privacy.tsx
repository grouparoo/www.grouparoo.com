import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { loadMdxFile } from "./../../utils/mdxUtils";
import hydrate from "next-mdx-remote/hydrate";
import { PageNavigation } from "../../components/pageNavigation";

export default function Meet({ pageProps }) {
  const content = hydrate(pageProps.source, {});

  return (
    <>
      <Head>
        <title>Grouparoo Privacy Policy</title>
        <link rel="canonical" href="https://www.grouparoo.com/legal/privacy" />
      </Head>

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
