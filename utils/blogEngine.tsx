import blogPosts from "./blogPosts";
import Authors from "../data/authors";

class BlogEntries {
  entries: Array<BlogEntry>;
  constructor() {
    this.entries = [];
  }
  add(entry: BlogEntry) {
    this.entries.push(entry);
  }
  sort() {
    this.entries.sort((a, b) => (a.date > b.date ? -1 : 1));
  }
  toArray() {
    return this.entries;
  }
}

interface BlogPage {
  title: string;
  author: string;
  pullQuote: string;
  tags: string[];
  date: Date;
  __resourcePath: string;
}

export class BlogEntry {
  public title: string;
  public path: string;
  public date: Date;
  public pullQuote: string;
  public tags: string[];
  public author: {
    name: string;
    slug: string;
    image: string;
    url: string;
    description: string;
  };
  constructor(page: BlogPage) {
    this.title = page.title;
    this.author = getAuthor(page.author);
    this.pullQuote = page.pullQuote;
    this.tags = page.tags;
    this.date = new Date(page.date);
    this.path = this.formatPath(page.__resourcePath);
  }

  dateText() {
    if (!this.date) return null;
    return this.date.toISOString().slice(0, 10);
  }
  authorText() {
    return this.author;
  }

  private formatPath(p) {
    return "/" + p.replace(/\.mdx$/, "");
  }
}

export function getAuthor(nameOrSlug: string) {
  let author = Authors.find((a) => a.slug === nameOrSlug);
  if (!author) {
    author = Authors.find((a) => a.name === nameOrSlug);
  }
  return author;
}

class BlogEngine {
  entries: BlogEntries;
  constructor() {
    this.entries = null;
  }
  getEntries() {
    this.build();
    return this.entries.toArray();
  }

  build() {
    this.entries = new BlogEntries();
    const pages: Array<BlogPage> = blogPosts;
    for (let page of pages) {
      this.entries.add(new BlogEntry(page));
    }
    this.entries.sort();
  }
}

export default new BlogEngine();
