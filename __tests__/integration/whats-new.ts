/**
 * @jest-environment jest-environment-webdriver
 */

import * as helper from "../helpers/specHelper";
import { getReleaseNotes } from "../../utils/releaseNotes";

let url: string;

// stub the selenium injected variables
declare var browser: any;
declare var by: any;

describe("integration/what-new", () => {
  let notes;

  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
    const response = await getReleaseNotes();
    notes = response.notes;
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown();
  });

  test(
    "it renders the list",
    async () => {
      const testUrl = url + "/whats-new";
      await browser.get(testUrl);

      const header = await browser.findElement(by.tagName("h1")).getText();
      expect(header).toBe("What's New");

      const items = await browser.findElements(by.tagName("h4"));
      const titles = await Promise.all(items.map((item) => item.getText()));
      expect(titles).toEqual(
        expect.arrayContaining(notes.map((note) => note.title))
      );
    },
    30 * 1000
  );
});
