import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Alert, Image, Card } from "react-bootstrap";
import BlogTags from "../../utils/blogTags";
import Subscribe from "../../components/subscribe";
import AuthorBox from "../../components/blog/authorBox";
import getAuthor from "../../utils/getAuthor";
import { BlogPost, getBlogPost, getBlogPaths } from "../../utils/blogPosts";
import BlogImage from "../../components/blog/image";

const components = { Image: BlogImage, Alert, Card, CardBody: Card.Body };

export default function BlogPage({ pageProps }) {
  const router = useRouter();
  const post: BlogPost = pageProps.post;
  const content = hydrate(post.source, { components });
  const author = getAuthor(post.author);

  return (
    <>
      <Head>
        <title> Grouparoo Blog: {post.title}</title>
        <meta name="description" content={post.pullQuote} />
        <link rel="canonical" href={`http://www.grouparoo.com${post.path}`} />
        <link
          rel="alternate"
          title="JSON Feed: Grouparoo Blog"
          type="application/feed+json"
          href="https://www.grouparoo.com/api/feeds/blog.json"
        />
        <link
          rel="alternate"
          title="RSS Feed: Grouparoo Blog"
          type="application/rss+xml"
          href="https://www.grouparoo.com/api/feeds/blog.xml"
        />
      </Head>

      <Container className="blogPage">
        <h3 onClick={() => router.push("/blog")}>The Grouparoo Blog</h3>
        <hr />

        <Row>
          <Col md={9}>
            <h1 id="blogTitle">{post.title}</h1>
            <small>
              Tagged in {BlogTags(post.tags)} <br />
              By{" "}
              <Link
                href="/blog/author/[slug]"
                as={`/blog/author/${author.slug}`}
              >
                <a>{author.name}</a>
              </Link>{" "}
              on {post.date}
            </small>
            <br />
            <br />
            <div style={{ lineHeight: "150%" }} id="blogContent">
              {content}
            </div>
            <br />
            <AuthorBox author={author} entry={post} />
          </Col>

          <Col>
            <Subscribe />
            <a
              href={`https://twitter.com/intent/tweet?text="${
                post.title
              }" from @grouparoo &url=${`https://www.grouparoo.com${post.path}`}`}
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
  const post = await getBlogPost(params.post);
  return { props: { post } };
}

export async function getStaticPaths() {
  return getBlogPaths();
}
