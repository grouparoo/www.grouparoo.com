import { Container, Button, Row, Col } from "react-bootstrap";
import IntegrationCard from "../../../components/home/IntegrationCard";
import IntegrationMappings from "../../../components/home/IntegrationMappings";
import IntegrationInstallation from "../../../components/home/IntegrationInstallation";
import IntegrationSources from "../../../components/home/IntegrationSources";
import IntegrationDestinations from "../../../components/home/IntegrationDestinations";
import IntegrationsHead from "../../../components/home/IntegrationsHead";
import BigArrow from "../../../components/BigArrow";
import { PluginData, getUseCasePaths } from "../../../data/plugins";
import ImageInBrowserFrame from "../../../components/ImageInBrowserFrame";

export default function IntegrationsPage({
  pageProps,
}: {
  pageProps: { plugin: string };
}) {
  const { plugin } = pageProps;
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
                <ImageInBrowserFrame
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
                <ImageInBrowserFrame
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

  return (
    <>
      <IntegrationsHead
        name={data.name}
        primaryType={data.primaryType}
        slug={data.slug}
      />
      <Container>
        {data.primaryType === "destination" && (
          <DestinationHeaderArrow data={data} />
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
        {data.destinationRecord && (
          <Row>
            <Col>
              <h2>How Grouparoo Connects with {data.name}</h2>
              <br />
              <IntegrationMappings
                name={data.name}
                slug={data.slug}
                image={data.logo}
                destinationRecord={data.destinationRecord}
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
      {data.narrative ? (
        <Container className="rounded mt-1 p-5 mb-5 shadow col-7 opacity-3">
          <Row>
            <Col className="mx-auto">
              <h3 className="text-center mb-3">Grouparoo & {data.name}</h3>
              <p>{data.narrative.p1}</p>
              <p>{data.narrative.p2}</p>
            </Col>
          </Row>
        </Container>
      ) : null}
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
    </>
  );
}

export async function getStaticProps(ctx) {
  const { plugin, type } = ctx.params;
  return { props: { plugin } };
}

export async function getStaticPaths() {
  return getUseCasePaths();
}

function DestinationHeaderArrow({ data }) {
  return (
    <>
      <Row>
        <Col>
          <br />
          <h1 data-testid="header">
            {data.name} integration for all your tools & customer data
          </h1>
          {data.description}
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={3} style={{ textAlign: "center" }}>
          <IntegrationCard slug="data_warehouse" showLink={false} />
        </Col>
        <Col md={1} style={{ textAlign: "center" }}>
          <br className="d-none d-md-block" />
          <br className="d-none d-md-block" />
          <BigArrow downOnMobile={true} /> <br />
        </Col>
        <Col md={3} style={{ textAlign: "center" }}>
          <IntegrationCard slug="grouparoo" showLink={false} />
        </Col>
        <Col md={1} style={{ textAlign: "center" }}>
          <br className="d-none d-md-block" />
          <br className="d-none d-md-block" />
          <BigArrow downOnMobile={true} /> <br />
        </Col>
        <Col md={3} style={{ textAlign: "center" }}>
          <IntegrationCard slug={data.slug} showLink={false} />
        </Col>
      </Row>
    </>
  );
}

function SourceHeaderArrow({ data }) {
  return (
    <>
      <Row>
        <Col>
          <br />
          <h1 data-testid="header">
            Sync {data.name} customer data with all of your 3rd party tools
          </h1>
          {data.description}
        </Col>
      </Row>

      <br />

      <Row>
        <Col md={3} style={{ textAlign: "center" }}>
          <IntegrationCard slug={data.slug} showLink={false} />
        </Col>
        <Col md={1} style={{ textAlign: "center" }}>
          <br className="d-none d-md-block" />
          <br className="d-none d-md-block" />
          <BigArrow downOnMobile={true} /> <br />
        </Col>
        <Col md={3} style={{ textAlign: "center" }}>
          <IntegrationCard slug="grouparoo" showLink={false} />
        </Col>
        <Col md={1} style={{ textAlign: "center" }}>
          <br className="d-none d-md-block" />
          <br className="d-none d-md-block" />
          <BigArrow downOnMobile={true} /> <br />
        </Col>
        <Col md={3} style={{ textAlign: "center" }}>
          <IntegrationCard slug={"destinations"} showLink={false} />
        </Col>
      </Row>
    </>
  );
}
