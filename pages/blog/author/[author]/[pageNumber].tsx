export { default, getStaticProps } from "./index";
import Authors from "../../../../data/authors";

export async function getStaticPaths() {
  const pageNumbers = [1, 2, 3, 4, 5];

  const paths = []
    .concat(
      pageNumbers.map((pageNumber) =>
        Authors.map((a) => `/blog/author/${a.slug}/${pageNumber}`)
      )
    )
    .flat();

  return {
    paths,
    fallback: true,
  };
}
