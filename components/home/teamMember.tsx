import { Row, Col, Image } from "react-bootstrap";

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
            style={{ height: 150, width: 150, objectFit: "cover" }}
            roundedCircle
            src={require(`../../public/images/team/${image}`)}
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
      width="20"
      style={{ filter: "grayscale(100%)" }}
      src={require(`../../public/images/home/${name}.png`)}
      alt={name}
    />
  );
}
