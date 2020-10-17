import Head from "next/head";
import Link from "next/link";
import getAuthor from "../../utils/getAuthor";
import { Container, Image } from "react-bootstrap";
import BlogTags from "../../utils/blogTags";
import AuthorBox from "../../components/blog/authorBox";
import fs from "fs";
import path from "path";
import glob from "glob";
import matter from "gray-matter";

function BlogEntry(entry, idx) {
  const author = getAuthor(entry.author);

  return (
    <div key={`blogEntry-${idx}`}>
      <Link href={entry.path}>
        <a>
          <h3>{entry.title}</h3>
        </a>
      </Link>
      <h4>{BlogTags(entry.tags)}</h4>
      <p>
        <Link href="/blog/author/[author]" as={`/blog/author/${author.slug}`}>
          <a>
            <Image
              style={{ width: 50, margin: 10 }}
              roundedCircle
              src={require(`../../public/images/authors/${author.slug}.png`)}
            />
            {author.name}
          </a>
        </Link>{" "}
        on {entry.date}
      </p>
      <blockquote style={{ color: "darkGray" }}>
        <span style={{ fontSize: 20, fontFamily: "Georgia" }}>"</span>
        <em>{entry.pullQuote}</em>
      </blockquote>
    </div>
  );
}

export default function BlogIndex({ pageProps, category = "", author = "" }) {
  let blogPosts = pageProps.entries;

  if (category !== "") {
    blogPosts = blogPosts.filter((entry) => entry.tags.includes(category));
  }

  if (author !== "") {
    blogPosts = blogPosts.filter(
      (entry) =>
        getAuthor(entry.author).name === author ||
        getAuthor(entry.author).slug === author
    );
  }

  return (
    <>
      <Head>
        <title>Grouparoo Blog</title>
      </Head>

      <Container>
        <h1>Blog</h1>

        {category ? (
          <>
            <p>
              Showing {blogPosts.length} articles tagged{" "}
              <strong>{category}</strong>. <br />
              <Link href="/blog">
                <a>Show all articles instead.</a>
              </Link>
            </p>
            <hr />
          </>
        ) : null}

        {author ? (
          <>
            <p>
              Showing {blogPosts.length} articles written by{" "}
              <strong>{getAuthor(author).name}</strong>. <br />
              <Link href="/blog">
                <a>Show all articles instead.</a>
              </Link>
            </p>
            <AuthorBox author={getAuthor(author)} />
          </>
        ) : null}

        {blogPosts.length > 0 ? (
          blogPosts.map((entry, idx) => BlogEntry(entry, idx))
        ) : (
          <p>No posts found</p>
        )}
      </Container>
      <br />
    </>
  );
}

export async function getStaticProps() {
  const entries = [];
  const files = glob.sync(path.join(process.cwd(), "pages", "blog", `*.mdx`));
  for (const i in files) {
    const source = fs.readFileSync(files[i]);
    const { data } = matter(source);
    data.path = `/blog/${path.parse(files[i]).base.split(".")[0]}`;
    entries.push(data);
  }

  return { props: { entries } };
}
