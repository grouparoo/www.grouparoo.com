import { getBlogPosts, getBlogPost } from "../../utils/blogPosts";
import { loadEntries } from "../../utils/mdxUtils";
import getAuthor from "../../utils/getAuthor";

describe("utils/blogPosts", () => {
  const entries = loadEntries(["pages", "blog"]);
  test("has entries", () => {
    expect(entries.length).toBeGreaterThan(10);
  });

  describe("blogPosts", () => {
    let items;
    beforeAll(async () => {
      items = await getBlogPosts();
    });

    for (const entry of entries) {
      test(`${entry.slug}`, async () => {
        const listItem = items.find((i) => i.slug === entry.slug);
        expect(listItem).toBeTruthy();

        const item = await getBlogPost(entry.slug);

        expect(item.title).toBeTruthy();
        expect(item.path).toMatch(/blog\//);
        expect(item.slug).toBeTruthy();
        expect(item.pullQuote).toBeTruthy();

        expect(item.author).toBeTruthy();
        const author = getAuthor(item.author);
        expect(author).toBeTruthy();
        expect(author.name).toBeTruthy();

        const date = new Date(item.date);
        expect(date.getTime()).toBeGreaterThan(0);

        expect(item.tags.length).toBeGreaterThan(0);
      });
    }
  });
});
