import { Row, Col, Container } from "react-bootstrap";
import Image from "../Image";

export default function SectionDivider({
  heading,
  content,
  imagePath,
  height,
  width,
  imageLeft,
}: {
  heading: string;
  content: string;
  imagePath: string;
  height: number;
  width: number;
  imageLeft: string;
}) {
  let dividerContent;

  if (imageLeft === "true") {
    dividerContent = (
      <Row className="align-items-center justify-content-center mx-auto col-md-9 featureBanner">
        <Col className="px-5-md" md={6} xs={12}>
          <Image
            className="centered"
            src={imagePath}
            alt={heading}
            width={width}
            height={height}
          />
        </Col>
        <Col md={6} xs={12}>
          <h3 className="homepageBlueH3">{heading}</h3>
          <p>{content}</p>
        </Col>
      </Row>
    );
  } else {
    dividerContent = (
      <Row className="align-items-center justify-content-center mx-auto col-md-9 featureBanner">
        <Col className="px-5-md" md={6} xs={12}>
          <h3 className="homepageBlueH3">{heading}</h3>
          <p>{content}</p>
        </Col>
        <Col className="justify-content-center" md={6} xs={12}>
          <Image src={imagePath} alt={heading} width={width} height={height} />
        </Col>
      </Row>
    );
  }

  return (
    <>
      <div
        style={{ backgroundImage: "linear-gradient(#242436,#43435F)" }}
        className="bg-dark text-white homePageSection my-5"
      >
        <Container fluid>{dividerContent}</Container>
      </div>
    </>
  );
}
