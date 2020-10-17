import BlogIndex, { getStaticProps as blogIndexStaticProps } from "../index";
import Authors from "../../../data/authors";
import { useRouter } from "next/router";

export default function BlogIndexWithCategory({ pageProps }) {
  const router = useRouter();
  const { author } = router.query;
  return (
    <BlogIndex
      pageProps={pageProps}
      author={Array.isArray(author) ? author[0] : author}
    />
  );
}

export async function getStaticProps() {
  return blogIndexStaticProps();
}

export async function getStaticPaths() {
  const paths = Authors.map((a) => `/blog/author/${a.slug}`);

  return {
    paths,
    fallback: false,
  };
}
