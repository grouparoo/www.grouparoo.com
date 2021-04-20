import { badgeTypes } from "../../../../data/blogTags";
export { default, getStaticProps } from "./index";

export async function getStaticPaths() {
  const pageNumbers = [1, 2, 3, 4, 5];

  const tags = Object.keys(badgeTypes);
  const paths = []
    .concat(
      pageNumbers.map((pageNumber) =>
        tags.map((tag) => `/blog/category/${tag}/${pageNumber}`)
      )
    )
    .flat();

  return {
    paths,
    fallback: true,
  };
}
