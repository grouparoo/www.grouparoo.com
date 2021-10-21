import { Container, Row, Col } from "react-bootstrap";
import Image from "./Image";
import { useRouter } from "next/router";
import Link from "next/link";

function LogoAndSocialLinks({ router }) {
  const year = new Date().getFullYear();

  return (
    <>
      <Link href="/">
        <a>
          <Image
            src="/images/logo.png"
            alt="Grouparoo Logo"
            width={50}
            height={40}
          />
        </a>
      </Link>
      <br />
      <br />
      <p>
        <a
          href="https://www.twitter.com/grouparoo"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </a>{" "}
        |{" "}
        <a href="https://github.com/grouparoo" target="_blank" rel="noreferrer">
          Github
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/company/grouparoo"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
      </p>
      <EditThisPage router={router} />
      <p>© Grouparoo, Inc. {year}.</p>
    </>
  );
}

function EditThisPage({ router }) {
  const urlBase = "https://github.com/grouparoo/www.grouparoo.com/tree/main";
  const docsPageMatch = router.asPath.match(/^\/docs\/(.*)/);
  const blogPageMatch = router.asPath.match(/^\/blog\/(.*)/);

  if (docsPageMatch) {
    return (
      <>
        <small>
          <a
            href={`${urlBase}/pages/docs/${docsPageMatch[1]}.mdx`}
            target="_blank"
            rel="noreferrer"
          >
            Edit this page on Github
          </a>
        </small>
      </>
    );
  }

  if (blogPageMatch) {
    return (
      <>
        <small>
          <a
            href={`${urlBase}/pages/blog/${blogPageMatch[1]}.mdx`}
            target="_blank"
            rel="noreferrer"
          >
            View this page in Markdown
          </a>
        </small>
      </>
    );
  }

  return null;
}

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg={3} className="d-none d-lg-block">
            <LogoAndSocialLinks router={router} />
          </Col>
          <Col lg={9}>
            <Row>
              <Col className="d-none d-md-inline-block col-md-1" />

              <Col className="col-6 col-md-3 pb-2 px-3 ">
                <div className="pl-1">
                  <strong>Use Cases</strong>
                  <br />
                  <Link href="/solutions/healthcare">
                    <a>Healthcare</a>
                  </Link>
                  <br />
                  <Link href="/solutions/education">
                    <a>Education</a>
                  </Link>
                  <br />
                  <Link href="/solutions/segment-alternative">
                    <a>Segment Alternative</a>
                  </Link>
                  <br />
                  <Link href="/solutions/census-alternative">
                    <a>Census Alternative</a>
                  </Link>
                  <br />
                  <Link href="/solutions/hightouch-alternative">
                    <a>Hightouch Alternative</a>
                  </Link>
                  <br />

                  <Link href="/solutions/reverse-etl">
                    <a>Reverse ETL</a>
                  </Link>
                  <br />

                  <Link href="/solutions/modern-data-stack">
                    <a>Modern Data Stack</a>
                  </Link>
                </div>

                <hr className="d-md-none mx-auto border-light border-top-0 m-2" />
              </Col>
              <Col className="col-6 col-md-3 pb-2 px-3">
                <div className="pl-1">
                  <strong>Integrations</strong>
                  <br />
                  <Link href="/integrations/destinations/salesforce">
                    <a>Salesforce Data Integration</a>
                  </Link>
                  <br />
                  <Link href="/integrations/destinations/zendesk">
                    <a>Zendesk Integration</a>
                  </Link>
                  <br />
                  <Link href="/integrations/destinations/marketo">
                    <a>Marketo Integration</a>
                  </Link>
                  <br />
                  <Link href="/integrations/destinations/mailchimp">
                    <a>Mailchimp Integration</a>
                  </Link>
                  <br />
                  <Link href="/integrations/destinations/hubspot">
                    <a>Hubspot Integration</a>
                  </Link>
                  <br />
                  <Link href="/integrations/destinations/iterable">
                    <a>Iterable Integration</a>
                  </Link>
                  <br />
                  <Link href="/integrations/sources/bigquery">
                    <a>Bigquery Integration</a>
                  </Link>
                  <br />
                  <Link href="/integrations/sources/snowflake">
                    <a>Snowflake Integration</a>
                  </Link>
                  <br />
                  <Link href="/integrations/sources/redshift">
                    <a>Snowflake Integration</a>
                  </Link>
                  <br />
                </div>
                <hr className="d-md-none mx-auto border-light border-top-0 m-2" />
              </Col>
              <Col className="col-6 col-md-2 pb-2 px-3">
                <div className="pl-1">
                  <strong>Product</strong>
                  <br />
                  <Link href="/docs">
                    <a>Docs</a>
                  </Link>
                  <br />
                  <Link href="/pricing">
                    <a>Pricing</a>
                  </Link>
                  <br />
                  <Link href="/integrations">
                    <a>Integrations</a>
                  </Link>
                  <br />
                  <Link href="/whats-new">
                    <a>What's New</a>
                  </Link>
                  <br />
                  <Link href="/docs/community">
                    <a>Community</a>
                  </Link>
                  <br />
                  <a
                    target="_blank"
                    href="https://github.com/grouparoo/grouparoo"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </Col>
              <Col className="col-6 col-md-2 pb-2 px-3">
                <div className="pl-1">
                  <strong>Company</strong>
                  <br />
                  <Link href="/about">
                    <a>About Us</a>
                  </Link>
                  <br />
                  <Link href="/blog">
                    <a>Blog</a>
                  </Link>
                  <br />
                  <Link href="/docs/support">
                    <a>Support</a>
                  </Link>
                  <br />
                  <Link href="/meet">
                    <a>Contact Us</a>
                  </Link>
                  <br />
                  <Link href="/about#careers">
                    <a>Careers</a>
                  </Link>
                  <br />
                  <Link href="/legal/privacy">
                    <a>Privacy Policy</a>
                  </Link>
                  <Link href="/legal/terms">
                    <a>Terms and Conditions</a>
                  </Link>
                </div>
              </Col>
              <Col className="d-none d-md-inline-block col-md-1" />
            </Row>
          </Col>
        </Row>

        <Row className="d-lg-none">
          <Col className="text-center pb-4 pt-5">
            <LogoAndSocialLinks router={router} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
