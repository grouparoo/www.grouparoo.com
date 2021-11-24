import { useEffect, useMemo } from "react";
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
import { getReleaseNotes, ReleaseNote } from "../utils/releaseNotes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageInBrowserFrame from "../components/ImageInBrowserFrame";
import { Header } from "../components/home/header/Header";

const getTagline = (pluginNames: string[]) =>
  `Stop writing code to sync data to ${
    pluginNames[Math.floor(Math.random() * pluginNames.length)]
  }*`;

const IndexPage = ({ pageProps, setReleaseNote }) => {
  const {
    pluginNames,
    releaseNote,
    pluginName,
  }: { pluginNames: string[]; releaseNote: ReleaseNote[]; pluginName: string } =
    pageProps;
  const title = "Grouparoo: Open Source Data Synchronization Framework";
  const description =
    "Grouparoo is an open source framework that helps you move data between your data warehouse and all of your cloud-based tools.";

  const tagline = useMemo(
    () => pluginName ?? getTagline(pluginNames),
    [pluginName, pluginNames]
  );

  useEffect(() => setReleaseNote(releaseNote), []);

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
};

export const getServerSideProps = async () => {
  const pluginNames = randomHomepagePlugins();
  const pluginName = getTagline(pluginNames);
  const { notes } = await getReleaseNotes(1, 1);
  return { props: { pluginNames, releaseNote: notes[0], pluginName } };
};

export default IndexPage;
