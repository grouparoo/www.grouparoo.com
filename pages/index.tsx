import Head from "next/head";
import { useMemo } from "react";
import { About } from "../components/home/about/About";
import { Actionable } from "../components/home/actionable/Actionable";
import { Features } from "../components/home/features/Features";
import { Header } from "../components/home/header/Header";
import { Steps } from "../components/home/how-it-works/ Steps";
import { HowGrouparooWorks } from "../components/home/how-it-works/HowGrouparooWorks";
import { Integrations } from "../components/home/integrations/Integrations";
import { Partners } from "../components/home/partners/Partners";
import { Testimonials } from "../components/home/testimonials/Testimonials";
import { WhyGrouparoo } from "../components/home/why-grouparoo/WhyGrouparoo";
import { randomHomepagePlugins } from "../data/plugins";

const IndexPage = ({ pageProps }) => {
  const { pluginNames }: { pluginNames: string[] } = pageProps;
  const title = "Grouparoo: Open Source Data Synchronization Framework";
  const description =
    "Grouparoo is an open source framework that helps you move data between your data warehouse and all of your cloud-based tools.";

  const pluginName = useMemo(
    () => pluginNames[Math.floor(Math.random() * pluginNames.length)],
    [pluginNames]
  );

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

      <Header pluginName={pluginName} />
      <Partners />
      <About />
      <Actionable />
      <Testimonials />
      <HowGrouparooWorks />
      <Steps />
      <Integrations />
      <WhyGrouparoo />
      <Features />
    </>
  );
};

export const getServerSideProps = async () => {
  const pluginNames = randomHomepagePlugins();
  return { props: { pluginNames } };
};

export default IndexPage;
