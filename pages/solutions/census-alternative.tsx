import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import GetStarted from "../../components/home/getStarted";
import hydrate from "next-mdx-remote/hydrate";
import { loadMdxFile } from "../../utils/mdxUtils";
import CompHeader from "../../components/comps/compHeader";
import InfoBanner from "../../components/comps/infoBanner";

const components = {};

export default function VsCensus({ pageProps }) {
  const mdxContent = hydrate(pageProps.source, { components });

  return (
    <>
      <Head>
        <title>Grouparoo: Census Alternative</title>
        <meta
          name="description"
          content="Grouparoo is comparable to Census but wins on flexibility, data approach, Events support, and cost."
        />
        <link
          rel="canonical"
          href="https://www.grouparoo.com/solutions/census-alternative"
        />
      </Head>

      <CompHeader
        competitor="Census"
        compPro1="analytics"
        compPro2="customer data platform"
        pro1="flexibility"
        pro2="data approach"
        pro3="Event support"
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
    ["components", "documents", "vs-census.mdx"],
    components
  );

  return { props: { source } };
}
