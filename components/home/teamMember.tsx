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
    <div style={{ width: 150, paddingBottom: 20 }}>
      <Row>
        <Col>
          <Image
            unsized
            style={{ height: 150, width: 150, objectFit: "cover" }}
            roundedCircle
            src={`/public/images/team/${image}`}
            alt={name}
          />
          <p>
            <strong>{name}</strong>
            <br />
            {title}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href={github} target="_blank" rel="noreferrer">
            <SocialIconGrayscale name="github" />
          </a>
        </Col>
        <Col>
          <a href={twitter} target="_blank" rel="noreferrer">
            <SocialIconGrayscale name="twitter" />
          </a>
        </Col>
        <Col>
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
    <Image
      unsized
      style={{ filter: "grayscale(100%)", width: "20px" }}
      src={`/images/home/${name}.png`}
      alt={name}
    />
  );
}
