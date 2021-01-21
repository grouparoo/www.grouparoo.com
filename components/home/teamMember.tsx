import { Row, Col } from "react-bootstrap";
import Image from "../Image";

export default function TeamMember({
  name,
  image,
  title,
  description,
  github,
  twitter,
  linkedIn,
}) {
  return (
    <div style={{ width: 250, paddingBottom: 20 }}>
      <Row>
        <Col>
          <Image
            roundedCircle
            src={`/images/team/${image}`}
            alt={name}
            width={150}
            height={150}
          />
          <p>
            <strong>{name}</strong>
            <br />
            {title}
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={2}>
          <a href={github} target="_blank" rel="noreferrer">
            <SocialIconGrayscale name="github" />
          </a>
        </Col>
        <Col xs={2}>
          <a href={twitter} target="_blank" rel="noreferrer">
            <SocialIconGrayscale name="twitter" />
          </a>
        </Col>
        <Col xs={2}>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <SocialIconGrayscale name="linkedin" />
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-muted" style={{ fontSize: 12 }}>
            {description}
          </p>
        </Col>
      </Row>
    </div>
  );
}

function SocialIconGrayscale({ name }) {
  return (
    <div style={{ filter: "grayscale(100%)" }}>
      <Image
        src={`/images/home/${name}.png`}
        alt={name}
        width={20}
        height={20}
      />
    </div>
  );
}
