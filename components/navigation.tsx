import { Nav, Navbar, Container, Button, Image } from "react-bootstrap";

export default function Navigation() {
  return (
    <header>
      <Container>
        <br />
        <Navbar variant="light" expand="md" style={{ padding: 5 }}>
          <Navbar.Brand href="/">
            <img
              src="/images/logo-and-wordmark-black-words.png"
              style={{
                maxWidth: 160,
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/integrations">Integrations</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
              <Nav.Link href="/docs">Docs</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link>
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
                className="d-md-none d-lg-block"
                variant="primary"
                href="/docs"
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
