import Head from "next/head";
import Link from "next/link";
import getAuthor from "../../utils/getAuthor";
import { Container } from "react-bootstrap";
import Image from "../../components/Image";
import { BlogEntry, getBlogEntries } from "../../utils/blogPosts";
import BlogTags from "../../utils/blogTags";
import AuthorBox from "../../components/blog/authorBox";
import { PaginationHelper } from "../../components/paginationHelper";

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
      <div className="d-flex flex-row" style={{ marginBottom: 10 }}>
        <Link href="/blog/author/[author]" as={`/blog/author/${author.slug}`}>
          <a>
            <Image
              roundedCircle
              src={`/images/authors/${author.image}`}
              alt={author.name}
              width={50}
              height={50}
            />
          </a>
        </Link>{" "}
        <div style={{ height: 50 }} className="d-flex align-items-center">
          <p style={{ marginLeft: 10, marginBottom: 0 }}>
            <Link
              href="/blog/author/[author]"
              as={`/blog/author/${author.slug}`}
            >
              <a>{author.name}</a>
            </Link>{" "}
            on {entry.date}
          </p>
        </div>
      </div>
      <blockquote style={{ color: "darkGray" }}>
        <span style={{ fontSize: 20, fontFamily: "Georgia" }}>"</span>
        <em>{entry.pullQuote}</em>
        <span style={{ fontSize: 20, fontFamily: "Georgia" }}>"</span>
      </blockquote>
    </div>
  );
}

export default function BlogIndex({ pageProps }) {
  let entries: BlogEntry[] = pageProps.entries;
  let { limit, offset, total, author, category } = pageProps;

  return (
    <>
      <Head>
        <title>Grouparoo Blog</title>
        <link
          rel="canonical"
          href={pageProps.canonicalUrl || "https://www.grouparoo.com/blog"}
        />
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
        <h1>The Grouparoo Blog</h1>

        {category ? (
          <>
            <p>
              Showing {entries.length} of {total} articles tagged{" "}
              <strong>{category}</strong>
              . <br />
              <Link href="/blog">
                <a>Show all articles</a>
              </Link>
            </p>
          </>
        ) : null}

        {author ? (
          <>
            <p>
              Showing {entries.length} of {total} articles written by{" "}
              <strong>{getAuthor(author).name}</strong>. <br />
              <Link href="/blog">
                <a>Show all articles</a>
              </Link>
            </p>
            <AuthorBox author={getAuthor(author)} />
          </>
        ) : null}

        <hr />

        {entries && entries.length > 0 ? (
          entries.map((entry, idx) => blogEntry(entry, idx))
        ) : (
          <p>No entries found</p>
        )}

        <PaginationHelper
          baseUrl={
            author !== ""
              ? `/blog/author/${author}`
              : category !== ""
              ? `/blog/category/${category}`
              : `/blog/page`
          }
          total={total}
          limit={limit}
          offset={offset}
        />
      </Container>
    </>
  );
}

export async function getStaticProps(ctx) {
  const pageNumber = parseInt(ctx.params?.pageNumber || "1");
  const category = ctx.params?.category || "";
  const author = ctx.params?.author || "";
  const { entries, limit, offset, total } = await getBlogEntries(
    pageNumber,
    author,
    category
  );

  const props = { entries, limit, offset, total, pageNumber, author, category };

  return { props };
}
