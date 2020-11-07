import { Row, Col } from "react-bootstrap";
import Image from "../Image";

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
