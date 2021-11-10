import { Col, Row } from "react-bootstrap";
import Image from "../Image";

export interface TeamMemberProps {
  name: string;
  image: string;
  title: string;
  description: JSX.Element;
  github?: string;
  twitter?: string;
  linkedIn?: string;
}

export default function TeamMember({
  name,
  image,
  title,
  description,
  github,
  twitter,
  linkedIn,
}: TeamMemberProps) {
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
      <Row className="justify-content-center">
        {github ? (
          <Col xs={2} className="px-1">
            <a href={github} target="_blank" rel="noreferrer">
              <SocialIconGrayscale name="github" />
            </a>
          </Col>
        ) : null}
        {twitter ? (
          <Col xs={2} className="px-1">
            <a href={twitter} target="_blank" rel="noreferrer">
              <SocialIconGrayscale name="twitter" />
            </a>
          </Col>
        ) : null}
        {linkedIn ? (
          <Col xs={2} className="px-1">
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <SocialIconGrayscale name="linkedin" />
            </a>
          </Col>
        ) : null}
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
        width={18}
        height={18}
      />
    </div>
  );
}
