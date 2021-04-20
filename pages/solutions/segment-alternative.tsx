import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";
import GetStarted from "../../components/home/getStarted";
import hydrate from "next-mdx-remote/hydrate";
import { loadMdxFile } from "../../utils/mdxUtils";
import CompHeader from "../../components/comps/compHeader";
import InfoBanner from "../../components/comps/infoBanner";

const components = {};

export default function VsSegment({ pageProps }) {
  const mdxContent = hydrate(pageProps.source, { components });

  return (
    <>
      <Head>
        <title>Grouparoo: Segment Alternative</title>
        <meta
          name="description"
          content="Grouparoo is comparable to Segment but wins on developer workflow, data approach, privacy, and cost."
        />
        <link
          rel="canonical"
          href="https://www.grouparoo.com/solutions/segment-alternative"
        />
      </Head>

      <CompHeader
        competitor="Segment"
        compPro1="events"
        compPro2="customer data platform"
        pro1="developer workflow"
        pro2="data approach"
        pro3="privacy"
        pro4="cost"
      />

      <InfoBanner />

      <div className="homePageSection">
        <Container>
          <Row>
            <Col>
              <div className="mdxContent">{mdxContent}</div>
            </Col>
          </Row>
        </Container>
      </div>

      <GetStarted />
    </>
  );
}

export async function getStaticProps() {
  const { source } = await loadMdxFile(
    ["components", "documents", "vs-segment.mdx"],
    components
  );

  return { props: { source } };
}
