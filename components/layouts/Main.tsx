import { useState, useEffect, Children, cloneElement } from "react";
import { Row, Container, Col } from "react-bootstrap";
import Head from "next/head";
import Navigation from "../Navigation";
import Footer from "../Footer";
import { useRouter } from "next/router";
import GetStarted from "../home/GetStarted";
import { OpenSourceDataStackConfBanner } from "../banners/OpenSourceDataStackConfBanner";
import { DisplayReleaseNote, WhatsNewBanner } from "../banners/WhatsNewBanner";
import { Favicon } from "../favicon";

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
        <meta name="application-name" content="Grouparoo" />
        <meta name="viewport" content="width=device-width" />
        <Favicon />
      </Head>

      {/* <OpenSourceDataStackConfBanner router={router} /> */}
      <WhatsNewBanner releaseNote={releaseNote} />

      <div className="main">
        <Navigation />
        <div id="content-container">
          {Children.map(children, (child) =>
            cloneElement(child, { setReleaseNote })
          )}
        </div>
        {noGetStarted.includes(router.route) ||
        noGetStarted.includes(router.asPath) ? null : (
          <div id="getStartedContainer" className="text-center w-full py-5">
            <Container>
              <Row>
                <Col>
                  <GetStarted />
                </Col>
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
