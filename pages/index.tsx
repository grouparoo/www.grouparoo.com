import { useEffect } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import Head from "next/head";
import Link from "next/link";
import HomepageCodeBox from "../components/home/HomepageCodeBox";
import IntegrationsSection from "../components/home/IntegrationsSection";
import SmallIntegration from "../components/home/SmallIntegration";
import WhyOpenSource from "../components/home/WhyOpenSource";
import CustomerTestimonials from "../components/home/CustomerTestimonials";
import { randomHomepagePlugins } from "../data/plugins";
import { getReleaseNotes } from "../utils/releaseNotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageInBrowserFrame from "../components/ImageInBrowserFrame";
import { Header } from "../components/home/Header";

export default function IndexPage({ pageProps, setReleaseNote }) {
  const {
    pluginNames,
    releaseNote,
  }: { pluginNames: string[]; releaseNote: any } = pageProps;
  const title = "Grouparoo: Open Source Data Synchronization Framework";
  const description =
    "Grouparoo is an open source framework that helps you move data between your data warehouse and all of your cloud-based tools.";
  const pluginName =
    pluginNames[Math.floor(Math.random() * pluginNames.length)];
  const tagline = `Stop writing code to sync data to ${pluginName}*`;

  useEffect(() => setReleaseNote(releaseNote), [releaseNote, setReleaseNote]);

  return (
    <>
      <Head>
        {/* Title */}

        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta property="og:site_name" content="Grouparoo" />
        <meta property="og:url" content="https://www.grouparoo.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@grouparoo" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Image */}

        <meta
          property="og:image"
          content="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        />
        <meta
          name="twitter:image"
          content="https://www.grouparoo.com/_next/image?url=%2Fimages%2Fhome%2Ftwitter-og-image.png&w=1920&q=75"
        />
        <meta name="twitter:image:alt" content={title} />

        {/* Description */}

        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="og:description" content={description} />

        <link rel="canonical" href="https://www.grouparoo.com/" />
      </Head>

      <Header tagline={tagline} />
    </>
  );
}

export async function getStaticProps() {
  const pluginNames = randomHomepagePlugins();
  const { notes } = await getReleaseNotes(1, 1);
  return { props: { pluginNames, releaseNote: notes[0] } };
}
