import BlogIndex, { getStaticProps as blogIndexStaticProps } from "../../index";
import Authors from "../../../../data/authors";

export default function BlogIndexWithCategory({ pageProps }) {
  return <BlogIndex pageProps={pageProps} />;
}

export async function getStaticProps(ctx) {
  return blogIndexStaticProps(ctx);
}

export async function getStaticPaths() {
  const paths = Authors.map((a) => `/blog/author/${a.slug}`);

  return {
    paths,
    fallback: false,
  };
}
