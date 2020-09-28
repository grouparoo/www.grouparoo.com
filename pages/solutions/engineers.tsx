import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const REDIRECT_URL = "/";

export default function Engineers() {
  useEffect(() => {
    global.location.href = REDIRECT_URL;
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <p>Redirecting...</p>
        </Col>
      </Row>
    </Container>
  );
}

Engineers.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(301, { Location: REDIRECT_URL });
    res.end();
  }

  return {};
};
