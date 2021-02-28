import BlogIndex, { getStaticProps as blogIndexStaticProps } from "../../index";
import Authors from "../../../../data/authors";
import { useRouter } from "next/router";

export default function BlogIndexWithCategory({ pageProps }) {
  const router = useRouter();
  const { author } = router.query;
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
