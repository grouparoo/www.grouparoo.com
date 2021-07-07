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
        <Navbar variant="light" expand="md">
          <Navbar.Brand className="pt-3">
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
            <Nav className="ml-auto mt-3">
              <NavDropdown
                className="pr-2 py-2 align-text-top"
                title="Integrations"
                id="basic-nav-dropdown"
              >
                <Container className="integrationsNav pt-0 mt-0">
                  <Row>
                    <Col xs="12" md="6" className="text-left">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"arrow-down"}
                          size="1x"
                          className="pr-1"
                        />{" "}
                        Sources
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/integrations/sources/snowflake">
                          <a className="nav-link" role="button">
                            Snowflake
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/sources/postgres">
                          <a className="nav-link" role="button">
                            Postgres
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/sources/mysql">
                          <a className="nav-link" role="button">
                            MySQL
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations">
                          <a
                            className="nav-link"
                            role="button"
                            id="seeMoreLink"
                          >
                            See More...
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider className="d-lg-none" />
                    </Col>

                    <Col xs="12" md="6" className="text-left">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"arrow-up"}
                          size="1x"
                          className="pr-1"
                        />{" "}
                        Destinations
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/integrations/destinations/salesforce">
                          <a className="nav-link" role="button">
                            Salesforce
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/destinations/marketo">
                          <a className="nav-link" role="button">
                            Marketo
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/destinations/zendesk">
                          <a className="nav-link" role="button">
                            Zendesk
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations">
                          <a
                            className="nav-link"
                            role="button"
                            id="seeMoreLink"
                          >
                            See More...
                          </a>
                        </Link>
                      </Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>

              <NavDropdown
                className="pr-2 py-2 align-text-top"
                title="Solutions"
                id="basic-nav-dropdown"
              >
                <Container className="solutionsNav pt-0 mt-0">
                  <Row>
                    <Col xs="12" md="6" className="text-left">
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
                      <Dropdown.Item>
                        <Link href="/solutions/education">
                          <a className="nav-link" role="button">
                            Education
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
                      <Dropdown.Divider className="d-lg-none" />
                    </Col>

                    <Col xs="12" md="6" className="text-left">
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
                          icon={"check"}
                          size="1x"
                          className="pr-1"
                        />
                        Categories
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/solutions/reverse-etl">
                          <a className="nav-link" role="button">
                            Reverse ETL
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/solutions/modern-data-stack">
                          <a className="nav-link" role="button">
                            Modern Data Stack
                          </a>
                        </Link>
                      </Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>

              <div className="nav-link">
                <Link href="/pricing">
                  <a className="nav-link" role="button">
                    Pricing
                  </a>
                </Link>
              </div>

              <div className="nav-link">
                <Link href="/docs">
                  <a className="nav-link" role="button">
                    Docs
                  </a>
                </Link>
              </div>
            </Nav>
            <a
              href="https://github.com/grouparoo/grouparoo"
              target="_blank"
              rel="noreferrer"
              className="col-sm-12 d-md-none d-lg-inline-block col-lg-1 p-0 mx-lg-1 mx-0 mt-3"
            >
              <Button variant="outline-dark" size="sm" className="w-100">
                <FontAwesomeIcon icon={["fab", "github"]} size="xs" /> Star
              </Button>
            </a>
            <Button
              variant="primary"
              href="/get-started"
              size="sm"
              className="col-sm-12 col-md-3 col-lg-2 mx-0 mr-lg-2 ml-lg-2 mt-3"
            >
              Get Started
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
