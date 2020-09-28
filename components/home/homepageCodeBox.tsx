import { Row, Col, Image } from "react-bootstrap";

export default function HomepageCodeBox({ code, icon }) {
  return (
    <div
      style={{
        color: "white",
        fontFamily: "Courier",
        backgroundColor: "black",
        fontSize: 20,
        padding: 30,
        marginTop: 20,
        borderRadius: 4,
        border: "2px solid #29ABE2",
        wordWrap: "break-word",
      }}
    >
      <Row className="align-items-center">
        <Col md={2}>
          {/* Desktop */}
          <Image
            className="d-none d-md-block"
            style={{ paddingBottom: 0 }}
            src={require(`../../public/images/home/${icon}.svg`)}
          />

          {/* Mobile  */}
          <Image
            className="d-md-none"
            style={{ paddingBottom: 20 }}
            src={require(`../../public/images/home/${icon}.svg`)}
          />
        </Col>
        <Col>{code}</Col>
      </Row>
    </div>
  );
}
