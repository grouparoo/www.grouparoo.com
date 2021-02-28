import { badgeTypes } from "../../../../utils/blogTags";
export { default, getStaticProps } from "./index";

export async function getStaticPaths() {
  const tags = Object.keys(badgeTypes);
  const paths = [
    tags.map((tag) => `/blog/category/${tag}/1`),
    tags.map((tag) => `/blog/category/${tag}/2`),
    tags.map((tag) => `/blog/category/${tag}/3`),
    tags.map((tag) => `/blog/category/${tag}/4`),
    tags.map((tag) => `/blog/category/${tag}/5`),
  ].flat();

  return {
    paths,
    fallback: true,
  };
}
