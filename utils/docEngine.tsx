import docPosts from "./docPosts";

class DocEntries {
  entries: Array<DocEntry>;
  constructor() {
    this.entries = [];
  }
  add(entry: DocEntry) {
    this.entries.push(entry);
  }
  sort() {
    this.entries.sort((a, b) => (a.date > b.date ? -1 : 1));
  }
  toArray() {
    return this.entries;
  }
}

interface DocPage {
  title: string;
  pullQuote: string;
  date: Date;
  __resourcePath: string;
}

export class DocEntry {
  public title: string;
  public path: string;
  public date: Date;
  public pullQuote: string;
  constructor(page: DocPage) {
    this.title = page.title;
    this.pullQuote = page.pullQuote;
    this.date = new Date(page.date);
    this.path = this.formatPath(page.__resourcePath);
  }

  dateText() {
    if (!this.date) return null;
    return this.date.toISOString().slice(0, 10);
  }

  private formatPath(p) {
    return "/" + p.replace(/\.mdx$/, "");
  }
}

class DocEngine {
  entries: DocEntries;
  constructor() {
    this.entries = null;
  }

  getEntries() {
    this.build();
    return this.entries.toArray();
  }

  build() {
    this.entries = new DocEntries();
    const pages: Array<DocPage> = docPosts;
    for (let page of pages) {
      this.entries.add(new DocEntry(page));
    }
    this.entries.sort();
  }

  getTableOfContents() {
    const sections = {
      deployment: [],
      guides: [],
      development: [],
      community: [],
    };

    const externalLinks = {
      community: [
        {
          title: "Roadmap",
          path: "/roadmap",
        },
      ],
    };

    const entries = this.getEntries();
    entries.forEach((entry) => {
      const pathParts = entry.path.split("/");
      if (pathParts.length > 3) {
        const section = pathParts[2];
        if (!sections[section]) sections[section] = [];
        sections[section].push(entry);
      }
    });

    for (const section in externalLinks) {
      for (const k in externalLinks[section]) {
        sections[section].push(externalLinks[section][k]);
      }
    }

    return sections;
  }
}

export default new DocEngine();
