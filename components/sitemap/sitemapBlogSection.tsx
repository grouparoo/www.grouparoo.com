import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { titleize } from "../../utils/inflectors";
import { Sitemap, SitemapItem } from "../../pages/public-sitemap";
import { badgeTypes } from "../../data/blogTags";

export default function SitemapBlogSection(props: Sitemap["blog"]) {
  return (
    <div className="homePageSection my-5">
      <Container>
        <div className="h2 col-10 mx-auto border-bottom">Blog</div>
        <Col className="col-9 mx-auto">
          <Row>
            {Object.entries(props).map(
              ([category, items]: [keyof typeof badgeTypes, SitemapItem[]]) =>
                items.length ? (
                  <Row key={category} className="col-12">
                    <h3 className="col-12 mb-1 mt-3">{titleize(category)}</h3>
                    {items.map((item) => (
                      <Col key={item.path} className="col-lg-6 col-12 my-1">
                        <Link href={item.path}>{item.name}</Link>
                      </Col>
                    ))}
                  </Row>
                ) : null
            )}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
