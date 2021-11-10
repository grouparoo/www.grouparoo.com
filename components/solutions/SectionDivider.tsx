import { Row, Col, Container } from "react-bootstrap";
import Image from "../Image";
import ImageInBrowserFrame from "../ImageInBrowserFrame";

export default function SectionDivider({
  imagePath,
  height,
  width,
  background,
  heading,
  content,
  imageLeft,
  browser,
}: {
  imagePath: string;
  height: number;
  width: number;
  imageLeft: string;
  background: string;
  heading: string;
  content: string;
  browser: string;
}) {
  let dividerContent;

  if (content.length === 0) {
    dividerContent = (
      <Row className="align-items-center justify-content-center mx-auto featureBanner">
        <Col className="col-5">
          {browser === "true" ? (
            <ImageInBrowserFrame
              src={imagePath}
              alt={heading}
              width={width}
              height={height}
            />
          ) : (
            <Image
              src={imagePath}
              alt={heading}
              width={width}
              height={height}
            />
          )}
        </Col>
      </Row>
    );
  }
  if (imageLeft === "true") {
    dividerContent = (
      <Row className="align-items-center justify-content-center mx-auto col-md-9 featureBanner">
        <Col className="px-5-md" md={6} xs={12}>
          {browser === "true" ? (
            <ImageInBrowserFrame
              src={imagePath}
              alt={heading}
              width={width}
              height={height}
            />
          ) : (
            <Image
              src={imagePath}
              alt={heading}
              width={width}
              height={height}
            />
          )}
        </Col>
        <Col md={6} xs={12}>
          <h3 className="homepageBlueH3">{heading}</h3>
          <p>{content}</p>
        </Col>
      </Row>
    );
  } else if (imageLeft === "false") {
    dividerContent = (
      <Row className="align-items-center justify-content-center mx-auto col-md-9 featureBanner">
        <Col className="px-5-md" md={6} xs={12}>
          <h3 className="homepageBlueH3">{heading}</h3>
          <p>{content}</p>
        </Col>
        <Col className="justify-content-center" md={6} xs={12}>
          {browser === "true" ? (
            <ImageInBrowserFrame
              src={imagePath}
              alt={heading}
              width={width}
              height={height}
            />
          ) : (
            <Image
              src={imagePath}
              alt={heading}
              width={width}
              height={height}
            />
          )}
        </Col>
      </Row>
    );
  }

  const setBackground =
    background === "none" ? "none" : "linear-gradient(#242436,#43435F)";
  const classes =
    background === "none"
      ? "homePageSection"
      : "bg-dark text-white homePageSection my-5";
  return (
    <>
      <div style={{ backgroundImage: setBackground }} className={classes}>
        <Container fluid>{dividerContent}</Container>
      </div>
    </>
  );
}
