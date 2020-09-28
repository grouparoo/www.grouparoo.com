/**
 * @jest-environment jest-environment-webdriver
 */

import * as helper from "../helpers/specHelper";

let url: string;

// stub the selenium injected variables
declare var browser: any;
declare var by: any;

describe("integration/integration pages", () => {
  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown();
  });

  test("it renders a page", async () => {
    const testUrl = url + "/integrations/sources/postgres";
    await browser.get(testUrl);
    const header = await browser.findElement(by.tagName("h1")).getText();
    expect(header).toContain("Sync Postgres");
  });
});
