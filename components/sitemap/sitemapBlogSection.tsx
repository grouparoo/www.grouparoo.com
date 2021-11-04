import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { titleize } from "../../utils/inflectors";
import { BlogEntry } from "../../utils/blogPosts";

export default function SitemapBlogSection({
  entries,
}: {
  entries: Record<string, BlogEntry[]>;
}) {
  return (
    <div className="homePageSection my-5">
      <Container>
        <div className="h2 col-10 mx-auto border-bottom">Blog</div>
        <Col className="col-9 mx-auto">
          <Row>
            {Object.keys(entries).map((category) => {
              <Row key={category} className="col-12">
                <h3 className="col-12 mb-1 mt-3">{titleize(category)}</h3>
                {entries[category].map((entry) => {
                  <Col key={entry.slug} className="col-lg-6 col-12 my-1">
                    <Link href={`/blog/${entry.slug}`}>{entry.title}</Link>
                  </Col>;
                })}
              </Row>;
            })}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
