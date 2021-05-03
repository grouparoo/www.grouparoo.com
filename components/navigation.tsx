import {
  Nav,
  Navbar,
  Container,
  Button,
  Image,
  Dropdown,
  Col,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
              <Dropdown className="nav-link align-text-top">
                <Dropdown.Toggle
                  variant=""
                  className="px-0 pt-0 pb-2 mt-0"
                  id="dropdown-basic"
                >
                  <span>Solutions</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="solutionsNav">
                  <Container>
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
                        <Dropdown.Divider />

                        <Dropdown.Header>
                          <FontAwesomeIcon
                            color="black"
                            icon={"plug"}
                            size="1x"
                            className="pr-1"
                          />
                          Integrations
                        </Dropdown.Header>
                        <Dropdown.Item>
                          <Link href="/integrations/destinations/salesforce">
                            <a className="nav-link" role="button">
                              Salesforce
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link href="/integrations/sources/redshift">
                            <a className="nav-link" role="button">
                              Redshift
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link href="/integrations/destinations/hubspot">
                            <a className="nav-link" role="button">
                              Hubspot
                            </a>
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link href="/integrations">
                            <a className="nav-link" role="button">
                              See More...
                            </a>
                          </Link>
                        </Dropdown.Item>
                      </Col>
                    </Row>
                  </Container>
                </Dropdown.Menu>
              </Dropdown>

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
