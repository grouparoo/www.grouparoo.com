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
              <br />
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
              <br />
              <p>
                <em>
                  "Grouparoo has definitely helped us level up our customer data
                  infrastructure. They've created an all-in-one platform that
                  gets our data to the platforms that need it the most."
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
