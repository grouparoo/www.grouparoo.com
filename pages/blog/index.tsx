import Head from "next/head";
import Link from "next/link";
import getAuthor from "../../utils/getAuthor";
import { Container, Image } from "react-bootstrap";
import { BlogEntry, getBlogEntries } from "../../utils/blogPosts";
import BlogTags from "../../utils/blogTags";
import AuthorBox from "../../components/blog/authorBox";

function blogEntry(entry: BlogEntry, idx: number) {
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
  let entries: BlogEntry[] = pageProps.entries;

  if (category !== "") {
    entries = entries.filter((entry) => entry.tags.includes(category));
  }

  if (author !== "") {
    entries = entries.filter(
      (entry) =>
        getAuthor(entry.author).name === author ||
        getAuthor(entry.author).slug === author
    );
  }

  return (
    <>
      <Head>
        <title>Grouparoo Blog</title>
        <link rel="canonical" href="https://www.grouparoo.com/blog" />
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
      </Head>

      <Container>
        <h1>Blog</h1>

        {category ? (
          <>
            <p>
              Showing {entries.length} articles tagged{" "}
              <strong>{category}</strong>
              . <br />
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
              Showing {entries.length} articles written by{" "}
              <strong>{getAuthor(author).name}</strong>. <br />
              <Link href="/blog">
                <a>Show all articles instead.</a>
              </Link>
            </p>
            <AuthorBox author={getAuthor(author)} />
          </>
        ) : null}

        {entries.length > 0 ? (
          entries.map((entry, idx) => blogEntry(entry, idx))
        ) : (
          <p>No entries found</p>
        )}
      </Container>
      <br />
    </>
  );
}

export async function getStaticProps() {
  const entries = await getBlogEntries();
  return { props: { entries } };
}
