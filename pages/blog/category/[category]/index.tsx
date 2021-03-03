import BlogIndex, { getStaticProps as blogIndexStaticProps } from "../../index";
import { badgeTypes } from "../../../../utils/blogTags";

export default function BlogIndexWithCategory({ pageProps }) {
  return <BlogIndex pageProps={pageProps} />;
}

export async function getStaticProps(ctx) {
  return blogIndexStaticProps(ctx);
}

export async function getStaticPaths() {
  const paths = Object.keys(badgeTypes).map((tag) => `/blog/category/${tag}`);

  return {
    paths,
    fallback: false,
  };
}
