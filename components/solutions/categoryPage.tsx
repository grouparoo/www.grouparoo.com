import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Head from "next/head";
import GetStarted from "../home/getStarted";
import FeatureBanner from "./featureBanner";
import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";
import { PageNavigation } from "../pageNavigation";
import { CategoryInfo, getSolutionsData } from "../../utils/solutionsPages";
import {
  arrayToReadableList,
  possessiveNoun,
  urlize,
} from "../../utils/inflectors";
import * as components from ".";
// import { TableOfContents } from "../../components/docs/tableOfContents";

export default function CategoryPage(category: CategoryInfo) {
  // const category: CategoryInfo = pageProps.solutionData;
  const content = hydrate(category.source, { components });

  return (
    <>
      <Head>
        <title>Grouparoo: A {category.category}</title>
        <meta
          name="description"
          content={`Grouparoo is a ${
            category.category
          } tool, featuring ${arrayToReadableList(category.pros)}.`}
        />
        <link
          rel="canonical"
          href={`https://www.grouparoo.com/solutions/${urlize(
            category.category
          )}`}
        />
      </Head>

      <GetStarted />
    </>
  );
}
