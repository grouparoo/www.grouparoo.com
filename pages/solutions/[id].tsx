import React from "react";
import { useRouter } from "next/router";
import {
  ComparisonInfo,
  CategoryInfo,
  getSolutionsData,
} from "../../utils/solutionsPages";
import ComparisonPage from "../../components/solutions/comparisonPage";
import CategoryPage from "../../components/solutions/categoryPage";
import * as components from "../../components/solutions";

export default function SolutionsPage({ pageProps }) {
  const router = useRouter();
  const { solutionData } = pageProps;

  let pageContent = solutionData.hasOwnProperty("category") ? (
    <CategoryPage {...(solutionData as CategoryInfo)} />
  ) : (
    <ComparisonPage {...(solutionData as ComparisonInfo)} />
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
      { params: { id: "reverse-etl" } },
      { params: { id: "customer-data-platform" } },
    ],
    fallback: false,
  };
}
