import { loadEntries, loadMdxFilePath } from "./mdxUtils";
import BlogImage from "../components/blog/image";

export type ReleaseNote = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  blog: string;
  html: string;
  source: any;
};

const components = { Image: BlogImage };

export async function getReleaseNotes(): Promise<ReleaseNote[]> {
  const releases = await loadEntries(["..", "releases"]);
  const notes = [];
  for (const release of releases) {
    const { filePath, slug } = release;
    const { source, frontMatter } = await loadMdxFilePath(filePath, components);
    const { title, date } = frontMatter;
    const tags = frontMatter.tags || [];
    const blog = frontMatter.blog || null;
    const html = source.renderedOutput;
    notes.push({ title, slug, date, tags, blog, source });
  }
  notes.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return notes;
}
