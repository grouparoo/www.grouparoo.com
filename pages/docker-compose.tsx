import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const REDIRECT_URL =
  "https://raw.githubusercontent.com/grouparoo/app-example/master/docker-compose.published.yml";

export default function DockerCompose() {
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

DockerCompose.getInitialProps = ({ res }) => {
  if (res) {
    res.writeHead(301, { Location: REDIRECT_URL });
    res.end();
  }

  return {};
};
