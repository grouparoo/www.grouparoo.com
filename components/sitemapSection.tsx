import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { titleize } from "../utils/inflectors";

export default function SitemapSection({
  category,
  paths,
  background,
}: {
  category: string;
  paths: [];
  background: string;
}) {
  let style;
  let classNames;

  background === "dark"
    ? ((style = { backgroundImage: "linear-gradient(#242436,#43435F)" }),
      (classNames = "bg-dark text-white homePageSection my-5"))
    : ((style = null), (classNames = "homePageSection my-5"));
  return (
    <div style={style} className={classNames}>
      <Container>
        <div className="h2 border-bottom">{category}</div>
        <Col>
          <Row>
            {paths.map((pageName: string) => {
              if (pageName.length === 0) return;
              const path = `/${category}/${pageName}`;
              let pageTitle = titleize(pageName).replace(/-/g, " ");

              return (
                <Col key={pageName} className="col-lg-6 col-12">
                  <Link href={path}>{pageTitle}</Link>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
