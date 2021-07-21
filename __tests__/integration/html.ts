import * as helper from "../helpers/specHelper";
import cheerio from "cheerio";
import fetch from "isomorphic-fetch";
import { readSitemap } from "../../scripts/readSitemap";
import path from "path";

let url: string;

const EDGE_CASES = {
  "/solutions/engineers": { canonical: "https://www.grouparoo.com/" },
};

const allowedMissingLinks = [
  /^\/whats-new\/([a-z0-9\-\_\.]+)?$/, //no-indexed but we still want it
  /^\/downloads\/([a-z0-9\-\_\.]+)?$/, // Dumping ground for downloadable sample files.
  /^\/jobs(\/[a-z0-9\-\_\.]+)?$/, // Dynamically-generated routes for Lever posts.
  /^\/blog\/author\/([a-z\-\_]+)?$/, // Blog author pages have duplicate content and are not in sitemap.
  /^\/blog\/category\/([a-z\-\_]+)?$/, // Blog category pages have duplicate content and are not in sitemap.
  /^\/jobs(\/[a-z0-9\-\_\.]+)?$/, // Dynamically-generated routes for Lever posts.
  /^\/roadmap$/, // Redirects to GitHub.
  /^\/support$/, // Redirects to docs page, but we want to keep the reference around.
];

describe("sitemap integration", () => {
  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown();
  });

  // parse sitemap and make a test for each
  const pages = readSitemap();
  const pagePaths = pages.map((page) => new URL(page).pathname);

  const linkIsValid = (link): boolean => {
    // Null values are not accepted.
    if (!link) return false;
    // Links must be strings.
    if (typeof link !== "string") return false;
    // Skip external links. Note: This also lets relative links through, which
    // is not ideal, but is an accepted risk.
    if (!path.isAbsolute(link)) return true;
    // Remove anchor from link.
    if (link.indexOf("#") > 0) link = link.slice(0, link.indexOf("#"));
    //  In-page links are valid.
    if (link.length === 0) return true;
    // If page is included in sitemap, it is valid.
    if (pagePaths.includes(link)) return true;
    // Check for allowed overrides and consider valid if we find a match.
    for (let pattern of allowedMissingLinks) {
      if (link.match(pattern)) return true;
    }
    // If not matching any of the above conditions, link is invalid.
    return false;
  };

  test("read sitemap", async () => {
    expect(pages.length).toBeGreaterThan(10);
  });

  for (let productionUrl of pages) {
    describe(productionUrl, () => {
      let $;
      let htmlContent;
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
        htmlContent = await response.text();
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
          expect(href).toContain(`${productionHost}/whats-new/`);
        } else {
          expect(href).toEqual(productionUrl);
        }
      });

      test("images", async () => {
        const altTagMissing = [];
        $("img").each(function () {
          const tag = $(this);
          const src = tag.attr("src") || tag.attr("data-src");
          expect(src).toBeTruthy();

          let name = src;
          if (name.startsWith("data:")) {
            name = name.slice(0, 80);
          }

          const ariaHidden = tag.attr("aria-hidden");
          const alt = tag.attr("alt");
          if (!alt && ariaHidden !== "true") altTagMissing.push(name);
        });

        expect(altTagMissing).toEqual([]);
      });

      test("links", async () => {
        let localPagesNotFound = [];
        let missingRefOnBlank = [];

        $("a").each(function () {
          const tag = $(this);
          let href = tag.attr("href");
          const id = tag.attr("id");
          const name = href || id;

          try {
            expect(name).toBeTruthy();
          } catch (error) {
            console.log("link missing href or id", tag);
            throw error;
          }

          if (!linkIsValid(href)) localPagesNotFound.push(href);

          const target = tag.attr("target");
          const rel = tag.attr("rel") || "";
          if (target === "_blank") {
            if (!rel.includes("noopener") && !rel.includes("noreferrer")) {
              missingRefOnBlank.push(name);
            }
          }
        });

        expect(localPagesNotFound).toEqual([]);
        expect(missingRefOnBlank).toEqual([]);
      });
    });
  }
});
