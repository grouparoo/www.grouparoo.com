import * as helper from "../helpers/specHelper";
import fetch from "isomorphic-fetch";
import xml2js from "xml2js";

let url: string;

// stub the selenium injected variables
declare var by: any;

describe("integration", () => {
  let urls;

  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown();
  });

  test("it renders sitemap", async () => {
    const testUrl = url + "/sitemap.xml";
    const response = await fetch(testUrl);
    const content = await response.text();
    const parsed = await xml2js.parseStringPromise(content);
    urls = parsed.urlset.url;
    expect(urls.length).toBeGreaterThan(4);

    const first = urls[0];
    expect(first.loc[0]).toBe("https://www.grouparoo.com/");
    expect(first.changefreq[0]).toBe("daily");
    expect(first.priority[0]).toBe("1.0");
  });

  test("it includes the blog", async () => {
    const blogUrls = urls.filter((url) => url.loc[0].match("/blog"));
    expect(blogUrls.length).toBeGreaterThan(2);
  });

  test("it includes the docs", async () => {
    const docsUrls = urls.filter((url) => url.loc[0].match("/docs"));
    expect(docsUrls.length).toBeGreaterThan(2);
  });
});
