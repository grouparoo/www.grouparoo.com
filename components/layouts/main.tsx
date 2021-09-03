import { useState, useEffect, Children, cloneElement } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Head from "next/head";
import Navigation from "../navigation";
import Footer from "../footer";
import { useRouter } from "next/router";
import GetStarted from "../home/getStarted";
import { OpenSourceDataStackConfBanner } from "../banners/OpenSourceDataStackConfBanner";
import { DisplayReleaseNote, WhatsNewBanner } from "../banners/whatsNewBanner";
import Subscribe from "../subscribe";

function PageTemplate({ children }) {
  const router = useRouter();
  const [releaseNote, setReleaseNote] = useState<DisplayReleaseNote>(null);

  useEffect(() => {
    if (router.asPath !== "/") setReleaseNote(null);
  }, [router.asPath]);

  const noGetStarted = [
    "/404",
    "/meet",
    "/docs",
    "/docs/[section]",
    "/docs/[section]/[page]",
    "/docs/[section]/[page]/[subpage]",
    "/blog",
    "/blog/page/[pageNumber]",
    "/blog/author/[author]",
    "/blog/author/[author]/[pageNumber]",
    "/jobs/[id]",
    "/get-started",
  ];

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

      <OpenSourceDataStackConfBanner router={router} />
      {/* <WhatsNewBanner releaseNote={releaseNote} /> */}

      <div className="main">
        <Navigation />
        <div id="content-container" style={{ minHeight: 700 }}>
          {Children.map(children, (child) =>
            cloneElement(child, { setReleaseNote })
          )}
        </div>
        {noGetStarted.includes(router.route) ||
        noGetStarted.includes(router.asPath) ? null : (
          <div id="getStartedContainer" className="text-center w-full py-5">
            <Container>
              <Row>
                <Col md={3} />
                <Col>
                  <GetStarted />
                </Col>
                <Col md={3} />
              </Row>

              <Row>
                <Col />
                <Col
                  md={5}
                  style={{
                    marginTop: 20,
                    marginBottom: 10,
                    minHeight: 150,
                  }}
                >
                  <Subscribe campaign="footer-subscribe" />
                </Col>
                <Col />
              </Row>
            </Container>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}

export default PageTemplate;
