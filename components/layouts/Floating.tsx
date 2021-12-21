import Head from "next/head";
import { Container } from "react-bootstrap";
import { Favicon } from "../Favicon";

function FloatingLayout({ children }) {
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
      <div className="main">
        <Container
          fluid
          className="align-items-center justify-content-center d-flex my-5 my-xl-0 pb-lg-3 pb-xl-0 mx-0 trialContainer"
        >
          {" "}
          {children}
        </Container>
      </div>
    </>
  );
}

export default FloatingLayout;
