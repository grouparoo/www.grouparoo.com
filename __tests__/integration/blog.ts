/**
 * @jest-environment jest-environment-webdriver
 */

import * as helper from "../helpers/specHelper";

let url: string;

// stub the selenium injected variables
declare var browser: any;
declare var by: any;

describe("integration/blog", () => {
  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown();
  });

  test("it renders the index page", async () => {
    const testUrl = url + "/blog";
    await browser.get(testUrl);
    const header = await browser.findElement(by.tagName("h1")).getText();
    expect(header).toBe("Blog");
  });

  test("it renders a blog page", async () => {
    const testUrl = url + "/blog/steps-for-marketing-tests";
    await browser.get(testUrl);
    const header = await browser.findElement(by.tagName("h1")).getText();
    expect(header).toBe("Steps for Marketing Tests");
  });
});
