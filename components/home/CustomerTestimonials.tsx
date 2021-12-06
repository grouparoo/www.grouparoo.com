import { Container, Row, Col } from "react-bootstrap";
import Image from "../Image";
import Link from "next/link";

export default function CustomerTestimonials() {
  return (
    <>
      <div
        id="customer-testimonials"
        className="bg-dark text-white homePageSection"
      >
        <Container>
          <Row>
            <Col>
              <div style={{ height: 60, verticalAlign: "center" }}>
                <Link href="https://chipax.com">
                  <a target="_blank" rel="nofollow noopener noreferrer">
                    <Image
                      src="/images/home/customer-logos/chipax-logo@2x.png"
                      alt="Chipax logo"
                      height={60}
                      width={187}
                      id="customer-logo"
                      className="customerLogo"
                    />
                  </a>
                </Link>
              </div>
            </Col>
            <Col>
              <div
                style={{ height: 60, marginTop: 16, verticalAlign: "center" }}
              >
                <Link href="https://sendoso.com">
                  <a target="_blank" rel="nofollow noopener noreferrer">
                    <Image
                      src="/images/home/customer-logos/Sendoso-Logo-1.svg"
                      alt="Sendoso logo"
                      height={27}
                      width={123}
                      id="customer-logo"
                      className="customerLogo"
                    />
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <em>
                  "I was able to set up a process that merges and maintains user
                  profiles with data from multiple sources in just a few minutes
                  and I wish we had it years ago.
                </em>
              </p>{" "}
              <p>-- Joaquín Brenner, Co-founder and COO @ Chipax</p>
            </Col>
            <Col>
              <p>
                <em>
                  &quot;Grouparoo has definitely helped us level up our customer
                  data infrastructure. They&apos;ve created an all-in-one
                  platform that gets our data to the platforms that need it the
                  most.&quot;
                </em>
              </p>{" "}
              <p>-- Francis Yango, Product @ Sendoso</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
