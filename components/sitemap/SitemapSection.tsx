import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { titleize } from "../../utils/inflectors";
import type { SitemapItem } from "../../pages/public-sitemap";
import { useMemo } from "react";

export default function SitemapSection({
  category,
  sitemapItems,
  background,
}: {
  category: string;
  sitemapItems: SitemapItem[];
  background: string;
}) {
  const { style, classNames } = useMemo(() => {
    if (background === "dark") {
      return {
        style: { backgroundImage: "linear-gradient(#242436,#43435F)" },
        classNames: "bg-dark text-white homePageSection my-5",
      };
    }
    return { classNames: "homePageSection my-5" };
  }, [background]);

  return (
    <div style={style} className={classNames}>
      <Container>
        <div className="h2 col-10 mx-auto border-bottom">
          {titleize(category)}
        </div>
        <Col className="col-9 mx-auto">
          <Row>
            {sitemapItems.map(({ name, path }) => (
              <Col key={path} className="col-md-6 col-12">
                <Link href={path}>{name}</Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
