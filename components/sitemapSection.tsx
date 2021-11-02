import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";

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

  function generateSubItems(pageName, subPages: []) {
    return subPages.forEach((item) => {
      console.log(item);
      return <div>"hi"</div>;
    });
  }

  function generateItem(pageName: string) {
    if (Array.isArray(paths[pageName])) {
      console.log(pageName);
      return generateSubItems(pageName, paths[pageName]);
    }

    const path = `/${category}/${pageName}`;

    return (
      <div key={pageName} className="lg-col-6 col-12">
        <Link href={path}>{pageName}</Link>
      </div>
    );
  }

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
            {paths.map((path) => {
              return generateItem(path);
            })}
          </Row>
        </Col>
      </Container>
    </div>
  );
}
