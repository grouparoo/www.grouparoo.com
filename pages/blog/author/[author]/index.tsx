import BlogIndex, { getStaticProps as blogIndexStaticProps } from "../../index";
import { getAuthorPaths } from "../../../../utils/sitemap";

export default function BlogIndexWithCategory({ pageProps }) {
  return <BlogIndex pageProps={pageProps} />;
}

export async function getStaticProps(ctx) {
  return blogIndexStaticProps(ctx);
}

export async function getStaticPaths() {
  const { paths, fallback } = await getAuthorPaths();
  return { paths, fallback };
}
