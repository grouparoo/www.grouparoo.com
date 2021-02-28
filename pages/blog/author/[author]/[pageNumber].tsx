export { default, getStaticProps } from "./index";
import Authors from "../../../../data/authors";

export async function getStaticPaths() {
  const paths = [].concat(
    Authors.map((a) => `/blog/author/${a.slug}/1`),
    Authors.map((a) => `/blog/author/${a.slug}/2`),
    Authors.map((a) => `/blog/author/${a.slug}/3`),
    Authors.map((a) => `/blog/author/${a.slug}/4`),
    Authors.map((a) => `/blog/author/${a.slug}/5`)
  );

  return {
    paths,
    fallback: true,
  };
}
