import { getReleaseNotes } from "../../utils/releaseNotes";
import { loadEntries } from "../../utils/mdxUtils";

describe("utils/releaseNotes", () => {
  const entries = loadEntries(["whats-new"]);
  test("has entries", () => {
    expect(entries.length).toBeGreaterThan(10);
  });

  describe("release notes", () => {
    let items;
    beforeAll(async () => {
      items = await getReleaseNotes();
    });

    for (const entry of entries) {
      test(`${entry.slug}`, () => {
        const item = items.find((i) => (i.slug = entry.slug));
        expect(item).toBeTruthy();

        expect(item.title).toBeTruthy();
        expect(item.description).toBeTruthy();

        const date = new Date(item.date);
        expect(date.getTime()).toBeGreaterThan(0);

        expect(item.tags.length).toBeGreaterThan(0);
      });
    }
  });
});
