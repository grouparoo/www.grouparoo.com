import * as helper from "../helpers/specHelper";
import fetch from "isomorphic-fetch";
import xml2js from "xml2js";

let url: string;

// stub the selenium injected variables
declare var by: any;

describe("integration", () => {
  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown();
  });

  describe("whatsnew", () => {
    test("it renders RSS", async () => {
      const testUrl = url + "/feeds/whatsnew.xml";
      const response = await fetch(testUrl);
      const content = await response.text();
      const parsed = await xml2js.parseStringPromise(content);

      const header = parsed.rss.channel[0].title[0];
      expect(header).toEqual("Grouparoo: What's New");

      const items = parsed.rss.channel[0].item;
      expect(items.length).toBeGreaterThan(10);

      const titles = items.map((item) => item.title[0]);
      expect(titles).toEqual(
        expect.arrayContaining(["Snowflake Source", "Marketo Destination"])
      );
    });

    test("it renders JSON", async () => {
      const testUrl = url + "/feeds/whatsnew.json";
      const response = await fetch(testUrl);
      const content = await response.text();
      const parsed = JSON.parse(content);

      const header = parsed.title;
      expect(header).toEqual("Grouparoo: What's New");

      const items = parsed.items;
      expect(items.length).toBeGreaterThan(10);

      const titles = items.map((item) => item.title);
      expect(titles).toEqual(
        expect.arrayContaining(["Snowflake Source", "Marketo Destination"])
      );
    });
  });

  describe("blog", () => {
    test(
      "it renders RSS",
      async () => {
        const testUrl = url + "/feeds/blog.xml";
        const response = await fetch(testUrl);
        const content = await response.text();
        const parsed = await xml2js.parseStringPromise(content);

        const header = parsed.rss.channel[0].title[0];
        expect(header).toEqual("Grouparoo: Blog");

        const items = parsed.rss.channel[0].item;
        expect(items.length).toBeGreaterThan(10);

        const titles = items.map((item) => item.title[0]);
        expect(titles).toEqual(
          expect.arrayContaining(["BigQuery Source", "Building a Sync Engine"])
        );
      },
      10 * 1000
    );

    test(
      "it renders JSON",
      async () => {
        const testUrl = url + "/feeds/blog.json";
        const response = await fetch(testUrl);
        const content = await response.text();
        const parsed = JSON.parse(content);

        const header = parsed.title;
        expect(header).toEqual("Grouparoo: Blog");

        const items = parsed.items;
        expect(items.length).toBeGreaterThan(10);

        const titles = items.map((item) => item.title);
        expect(titles).toEqual(
          expect.arrayContaining(["BigQuery Source", "Building a Sync Engine"])
        );
      },
      10 * 1000
    );
  });
});
