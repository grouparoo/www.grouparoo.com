import { getReleaseNotes } from "../../utils/releaseNotes";
import { loadEntries } from "../../utils/mdxUtils";

const LIMIT = 25;

describe("utils/releaseNotes", () => {
  const entries = loadEntries(["whats-new"]);
  test("has entries", () => {
    expect(entries.length).toBeGreaterThan(10);
  });

  describe("release notes", () => {
    let notes, total;

    beforeAll(async () => {
      const items = await getReleaseNotes(1, LIMIT);
      notes = items.notes;
      total = items.total;
    });

    test("pagination", async () => {
      expect(entries.length).toBe(total);
      expect(notes.length).toBe(LIMIT);
    });

    for (const entry of entries.reverse().slice(0, LIMIT)) {
      test(`${entry.slug}`, () => {
        const note = notes.find((note) => note.slug === entry.slug);
        expect(note).toBeTruthy();

        expect(note.title).toBeTruthy();
        expect(note.slug).toBeTruthy();
        expect(note.description).toBeTruthy();

        const date = new Date(note.date);
        expect(date.getTime()).toBeGreaterThan(0);

        expect(note.tags.length).toBeGreaterThan(0);
      });
    }
  });
});
