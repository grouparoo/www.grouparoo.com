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
        expect(response.status).toEqual(200);
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

      test("images", async () => {
        const altTagMissing = [];
        $("img").each(function () {
          const tag = $(this);
          const src = tag.attr("src");
          expect(src).toBeTruthy();

          let name = src;
          if (name.startsWith("data:")) {
            name = name.slice(0, 80);
          }

          const alt = tag.attr("alt");
          if (!alt) {
            altTagMissing.push(name);
          }
        });

        expect(altTagMissing).toEqual([]);
      });

      test("links", async () => {
        const missingRefOnBlank = [];
        $("a").each(function () {
          const tag = $(this);
          const href = tag.attr("href");
          const id = tag.attr("id");
          const name = href || id;
          expect(name).toBeTruthy();

          const target = tag.attr("target");
          const rel = tag.attr("rel") || "";
          if (target === "_blank") {
            if (!rel.includes("noopener") && !rel.includes("noreferrer")) {
              missingRefOnBlank.push(name);
            }
          }
        });

        expect(missingRefOnBlank).toEqual([]);
      });
    });
  }
});
