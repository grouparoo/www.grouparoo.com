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

  test("stores UTM_* tracking variables on any page", async () => {
    await browser.get(
      url +
        `/docs?utm_source=test_source&utm_campaign=test_campaign&utm_medium=test_medium`
    );

    // change page without UTM variables
    await browser.get(url + "/");

    // the UTM variables are stored
    expect(await getSessionItem("utm_source")).toBe("test_source");
    expect(await getSessionItem("utm_campaign")).toBe("test_campaign");
    expect(await getSessionItem("utm_medium")).toBe("test_medium");
  });

  test("will not replace original UTM_* tracking variables with new ones", async () => {
    await browser.get(
      url +
        `/docs?utm_source=test_source&utm_campaign=test_campaign&utm_medium=test_medium`
    );
    await browser.get(
      url +
        `/integrations?utm_source=new_source&utm_campaign=new_campaign&utm_medium=new_medium`
    );

    expect(await getSessionItem("utm_source")).toBe("test_source");
    expect(await getSessionItem("utm_campaign")).toBe("test_campaign");
    expect(await getSessionItem("utm_medium")).toBe("test_medium");
  });
});
