import React from "react";
import { useRouter } from "next/router";
import { getSolutionsData } from "../../utils/solutionsPages";
import ComparisonPage from "../../components/solutions/ComparisonPage";
import CategoryPage from "../../components/solutions/CategoryPage";
import * as components from "../../components/solutions/Index";

export default function SolutionsPage({ pageProps }) {
  const router = useRouter();
  const { solutionData } = pageProps;

  let pageContent = solutionData.hasOwnProperty("category") ? (
    <CategoryPage {...solutionData} />
  ) : (
    <ComparisonPage {...solutionData} />
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
      { params: { id: "modern-data-stack" } },
    ],
    fallback: false,
  };
}
