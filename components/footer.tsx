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
    <footer
      style={{ paddingTop: 100, marginTop: 50, paddingBottom: 80 }}
      className="footer"
    >
      <Container>
        <Row>
          <Col md={6} className="d-none d-lg-block">
            <LogoAndSocialLinks router={router} />
          </Col>
          <Col md={6}>
            <Row>
              <Col>
                <strong>Use Cases</strong>
                <br />
                <Link href="/solutions/engineers">
                  <a>Grouparoo for Engineers</a>
                </Link>
                <br />
                <Link href="/solutions/marketers">
                  <a>Grouparoo for Marketers</a>
                </Link>
                <br />
                <Link href="/solutions/healthcare">
                  <a>Healthcare</a>
                </Link>
                <br />
                <Link href="/solutions/segment-alternative">
                  <a>Segment Alternative</a>
                </Link>
              </Col>
              <Col>
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
              </Col>
              <Col>
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
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="d-lg-none">
          <Col
            style={{ textAlign: "center", paddingTop: 50, paddingBottom: 50 }}
          >
            <LogoAndSocialLinks router={router} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
