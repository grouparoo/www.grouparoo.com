import { useState, useEffect, Children, cloneElement } from "react";
import Head from "next/head";
import PlausibleAnalytics from "../plausibleAnalytics";
import GoogleAnalytics from "../googleAnalytics";
import Posthog from "../posthog";
import AdConversionScript from "../adConversionsScript";
import Navigation from "../navigation";
import Footer from "../footer";
import { Alert } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

function PageTemplate({ children }) {
  const router = useRouter();
  const [releaseNote, setReleaseNote] =
    useState<{
      name: string;
      description: string;
    }>(null);

  useEffect(() => {
    if (router.asPath !== "/") setReleaseNote(null);
  }, [router.asPath]);

  return (
    <>
      <Head>
        {process.env.ROBOTS_DISABLED && (
          <meta name="robots" content="noindex" />
        )}

        <title>Grouparoo</title>
        {/* <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/prism.css" /> */}
        <meta name="application-name" content="Grouparoo" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/favicon/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/favicon/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/favicon/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/favicon/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/favicon/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/favicon/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/favicon/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/favicon/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-128.png"
          sizes="128x128"
        />
        <meta name="msapplication-TileColor" content="#242436" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/favicon/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/favicon/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/favicon/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/favicon/mstile-310x310.png"
        />
        <meta name="viewport" content="width=device-width" />
        <link rel="stylesheet" href="/css/prism.css"></link>
      </Head>

      {releaseNote?.description ? (
        <Alert variant="primary" style={{ textAlign: "center", margin: 0 }}>
          <small>
            <strong>What's New</strong> - {releaseNote.description}{" "}
            <Link href="/whats-new">
              <a>Learn More</a>
            </Link>
          </small>
        </Alert>
      ) : null}

      <div className="main">
        <Navigation />
        <div id="content-container" style={{ minHeight: 700 }}>
          {Children.map(children, (child) =>
            cloneElement(child, { setReleaseNote })
          )}
        </div>
        <Footer />
      </div>

      <GoogleAnalytics />
      <PlausibleAnalytics />
      <Posthog />
      <AdConversionScript />
    </>
  );
}

export default PageTemplate;
