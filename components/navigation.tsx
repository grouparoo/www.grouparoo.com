import {
  Nav,
  Navbar,
  Container,
  Button,
  Image,
  Dropdown,
  NavDropdown,
  Col,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Navigation() {
  return (
    <header>
      <Container>
        <Navbar variant="light" expand="lg">
          <Navbar.Brand className="pt-2">
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
              <Nav.Link>
                <Link href="/integrations">
                  <a className="nav-link" role="button">
                    Integrations
                  </a>
                </Link>
              </Nav.Link>

              <NavDropdown
                className="pr-2 py-2 align-text-top"
                title="Solutions"
                id="basic-nav-dropdown"
              >
                <Container className="solutionsNav pt-0 mt-0">
                  <Row>
                    <Col xs md="6">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pr-1"
                        />
                        Industries
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/solutions/healthcare">
                          <a className="nav-link" role="button">
                            Healthcare
                          </a>
                        </Link>
                      </Dropdown.Item>

                      <Dropdown.Divider />
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"balance-scale-left"}
                          size="1x"
                          className="pr-1"
                        />
                        Comparisons
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/solutions/census-alternative">
                          <a className="nav-link" role="button">
                            vs. Census
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/solutions/segment-alternative">
                          <a className="nav-link" role="button">
                            vs. Segment
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/solutions/hightouch-alternative">
                          <a className="nav-link" role="button">
                            vs. Hightouch
                          </a>
                        </Link>
                      </Dropdown.Item>
                    </Col>

                    <Col xs lg="6">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"user-tie"}
                          size="1x"
                          className="pr-1"
                        />
                        Departments
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/">
                          <a className="nav-link" role="button">
                            Engineering
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/solutions/marketers">
                          <a className="nav-link" role="button">
                            Marketing
                          </a>
                        </Link>
                      </Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
                {/* </Dropdown.Menu> */}
              </NavDropdown>

              <Nav.Link>
                <Link href="/pricing">
                  <a className="nav-link" role="button">
                    Pricing
                  </a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/docs">
                  <a className="nav-link" role="button">
                    Docs
                  </a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/blog">
                  <a className="nav-link" role="button">
                    Blog
                  </a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/docs/community">
                  <a className="nav-link d-md-none d-lg-block" role="button">
                    Community
                  </a>
                </Link>
              </Nav.Link>
            </Nav>
            <Button
              variant="outline-light"
              href="/docs/getting-started"
              size="sm"
              style={{
                marginTop: 20,
                marginBottom: 20,
              }}
              className="col-sm-12 col-lg-1 mx-lg-1 mx-0"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="xs" /> Github
            </Button>
            <Button
              variant="primary"
              href="/docs/getting-started"
              size="sm"
              style={{ marginTop: 20, marginBottom: 20 }}
              className="col-sm-12 col-lg-2 mx-0 mr-lg-2 ml-lg-2"
            >
              Get Started
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
