import { Container, Row, Col, Image } from "react-bootstrap";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationDestinations from "../../../components/home/integrationDestinations";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";

export default function PostgresPage() {
  return (
    <>
      <IntegrationsHead name="Postgres" primaryType="source" slug="postgres" />
      <Container>
        <Row>
          <Col lg={5} md={12}>
            <br />
            <h1>
              Sync Postgres customer data with all of your 3rd party tools
            </h1>
            <p>
              Grouparoo's Postgres integration allows you to sync all of your
              customer data that lives in your Postgres DB with various
              destinations such as CRMs, Customer Support Tools, and Marketing
              Tools.
            </p>
          </Col>
          <Col lg={3} md={5} sm={5} xs={5} style={{ textAlign: "center" }}>
            <br />
            <IntegrationCard
              name="Postgres"
              slug="postgres"
              image="postgres.svg"
              showLink={false}
            />
          </Col>
          <Col lg={1} md={2} sm={2} xs={2} style={{ textAlign: "center" }}>
            <br />
            <br />
            <br />
            <BigArrow />
          </Col>
          <Col lg={3} md={5} sm={5} xs={5} style={{ textAlign: "center" }}>
            <br />
            <IntegrationCard
              name="Grouparoo"
              slug="grouparoo"
              image="grouparoo.png"
              showLink={false}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col />
          <Col
            lg={3}
            md={4}
            sm={6}
            xs={6}
            style={{ textAlign: "center" }}
          ></Col>
          <Col />
        </Row>
        <br />
      </Container>
      <div
        id="Postgres and Use Cases"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo & Postgres</h2>
              <p>
                Grouparoo is open source data infrastructure to keep your
                customer data in-sync with 3rd party tools.
              </p>
              <p>
                Grouparoo pulls customer data in real-time from your database,
                data warehouse, and other data sources.
              </p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              <ul>
                <li>
                  Easily connect your production data with 3rd party tools
                </li>
                <li>Create a unified customer definition in Grouparoo</li>
                <li>
                  Easily make cohorts and segments out of your Postgres data
                </li>
                <li>
                  Denormalize your database so you can easily send customer data
                  to tools like CRMs, marketing automation, and email marketing
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <Container>
        <Row>
          <Col>
            <h2>An Overview of Grouparoo's Data Model</h2>
            <p>
              Grouparoo's core objects are Profiles and Profile Properties.
              These objects are defined based on your data such as the data in
              your Postgres DB. You can pull this data either with our no-code
              UI or you can write SQL queries directly.
            </p>
            <p>
              Once you've defined these Profiles and Profile Properties, you can
              use Grouparoo's no-code Group builder to create dynamic segments
              and cohorts.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
        </Row>
        <br />
      </Container>

      <Container>
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Easily connect your Postgres data
            </h3>
            <p>
              Since Grouparoo is installed in your cloud infrastructure, you can
              easily point Grouparoo to any number of Postgres instances you may
              have running.
            </p>
          </Col>
          <Col md={9}>
            <Image
              className="productScreenshots"
              src={require("../../../public/images/home/integrations/postgres/add-postgres-app.png")}
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              Define Profile Properties without needing to write SQL queries
            </h3>
            <p>
              Grouparoo is low-code, so less technical team members can create
              new Profile Properties without needing to work with engineers.
              They can pull the data they need when they want.
            </p>
          </Col>
          <Col md={9}>
            <Image
              className="productScreenshots"
              src={require("../../../public/images/home/integrations/postgres/postgres-table-mode.png")}
            />
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col md={3}>
            <br />
            <h3 className="integrationsBlueH3">
              But you can also write SQL if you want
            </h3>
            <p>
              Some Profile Properties will require joins across tables or more
              complex queries. Use Grouparoo's Query mode to pull the data you
              need.
            </p>
          </Col>
          <Col md={9}>
            <Image
              className="productScreenshots"
              src={require("../../../public/images/home/integrations/postgres/postgres-query-mode.png")}
            />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <div
        id="Grouparoo Connects with Postgres"
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>Send your customer data from Postgres to these tools</h2>
              <br />
              <IntegrationDestinations />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <GetStarted showLearnMore={false} />
      </Container>
    </>
  );
}
