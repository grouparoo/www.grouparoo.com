import { Row, Col, Container } from "react-bootstrap";

export interface Feature {
  title: string;
  text: string;
}

export interface FeatureArray extends Array<Feature> {}

export default function FeatureBanner({
  features,
}: {
  features: FeatureArray;
}) {
  return (
    <>
      <div
        style={{ backgroundImage: "linear-gradient(#242436,#43435F)" }}
        className="bg-dark homePageSection my-5 text-white"
      >
        <Container>
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
