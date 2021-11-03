import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { titleize } from "../../utils/inflectors";
import { BlogEntry } from "../../utils/blogPosts";
import ComparisonPage from "../solutions/comparisonPage";

export default function SitemapBlogSection({
  entries,
}: {
  entries: { [key: string]: BlogEntry[] };
}) {
  return (
    <div
      style={{ backgroundImage: "linear-gradient(#242436,#43435F)" }}
      className="bg-dark text-white homePageSection my-5"
    >
      <Container>
        <div className="h2 border-bottom">Blog</div>
        <Col>
          <Row>
            {Object.keys(entries).map((category) => {
              return (
                <Row>
                  <h3 className="col-12 mb-1 mt-3">{titleize(category)}</h3>
                  {entries[category].map((entry) => {
                    let path = `/blog/${entry.slug}`;
                    return (
                      <Col key={entry.slug} className="col-lg-6 col-12">
                        <Link href={path}>{entry.title}</Link>
                      </Col>
                    );
                  })}
                </Row>
              );
            })}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
