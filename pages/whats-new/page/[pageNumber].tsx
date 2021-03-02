export { default, getStaticProps } from "../index";

export async function getStaticPaths() {
  const pageNumbers = [1, 2, 3, 4, 5];

  const paths = pageNumbers.map(
    (pageNumber) => `/whats-new/page/${pageNumber}`
  );

  return {
    paths: paths,
    fallback: true,
  };
}
