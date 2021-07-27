import { Row, Col, Container } from "react-bootstrap";

export interface Feature {
  title: string;
  text: string;
}

export interface FeatureArray extends Array<Feature> {}

export default function FeatureBanner({
  features,
  category = "Reverse ETL Tool",
}: {
  features: FeatureArray;
  category: string;
}) {
  return (
    <>
      <div
        style={{ backgroundImage: "linear-gradient(#242436,#43435F)" }}
        className="bg-dark text-white homePageSection my-5"
      >
        <Container>
          <Row style={{ textAlign: "center" }}>
            <Col md={12}>
              <h2>Grouparoo is the {category} that meets you where you are.</h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md={6}>
              <h3>{features[0].title}</h3>
              <p>{features[0].text}</p>
              <br />
            </Col>
            <Col md={6}>
              <h3>{features[1].title}</h3>
              <p>{features[1].text}</p>
              <br />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h3>{features[2].title}</h3>
              <p>{features[2].text}</p>
              <br />
            </Col>
            <Col>
              <h3>{features[3].title}</h3>
              <p>{features[3].text}</p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
