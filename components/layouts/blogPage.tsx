import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BlogEntry } from "../../utils/blogEngine";
import { Container, Row, Col, Image } from "react-bootstrap";
import BlogTags from "../../utils/blogTags";
import Subscribe from "../subscribe";
import AuthorBox from "../blog/authorBox";

export default function BlogPageLayout({ frontMatter, children: content }) {
  const router = useRouter();
  const entry = new BlogEntry(frontMatter);

  return (
    <>
      <Head>
        <title> Grouparoo Blog: {entry.title}</title>
        <meta name="description" content={entry.pullQuote} />
        <link rel="canonical" href={`http://www.grouparoo.com${entry.path}`} />
      </Head>

      <Container className="blogPage">
        <h3 onClick={() => router.push("/blog")}>The Grouparoo Blog</h3>
        <hr />

        <Row>
          <Col md={9}>
            <h1 id="blogTitle">{entry.title}</h1>
            <small>
              Tagged in {BlogTags(entry.tags)} <br />
              By{" "}
              <Link
                href="/blog/author/[slug]"
                as={`/blog/author/${entry.author.slug}`}
              >
                <a>{entry.author.name}</a>
              </Link>{" "}
              on {entry.dateText()}
            </small>
            <br />
            <br />
            <div style={{ lineHeight: "150%" }} id="blogContent">
              {content}
            </div>
            <br />
            <AuthorBox author={entry.author} entry={entry} />
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
