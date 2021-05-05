import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import GetStarted from "../../components/home/getStarted";
import ComparisonTable from "../../components/solutions/comparisonTable";
import FeatureBanner from "../../components/solutions/featureBanner";
import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";

import { PageNavigation } from "../../components/pageNavigation";
import {
  ComparisonInfo,
  CategoryInfo,
  getSolutionsData,
} from "../../utils/solutionsPages";
import ComparisonPage from "../../components/solutions/comparisonPage";
import CategoryPage from "../../components/solutions/categoryPage";
import {
  arrayToReadableList,
  possessiveNoun,
  urlize,
} from "../../utils/inflectors";
import * as components from "../../components/solutions";
// import { TableOfContents } from "../../components/docs/tableOfContents";

export default function Comparison({ pageProps }) {
  const router = useRouter();
  const { solutionData } = pageProps;

  let pageContent = pageProps.hasOwnProperty("category") ? (
    <CategoryPage category={solutionData as CategoryInfo} />
  ) : (
    <ComparisonPage comp={solutionData as ComparisonInfo} />
  );

  return <>{pageContent}</>;
}

export async function getStaticProps({ params }) {
  const solutionData = await getSolutionsData(params.id, components);
  return { props: { solutionData } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "census-alternative" } },
      { params: { id: "segment-alternative" } },
      { params: { id: "hightouch-alternative" } },
    ],
    fallback: false,
  };
}
