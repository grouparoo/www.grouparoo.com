import Head from "next/head";
import Link from "next/link";
import { BlogEntry } from "../../utils/blogEngine";
import { Container, Row, Col, Image } from "react-bootstrap";
import BlogTags from "../../utils/blogTags";
import Subscribe from "../subscribe";

export default function BlogPageLayout({ frontMatter, children: content }) {
  const entry = new BlogEntry(frontMatter);
  return (
    <>
      <Head>
        <title> Grouparoo Blog: {entry.title}</title>
        <meta name="description" content={entry.pullQuote} />
        <link rel="canonical" href={`http://www.grouparoo.com${entry.path}`} />
      </Head>

      <Container className="blogPage">
        <h3>The Grouparoo Blog</h3>
        <hr />

        <Row>
          <Col md={9}>
            <h1 id="blogTitle">{entry.title}</h1>
            <p>
              <Link
                href="/blog/author/[author]"
                as={`/blog/author/${entry.author}`}
              >
                <a>
                  <Image
                    style={{ width: 50, margin: 10 }}
                    roundedCircle
                    src={require(`../../public/images/team/${entry.author}.png`)}
                  />
                  {entry.author}
                </a>
              </Link>{" "}
              on {entry.dateText()} in {BlogTags(entry.tags)}
            </p>
            <div style={{ lineHeight: "200%" }} id="blogContent">
              {content}
            </div>
          </Col>
          <Col>
            <Subscribe />
            <a
              href={`https://twitter.com/intent/tweet?text="${
                entry.title
              }" from @grouparoo &url=${`https://www.grouparoo.com${entry.path}`}`}
              target="_blank"
            >
              <p>
                Share this post{" "}
                <Image
                  style={{ width: 25 }}
                  src={require("../../public/images/home/twitter.png")}
                />
              </p>
            </a>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}
