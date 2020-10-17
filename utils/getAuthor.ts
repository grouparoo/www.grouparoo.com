import Authors from "../data/authors";

export default function getAuthor(nameOrSlug: string) {
  let author = Authors.find((a) => a.slug === nameOrSlug);
  if (!author) {
    author = Authors.find((a) => a.name === nameOrSlug);
  }
  return author;
}
