import { Container, Row, Col } from "react-bootstrap";
import Image from "../components/Image";
import Link from "next/link";

export default function FourOhFour() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Oops.</h1>

          <Row>
            <Col md={6}>
              <Image
                width="100%"
                src="https://media.giphy.com/media/5dWWa4tYjpBSM/giphy.gif"
                alt="Kangaroo dropping ball"
                rounded
              />
            </Col>

            <Col md={6}>
              <p>Well... this is embarrassing. </p>
              <p>
                This is not a page I have. Want to{" "}
                <Link href="/">
                  <a>go back home</a>
                </Link>
                ?
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
