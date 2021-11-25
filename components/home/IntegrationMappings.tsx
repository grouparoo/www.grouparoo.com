import { Row, Col } from "react-bootstrap";
import Image from "../Image";
import BigArrow from "../BigArrow";

export default function IntegrationMappings({
  name,
  image,
  slug,
  destinationMappings,
}: {
  name: string;
  image: string;
  slug: string;
  destinationMappings: Array<{
    record: string;
    property?: string;
    group?: string;
  }>;
}) {
  return (
    <Row>
      <Col>
        <h2>How Grouparoo Connects with {name}</h2>
        <br />
        <>
          <IntegrationHeader />
          {destinationMappings.map((destinationMapping, index) =>
            IntegrationMapping({
              index,
              destinationMapping,
            })
          )}
        </>
      </Col>
    </Row>
  );

  function ColSpacer() {
    return <Col lg={1} md={0} sm={0} xs={0} />;
  }

  function ColBetween({ header }: { header?: boolean }) {
    return (
      <Col lg={2} md={2} sm={2} xs={2} className="align-self-center">
        {!header && <BigArrow />}
      </Col>
    );
  }

  function ColBox({ children, header }: { children: any; header?: boolean }) {
    const style = {
      paddingTop: "1rem",
      paddingLeft: "1rem",
      // part of <p>  paddingBottom: "1rem",
      paddingRight: "1rem",
      borderRadius: 15,
    };
    if (!header) {
      Object.assign(style, { borderStyle: "dashed", borderWidth: 1 });
    }
    return (
      <Col lg={4} md={5} sm={5} xs={5} style={style}>
        {children}
      </Col>
    );
  }
  function IntegrationHeader() {
    return (
      <Row key={"header"} style={{ textAlign: "center" }}>
        <ColSpacer />
        <ColBox header>
          <Image
            centered
            src="/images/home/logo-square-with-padding-blue-background.svg"
            alt="Grouparoo Logo"
            height={128}
            width={128}
          />
          <p>
            <strong>Grouparoo Concepts</strong>
          </p>
        </ColBox>
        <ColBetween header />
        <ColBox header>
          <Image
            centered
            src={`/images/home/integrations/${slug}/${image}`}
            alt={name}
            height={128}
            width={128}
          />
          <p>
            <strong>{name} Concepts</strong>
          </p>
        </ColBox>
        <ColSpacer />
      </Row>
    );
  }

  function IntegrationMapping({
    index,
    destinationMapping,
  }: {
    index: number;
    destinationMapping: {
      record: string;
      property?: string;
      group?: string;
    };
  }) {
    const { record, property, group } = destinationMapping;
    return (
      <Row key={index} style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <ColSpacer />
        <ColBox>
          {record && <p>Grouparoo Records</p>}
          {property && <p>Grouparoo Record Properties</p>}
          {group && <p>Grouparoo Groups</p>}
        </ColBox>
        <ColBetween />
        <ColBox>
          {record && <p>{record}</p>}
          {property && <p>{property}</p>}
          {group && <p>{group}</p>}
        </ColBox>
        <ColSpacer />
      </Row>
    );
  }
}
