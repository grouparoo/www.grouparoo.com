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
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Navigation.module.scss";
import { useMemo } from "react";

export default function Navigation() {
  const router = useRouter();
  const onHomepage = useMemo(() => router.pathname === "/", [router.pathname]);

  return (
    <header className={`pipes ${onHomepage ? "" : "notHomePage"}`}>
      <Container>
        <Navbar expand="md" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Navbar.Brand className="pt-3">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo-and-wordmark-white-words.svg"
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
            <Nav className="ms-auto mt-3">
              <NavDropdown
                className="pe-2 py-2 align-text-top"
                title="Integrations"
                id="basic-nav-dropdown"
              >
                <Container className="integrationsNav pt-0 mt-0">
                  <Row>
                    <Col xs="12" md="6" className="text-start">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"arrow-down"}
                          size="1x"
                          className="pe-1"
                        />{" "}
                        Sources
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/integrations/sources/snowflake">
                          <a className="nav-link" role="button">
                            Snowflake Integration
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/sources/postgres">
                          <a className="nav-link" role="button">
                            Postgres Integration
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/sources/mysql">
                          <a className="nav-link" role="button">
                            MySQL Integration
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

                    <Col xs="12" md="6" className="text-start">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"arrow-up"}
                          size="1x"
                          className="pe-1"
                        />{" "}
                        Destinations
                      </Dropdown.Header>
                      <Dropdown.Item>
                        <Link href="/integrations/destinations/salesforce">
                          <a className="nav-link" role="button">
                            Salesforce Data Integration
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/destinations/marketo">
                          <a className="nav-link" role="button">
                            Marketo Integration
                          </a>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/destinations/zendesk">
                          <a className="nav-link" role="button">
                            Zendesk Integration
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
                className="pe-2 py-2 align-text-top"
                title="Solutions"
                id="basic-nav-dropdown"
              >
                <Container className="solutionsNav pt-0 mt-0">
                  <Row>
                    <Col xs="12" md="6" className="text-start">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"building"}
                          size="1x"
                          className="pe-1"
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
                          className="pe-1"
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

                    <Col xs="12" md="6" className="text-start">
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"user-tie"}
                          size="1x"
                          className="pe-1"
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
                      <Dropdown.Divider />
                      <Dropdown.Header>
                        <FontAwesomeIcon
                          color="black"
                          icon={"check"}
                          size="1x"
                          className="pe-1"
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

              <div className="nav-link">
                <Link href="/blog">
                  <a className="nav-link" role="button">
                    Blog
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
              <Button
                variant="light"
                size="sm"
                className={"w-100 " + styles.github}
              >
                <FontAwesomeIcon icon={["fab", "github"]} size="xs" /> Star
              </Button>
            </a>
            <Button
              variant="primary"
              href="/get-started"
              size="sm"
              className="col-sm-12 col-md-3 col-lg-2 mx-0 ms-lg-2 mt-3 rounded-pill"
            >
              Get Started
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
