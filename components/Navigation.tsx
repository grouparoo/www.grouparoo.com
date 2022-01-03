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
    <header className={`pipes ${!onHomepage ? "mb-4" : ""}`}>
      <Container style={{ padding: 0 }}>
        <Navbar
          collapseOnSelect
          expand="md"
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Navbar.Brand className="pt-3">
            <Link href="/" passHref>
              <Nav.Link>
                <Image
                  src="/images/logo-and-wordmark-white-words.svg"
                  alt="Grouparoo Logo"
                  width={150}
                  height={32}
                />
              </Nav.Link>
            </Link>
            <span className="d-none">Grouparoo</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav navbar-collapse">
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
                        <Link href="/integrations/sources/snowflake" passHref>
                          <Nav.Link>Snowflake Integration</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/sources/postgres" passHref>
                          <Nav.Link>Postgres Integration</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations/sources/mysql" passHref>
                          <Nav.Link>MySQL Integration</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations" passHref>
                          <Nav.Link id="seeMoreLink">See More...</Nav.Link>
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
                        <Link
                          href="/integrations/destinations/salesforce"
                          passHref
                        >
                          <Nav.Link>Salesforce Data Integration</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link
                          href="/integrations/destinations/marketo"
                          passHref
                        >
                          <Nav.Link>Marketo Integration</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link
                          href="/integrations/destinations/zendesk"
                          passHref
                        >
                          <Nav.Link>Zendesk Integration</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/integrations" passHref>
                          <Nav.Link>See More...</Nav.Link>
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
                        <Link href="/solutions/healthcare" passHref>
                          <Nav.Link>Healthcare</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/solutions/education" passHref>
                          <Nav.Link> Education</Nav.Link>
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
                        <Link href="/solutions/census-alternative" passHref>
                          <Nav.Link>vs. Census</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/solutions/segment-alternative" passHref>
                          <Nav.Link> vs. Segment</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/solutions/hightouch-alternative" passHref>
                          <Nav.Link> vs. Hightouch</Nav.Link>
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
                        <Link href="/" passHref>
                          <Nav.Link> Engineering</Nav.Link>
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
                        <Link href="/solutions/reverse-etl" passHref>
                          <Nav.Link> Reverse ETL</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href="/solutions/modern-data-stack" passHref>
                          <Nav.Link> Modern Data Stack</Nav.Link>
                        </Link>
                      </Dropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>

              <div className="nav-link">
                <Link href="/pricing" passHref>
                  <Nav.Link> Pricing</Nav.Link>
                </Link>
              </div>

              <div className="nav-link">
                <Link href="/docs" passHref>
                  <Nav.Link> Docs</Nav.Link>
                </Link>
              </div>

              <div className="nav-link">
                <Link href="/blog" passHref>
                  <Nav.Link> Blog</Nav.Link>
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
                style={{ minWidth: 70 }}
              >
                <FontAwesomeIcon icon={["fab", "github"]} size="xs" /> Star
              </Button>
            </a>
            <Link href="/get-started" passHref>
              <Nav.Link>
                <Button
                  style={{ minWidth: 188 }}
                  variant="secondary"
                  size="sm"
                  className="col-12 col-md-3 col-lg-2 mx-0 ms-lg-2 mt-3 rounded-pill"
                >
                  Get Started
                </Button>
              </Nav.Link>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
