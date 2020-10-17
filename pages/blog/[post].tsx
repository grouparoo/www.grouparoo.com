import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Alert, Image, Card } from "react-bootstrap";
import BlogTags from "../../utils/blogTags";
import Subscribe from "../../components/subscribe";
import AuthorBox from "../../components/blog/authorBox";
import getAuthor from "../../utils/getAuthor";
import { loadMdxFile, getStaticMdxPaths } from "../../utils/mdxUtils";
import BlogImage from "../../components/blog/image";
import { BlogPost } from "./index";

const components = { Image: BlogImage, Alert, Card, CardBody: Card.Body };

export default function BlogPage({ pageProps }) {
  const router = useRouter();
  const {
    source,
    frontMatter,
  }: { source: any; frontMatter: BlogPost } = pageProps;
  const content = hydrate(source, { components });
  const author = getAuthor(frontMatter.author);

  return (
    <>
      <Head>
        <title> Grouparoo Blog: {frontMatter.title}</title>
        <meta name="description" content={frontMatter.pullQuote} />
        <link
          rel="canonical"
          href={`http://www.grouparoo.com${frontMatter.path}`}
        />
      </Head>

      <Container className="blogPage">
        <h3 onClick={() => router.push("/blog")}>The Grouparoo Blog</h3>
        <hr />

        <Row>
          <Col md={9}>
            <h1 id="blogTitle">{frontMatter.title}</h1>
            <small>
              Tagged in {BlogTags(frontMatter.tags)} <br />
              By{" "}
              <Link
                href="/blog/author/[slug]"
                as={`/blog/author/${author.slug}`}
              >
                <a>{author.name}</a>
              </Link>{" "}
              on {frontMatter.date}
            </small>
            <br />
            <br />
            <div style={{ lineHeight: "150%" }} id="blogContent">
              {content}
            </div>
            <br />
            <AuthorBox author={author} entry={frontMatter} />
          </Col>

          <Col>
            <Subscribe />
            <a
              href={`https://twitter.com/intent/tweet?text="${
                frontMatter.title
              }" from @grouparoo &url=${`https://www.grouparoo.com${frontMatter.path}`}`}
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

export async function getStaticProps({ params }) {
  const props = await loadMdxFile(["blog", `${params.post}.mdx`], components);
  return { props };
}

export async function getStaticPaths() {
  return getStaticMdxPaths(["blog"]);
}
