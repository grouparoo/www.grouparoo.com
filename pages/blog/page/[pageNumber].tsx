import { pagesCount } from "../../../utils/blogPosts";
export { default, getStaticProps } from "../index";

export async function getStaticPaths() {
  const pages = await pagesCount();
  const paths = [];
  for (let i = 0; i < pages; i++) {
    paths.push({ params: { pageNumber: i.toString() } });
  }

  return {
    paths: paths,
    fallback: true,
  };
}
