import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import rehypePrism from "@mapbox/rehype-prism";
import matter from "gray-matter";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col, Alert, Image, Card } from "react-bootstrap";
import BlogTags from "../../utils/blogTags";
import Subscribe from "../../components/subscribe";
import AuthorBox from "../../components/blog/authorBox";
import getAuthor from "../../utils/getAuthor";
import path from "path";
import fs from "fs";
import glob from "glob";

import BlogImage from "../../components/blog/image";

const components = { Image: BlogImage, Alert, Card, CardBody: Card.Body };

export default function BlogPage({ pageProps }) {
  const router = useRouter();

  const { source, frontMatter } = pageProps;
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
  const mdxOptions = {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrism, {}]],
    extendFrontMatter: {
      process: (mdxContent, frontMatter) => {},
      phase: "both",
    },
  };

  const file = path.join(process.cwd(), "pages", "blog", `${params.post}.mdx`);
  const source = fs.readFileSync(file);
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
    mdxOptions,
  });

  return { props: { source: mdxSource, frontMatter: data } };
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), "pages", "blog");
  const paths = glob
    .sync(path.join(dir, "*.mdx"))
    .map((p) => path.parse(p).base)
    .map((p) => p.split(".")[0])
    .map((p) => `/blog/${p}`);

  return {
    paths,
    fallback: false,
  };
}
