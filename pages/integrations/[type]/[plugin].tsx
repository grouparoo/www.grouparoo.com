import { Container, Row, Col } from "react-bootstrap";
import Image from "../../../components/Image";
import IntegrationCard from "../../../components/home/integrationCard";
import IntegrationMappings from "../../../components/home/integrationMappings";
import IntegrationInstallation from "../../../components/home/integrationInstallation";
import IntegrationSources from "../../../components/home/integrationSources";
import IntegrationDestinations from "../../../components/home/integrationDestinations";
import IntegrationsHead from "../../../components/home/integrationsHead";
import GetStarted from "../../../components/home/getStarted";
import BigArrow from "../../../components/bigArrow";
import { PluginData } from "../../../data/plugins";

export default function IntegrationsPage({ pageProps }) {
  const { plugin, type }: { plugin: string; type: string } = pageProps;
  const data = PluginData.find((e) => e.slug === plugin);

  function useCaseList() {
    const useCaseList = data.useCasesList.map((useCase, idx) => (
      <li key={`useCase-${idx}`}>{useCase}</li>
    ));
    return <ul>{useCaseList}</ul>;
  }

  function dataModelDescription() {
    const dataModelDescription = data.dataModelDescription.map(
      (dataModelParagraph, idx) => (
        <p
          key={`dataModelDescription-${idx}`}
          dangerouslySetInnerHTML={{ __html: dataModelParagraph }}
        />
      )
    );
    return <>{dataModelDescription}</>;
  }

  function Screenshots() {
    const Screenshots = data.pluginScreenshots.map((screenshot, idx) => (
      <div key={`Screenshots-${idx}`}>
        {idx % 2 === 0 && (
          <>
            <Row className="align-items-center">
              <Col md={4}>
                <br />
                <h3 className="integrationsBlueH3">{screenshot.header}</h3>
                <p>{screenshot.description}</p>
              </Col>
              <Col md={8}>
                <Image
                  className="productScreenshots border"
                  src={screenshot.imageSrc}
                  alt={screenshot.imageAlt}
                  width={screenshot.imageWidth}
                  height={screenshot.imageHeight}
                />
              </Col>
            </Row>
            <br />
          </>
        )}
        {idx % 2 === 1 && (
          <>
            <Row className="align-items-center">
              <Col md={4} className="order-1 order-md-2">
                <br />
                <h3 className="integrationsBlueH3">{screenshot.header}</h3>
                <p>{screenshot.description}</p>
              </Col>
              <Col md={8} className="order-2 order-md-1">
                <Image
                  className="productScreenshots border"
                  src={screenshot.imageSrc}
                  alt={screenshot.imageAlt}
                  width={screenshot.imageWidth}
                  height={screenshot.imageHeight}
                />
              </Col>
            </Row>
            <br />
          </>
        )}
      </div>
    ));
    return <>{Screenshots}</>;
  }

  if (!data) return <p>no plugin</p>;
  if (!data.useCases) return <p>no plugin</p>;

  return (
    <>
      <IntegrationsHead
        name={data.name}
        primaryType={data.primaryType}
        slug={data.slug}
      />
      <Container>
        {data.primaryType === "destination" && (
          <DestionationHeaderArrow data={data} />
        )}
        {data.primaryType === "source" && <SourceHeaderArrow data={data} />}
        <br />
      </Container>
      <div
        id={`${data.name} and Use Cases`}
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col lg={6} md={6} xs={12}>
              <h2>Grouparoo &amp; {data.name}</h2>
              <p>{data.useCases.paragraphOne}</p>
              <p>{data.useCases.paragraphTwo}</p>
              <p></p>
            </Col>
            <Col lg={6} md={6} xs={12}>
              <h2>Use Cases</h2>
              {useCaseList()}
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <IntegrationInstallation
        displayName={data.name}
        packageName={data.packageName}
      />

      <Container>
        <Row>
          <Col>
            <h2>{data.dataModelTitle}</h2>
            {dataModelDescription()}
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        {data.destinationProfile && (
          <Row>
            <Col>
              <h2>How Grouparoo Connects with {data.name}</h2>
              <br />
              <IntegrationMappings
                name={data.name}
                slug={data.slug}
                image={data.logo}
                destinationProfile={data.destinationProfile}
                destinationProperty={data.destinationProperty}
                destinationGroup={data.destinationGroup}
              />
            </Col>
          </Row>
        )}
        <br />
        <br />
        {data.pluginScreenshots && <Screenshots />}
      </Container>

      <br />
      <br />
      <div
        id={`Grouparoo Connects with ${data.name}`}
        className="bg-dark text-white"
        style={{ paddingTop: 50, paddingBottom: 50 }}
      >
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h2>{data.otherPluginsHeading}</h2>
              <br />
              {data.primaryType === "destination" && <IntegrationSources />}
              {data.primaryType === "source" && <IntegrationDestinations />}
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

export async function getStaticProps(ctx) {
  const { plugin, type } = ctx.params;
  return { props: { plugin, type } };
}

export async function getStaticPaths() {
  const paths = PluginData.map(
    (p) => `/integrations/${p.primaryType}s/${p.slug}`
  );

  return {
    paths,
    fallback: false,
  };
}

function DestionationHeaderArrow({ data }) {
  return (
    <>
      <Row>
        <Col lg={5} md={12}>
          <br />
          <h1>Sync {data.name} with all of your tools and customer data</h1>
          <p>{data.description}</p>
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
        <Col lg={1} md={2} sm={2} xs={2} style={{ textAlign: "center" }}>
          <br />
          <br />
          <br />
          <BigArrow />
        </Col>
        <Col lg={3} md={5} sm={5} xs={5} style={{ textAlign: "center" }}>
          <br />
          <IntegrationCard
            name={data.name}
            slug={data.slug}
            image={data.logo}
            showLink={false}
          />
        </Col>
      </Row>

      <br />

      <Row>
        <Col />
        <Col lg={3} md={4} sm={6} xs={6} style={{ textAlign: "center" }}></Col>
        <Col />
      </Row>
    </>
  );
}

function SourceHeaderArrow({ data }) {
  return (
    <>
      <Row>
        <Col lg={5} md={12}>
          <br />
          <h1>
            Sync {data.name} customer data with all of your 3rd party tools
          </h1>
          <p>{data.description}</p>
        </Col>
        <Col lg={3} md={5} sm={5} xs={5} style={{ textAlign: "center" }}>
          <br />
          <IntegrationCard
            name={data.name}
            slug={data.slug}
            image={data.logo}
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
        <Col lg={3} md={4} sm={6} xs={6} style={{ textAlign: "center" }}></Col>
        <Col />
      </Row>
    </>
  );
}
