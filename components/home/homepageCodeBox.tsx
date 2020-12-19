import { Row, Col } from "react-bootstrap";
import Image from "../Image";

export default function HomepageCodeBox({ code, icon }) {
  return (
    <div
      style={{
        color: "white",
        fontFamily: "Courier",
        backgroundColor: "#43435F",
        fontSize: 20,
        padding: 30,
        marginTop: 20,
        borderRadius: 4,
        border: "1px solid #000000",
        wordWrap: "break-word",
      }}
    >
      <Row className="align-items-center">
        <Col md={2}>
          <div style={{ paddingBottom: 10 }}>
            <Image
              src={`/images/home/${icon}.svg`}
              alt={icon}
              width={46}
              height={46}
            />
          </div>
        </Col>
        <Col>{code}</Col>
      </Row>
    </div>
  );
}
