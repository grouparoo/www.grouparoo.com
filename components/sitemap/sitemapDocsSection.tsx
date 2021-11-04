import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { SitemapItem } from "../../pages/public-sitemap";
import { titleize } from "../../utils/inflectors";

function SitemapDocsSection({ docs }: { docs: Record<string, SitemapItem[]> }) {
  return (
    <div className="homePageSection my-5">
      <Container>
        <h2 className="border-bottom col-10 mx-auto">Docs</h2>
        <Col className="col-9 mx-auto">
          {Object.entries(docs).map(
            ([category, pages]: [string, SitemapItem[]]) => (
              <Row key={category}>
                <h3 className="col-12 mb-1 mt-3">{titleize(category)}</h3>
                {pages.map(({ path, name }) => (
                  <Col key={path} className="col-md-6 col-12 my-1">
                    <Link href={path}>{name}</Link>
                  </Col>
                ))}
              </Row>
            )
          )}
        </Col>
      </Container>
    </div>
  );
}

export { SitemapDocsSection };
