import BlogIndex, { getStaticProps as blogIndexStaticProps } from "../index";
import { badgeTypes } from "../../../utils/blogTags";
import { useRouter } from "next/router";

export default function BlogIndexWithCategory({ pageProps }) {
  const router = useRouter();
  const { category } = router.query;
  return (
    <BlogIndex
      pageProps={pageProps}
      category={Array.isArray(category) ? category[0] : category}
    />
  );
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
