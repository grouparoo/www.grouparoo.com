import Image from "next/image";
import Link from "next/link";
import { Card, Row, Col } from "react-bootstrap";

export const AcquiredCard = () => (
  <Card bg="info">
    <Card.Header as="h2">Grouparoo has been acquired by Airbyte!</Card.Header>
    <Card.Body>
      <Row>
        <Col md={3}>
          <Image
            width={800}
            height={540}
            alt="Gropuaroo + Airbyte logos"
            src="/images/2022-Grouparoo.png"
          />
        </Col>
        <Col md={9}>
          <p>
            We are excited to announce that Grouparoo has joined Airbyte to
            accelerate data movement.
          </p>
          <p>
            With Grouparoo and Airbyte joining forces, we are on our way to
            offering a unique place in the open-source ecosystem where every
            data engineer, every analytics engineer, every data analyst can
            easily move data whether for analytics or operational use cases.
          </p>
          <p>
            See the full announcement on the{" "}
            <Link href="https://airbyte.com/blog/airbyte-acquires-grouparoo-to-accelerate-data-movement">
              <a style={{ color: "#2fe5a4" }} target="_blank">
                Airbyte Blog
              </a>
            </Link>{" "}
            , and see{" "}
            <Link href="/blog/grouparoo-acquired-by-airbyte">
              <a style={{ color: "#2fe5a4" }}>Grouparoo's message</a>
            </Link>{" "}
            to our community.
          </p>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);
