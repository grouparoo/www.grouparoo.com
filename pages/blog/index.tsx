import Head from "next/head";
import Link from "next/link";
import blogEngine, { getAuthor } from "../../utils/blogEngine";
import { Container, Image } from "react-bootstrap";
import BlogTags from "../../utils/blogTags";
import AuthorBox from "../../components/blog/authorBox";

function blogEntries() {
  return blogEngine.getEntries();
}

function BlogEntry(entry, idx) {
  return (
    <div key={`blogEntry-${idx}`}>
      <Link href={entry.path}>
        <a>
          <h3>{entry.title}</h3>
        </a>
      </Link>
      <h4>{BlogTags(entry.tags)}</h4>
      <p>
        <Link
          href="/blog/author/[author]"
          as={`/blog/author/${entry.author.slug}`}
        >
          <a>
            <Image
              style={{ width: 50, margin: 10 }}
              roundedCircle
              src={require(`../../public/images/team/${entry.author.slug}.png`)}
            />
            {entry.author.name}
          </a>
        </Link>{" "}
        on {entry.dateText()}
      </p>
      <blockquote style={{ color: "darkGray" }}>
        <span style={{ fontSize: 20, fontFamily: "Georgia" }}>"</span>
        <em>{entry.pullQuote}</em>
      </blockquote>
    </div>
  );
}

export default function BlogIndex({ category = "", author = "" }) {
  let blogPosts = blogEntries();

  if (category !== "") {
    blogPosts = blogPosts.filter((entry) => entry.tags.includes(category));
  }

  if (author !== "") {
    blogPosts = blogPosts.filter(
      (entry) => entry.author.name === author || entry.author.slug === author
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
