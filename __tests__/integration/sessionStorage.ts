/**
 * @jest-environment jest-environment-webdriver
 */

import * as helper from "../helpers/specHelper";

let url: string;

// stub the selenium injected variables
declare var browser: any;
declare var by: any;

async function getSessionItem(key) {
  return await browser.executeScript(
    `return window.sessionStorage.getItem("${key}");`
  );
}

describe("integration", () => {
  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown();
  });

  test("stores page history in the session data", async () => {
    await browser.get(url + `/docs/config`);
    expect(await getSessionItem("prevPath")).toBe("null");
    expect(await getSessionItem("currentPath")).toBe("/docs/config");
    await browser.get(url + `/meet`);
    expect(await getSessionItem("prevPath")).toBe("/docs/config");
    expect(await getSessionItem("currentPath")).toBe("/meet");
  });
});
