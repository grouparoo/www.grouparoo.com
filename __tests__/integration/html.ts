import * as helper from "../helpers/specHelper";
import path from "path";
import fs from "fs";
import cheerio from "cheerio";
import fetch from "isomorphic-fetch";

let url: string;

function allPages() {
  const fullPath = path.resolve(
    path.join(__dirname, "..", "..", "public", "sitemap.xml")
  );
  const urls = [];
  const content = fs.readFileSync(fullPath).toString();
  const regex = /<\s*loc\s*>(.+)<\s*\/loc\s*>/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const found = match[1];
    urls.push(found);
  }
  return urls;
}

const EDGE_CASES = {
  "/solutions/engineers": { canonical: "https://www.grouparoo.com/" },
};

describe("sitemap integration", () => {
  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown();
  });

  // parse sitemap and make a test for each
  const pages = allPages();

  test("read sitemap", async () => {
    expect(pages.length).toBeGreaterThan(10);
  });

  for (let productionUrl of pages) {
    describe(productionUrl, () => {
      let $;
      let testUrl;
      let testPath;
      const productionHost = "https://www.grouparoo.com";
      beforeAll(async () => {
        if (!productionUrl.startsWith(productionHost)) {
          throw new Error("Invalid page: " + productionUrl);
        }
        testUrl = productionUrl.replace(productionHost, url);
        testPath = productionUrl.replace(productionHost, "");
        const response = await fetch(testUrl);
        const htmlContent = await response.text();
        $ = cheerio.load(htmlContent);
      });
      test("title", async () => {
        const title = $("title").text();
        expect(title).toBeTruthy();
      });
      test("canonical link", async () => {
        const link = $("link[rel=canonical]");
        expect(link).toBeTruthy();
        const href = link.attr("href");
        expect(href).toBeTruthy();
        expect(href.startsWith(productionHost)).toEqual(true);
        expect(href).not.toContain("undefined");
        if (EDGE_CASES[testPath]?.canonical) {
          expect(href).toEqual(EDGE_CASES[testPath].canonical);
        } else if (testPath.startsWith("/whats-new/")) {
          expect(href).toEqual(`${productionHost}/whats-new`);
        } else {
          expect(href).toEqual(productionUrl);
        }
      });
    });
  }
});
