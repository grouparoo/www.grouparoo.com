import BlogIndex, { getStaticProps as blogIndexStaticProps } from "../../index";
import { getBlogCategoryPaths } from "../../../../utils/sitemap";

export default function BlogIndexWithCategory({ pageProps }) {
  return (
    <BlogIndex
      pageProps={{
        ...pageProps,
        canonicalUrl: `https://www.grouparoo.com/blog/category/${pageProps.category}`,
      }}
    />
  );
}

export async function getStaticProps(ctx) {
  return blogIndexStaticProps(ctx);
}

export async function getStaticPaths() {
  const { paths, fallback } = await getBlogCategoryPaths();
  return { paths, fallback };
}
