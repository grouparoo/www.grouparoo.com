import { Nav, Navbar, Container, Button, Image } from "react-bootstrap";
import Link from "next/link";

export default function Navigation() {
  return (
    <header>
      <Container>
        <Navbar variant="light" expand="md">
          <Navbar.Brand>
            <Link href="/">
              <a>
                <Image
                  src="/images/logo-and-wordmark-black-words.png"
                  alt="Grouparoo Logo"
                  width={150}
                  height={32}
                />
              </a>
            </Link>
            <span className="d-none">Grouparoo</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ marginTop: 30 }}>
              <Link href="/integrations">
                <a className="nav-link" role="button">
                  Integrations
                </a>
              </Link>

              <Link href="/pricing">
                <a className="nav-link" role="button">
                  Pricing
                </a>
              </Link>

              <Link href="/docs">
                <a className="nav-link" role="button">
                  Docs
                </a>
              </Link>

              <Link href="/blog">
                <a className="nav-link" role="button">
                  Blog
                </a>
              </Link>

              <Link href="/docs/community">
                <a className="nav-link d-md-none d-lg-block" role="button">
                  Community
                </a>
              </Link>

              <Nav.Link className="d-md-none d-lg-block">
                <div style={{ paddingTop: 4 }}>
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=grouparoo&repo=grouparoo&type=star&count=false"
                    frameBorder="0"
                    scrolling="0"
                    width="65"
                    height="20"
                    title="GitHub"
                  ></iframe>
                </div>
              </Nav.Link>

              <Button
                variant="primary"
                href="/docs/getting-started"
                size="sm"
                style={{ marginTop: 7, marginBottom: 20 }}
              >
                Get Started
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
