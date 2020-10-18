import Head from "next/head";
import Link from "next/link";
import getAuthor from "../../utils/getAuthor";
import { Container, Image } from "react-bootstrap";
import BlogTags from "../../utils/blogTags";
import AuthorBox from "../../components/blog/authorBox";
import { loadEntries } from "../../utils/mdxUtils";

export type BlogPost = {
  title: string;
  date: string;
  author: string;
  pullQuote: string;
  tags: string[];
  path: string;
};

function BlogEntry(entry: BlogPost, idx: number) {
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
  let posts: BlogPost[] = pageProps.posts;

  if (category !== "") {
    posts = posts.filter((entry) => entry.tags.includes(category));
  }

  if (author !== "") {
    posts = posts.filter(
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
              Showing {posts.length} articles tagged <strong>{category}</strong>
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
              Showing {posts.length} articles written by{" "}
              <strong>{getAuthor(author).name}</strong>. <br />
              <Link href="/blog">
                <a>Show all articles instead.</a>
              </Link>
            </p>
            <AuthorBox author={getAuthor(author)} />
          </>
        ) : null}

        {posts.length > 0 ? (
          posts.map((entry, idx) => BlogEntry(entry, idx))
        ) : (
          <p>No posts found</p>
        )}
      </Container>
      <br />
    </>
  );
}

export async function getStaticProps() {
  const posts = await loadEntries(["blog"]);

  posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return { props: { posts } };
}
