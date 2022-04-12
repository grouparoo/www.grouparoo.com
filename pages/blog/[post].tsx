import hydrate from "next-mdx-remote/hydrate";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Alert, Card } from "react-bootstrap";
import Tweet from "../../components/blog/Tweet";
import Image from "../../components/Image";
import BlogTags from "../../utils/blogTags";
import AuthorBox from "../../components/blog/AuthorBox";
import getAuthor from "../../utils/getAuthor";
import { BlogPost, getBlogPost, getBlogPaths } from "../../utils/blogPosts";
import BlogImage from "../../components/blog/Image";
import { PageNavigation } from "../../components/PageNavigation";
import ImageInBrowserFrame from "../../components/ImageInBrowserFrame";

const components = {
  Image: BlogImage,
  ImageInBrowserFrame,
  Alert,
  Card,
  CardBody: Card.Body,
  Tweet,
  Link,
};

export default function BlogPage({ pageProps }) {
  const router = useRouter();
  const post: BlogPost = pageProps.post;
  const content = hydrate(post.source, { components });
  const author = getAuthor(post.author);
  const url = `https://www.grouparoo.com${post.path}`;

  return (
    <>
      <Head>
        <title>{post.seoTitle || `${post.title}: Grouparoo Blog`}</title>
        <meta
          name="description"
          content={post.seoDescription || post.pullQuote}
        />
        <link rel="canonical" href={url} />

        <link
          rel="alternate"
          title="JSON Feed: Grouparoo Blog"
          type="application/feed+json"
          href="https://www.grouparoo.com/feeds/blog.json"
        />
        <link
          rel="alternate"
          title="RSS Feed: Grouparoo Blog"
          type="application/rss+xml"
          href="https://www.grouparoo.com/feeds/blog.xml"
        />

        <meta name="twitter:card" content={post.twitterCard || "summary"} />
        <meta name="twitter:site" content="@grouparoo" />
        <meta name="twitter:creator" content={author.twitter || "@grouparoo"} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.pullQuote} />
        {post.image ? <meta property="og:image" content={post.image} /> : null}
      </Head>

      <Container className="blogPage">
        <h3 style={{ cursor: "pointer" }} onClick={() => router.push("/blog")}>
          The Grouparoo Blog
        </h3>
        <hr />

        <Row>
          <Col md={12}>
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
          </Col>
        </Row>

        <Row>
          <Col md={9}>
            <br />
            <div className="mdxContent">{content}</div>
            <br />
            <AuthorBox author={author} entry={post} />
          </Col>
          <Col>
            <TwitterLink post={post} />
            <br />
            <div
              style={{
                position: "sticky",
                top: 10,
              }}
            >
              <PageNavigation />
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
}

function TwitterLink({ post }: { post: BlogPost }) {
  return (
    <Row>
      <Col>
        <a
          href={`https://twitter.com/intent/tweet?text="${
            post.title
          }" from @grouparoo &url=${`https://www.grouparoo.com${post.path}`}`}
          target="_blank"
          rel="noreferrer nofollow"
        >
          <div style={{ height: 25 }} className="d-flex align-items-center">
            <p style={{ marginRight: 5, marginBottom: 0, marginTop: 0 }}>
              Share this post
            </p>
            <Image
              src="/images/home/twitter.png"
              alt="Twitter Logo"
              width={25}
              height={25}
            />
          </div>
        </a>
      </Col>
    </Row>
  );
}

export async function getStaticProps({ params }) {
  const post = await getBlogPost(params.post);
  return { props: { post } };
}

export async function getStaticPaths() {
  return getBlogPaths();
}
