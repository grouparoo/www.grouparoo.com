/**
 * @jest-environment jest-environment-webdriver
 */

import * as helper from "../helpers/specHelper";

let url: string;

// stub the selenium injected variables
declare var browser: any;
declare var by: any;

describe("integration/what-new", () => {
  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
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
        expect.arrayContaining(["Snowflake Source", "Marketo Destination"])
      );
    },
    30 * 1000
  );
});
