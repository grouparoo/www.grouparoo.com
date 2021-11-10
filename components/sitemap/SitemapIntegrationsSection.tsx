import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { SitemapItem } from "../../pages/public-sitemap";

export default function SitemapIntegrationsSection({
  sources,
  destinations,
  guides,
}: {
  sources: SitemapItem[];
  destinations: SitemapItem[];
  guides: SitemapItem[];
}) {
  return (
    <div
      style={{ backgroundImage: "linear-gradient(#242436,#43435F)" }}
      className="bg-dark text-white homePageSection my-5"
    >
      <Container>
        <h2 className="border-bottom col-10 mx-auto">Integrations</h2>
        <Col className="col-9 mx-auto">
          <Row>
            <h3 className="col-12 mb-1 mt-3">Sources</h3>
            {sources.map((source) => (
              <Col key={source.path} className="col-md-6 col-12 my-1">
                <Link href={source.path}>{source.name}</Link>
              </Col>
            ))}
          </Row>
          <Row>
            <h3 className="col-12 mb-1 mt-3">Destinations</h3>
            {destinations.map((destination) => (
              <Col key={destination.path} className="col-md-6 col-12 my-1">
                <Link href={destination.path}>{destination.name}</Link>
              </Col>
            ))}
          </Row>
          <Row>
            <h3 className="col-12 mb-1 mt-3">Guides</h3>
            {guides.map((guide) => (
              <Col key={guide.path} className="col-md-6 col-12 my-1">
                <Link href={guide.path}>{guide.name}</Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
