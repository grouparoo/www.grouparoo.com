import * as helper from "../helpers/specHelper";
import cheerio from "cheerio";
import fetch from "isomorphic-fetch";
import { readSitemap } from "../../scripts/readSitemap";
import path from "path";
import * as nextConfig from "../../next.config";

let url: string;

const EDGE_CASES = {
  "/solutions/engineers": { canonical: "https://www.grouparoo.com/" },
};

const allowedMissingLinks = [
  /^\/whats-new\/([a-z0-9\-\_\.]+)?$/, //no-indexed
  /^\/trial_landing$/, //no-indexed
  /\/terms-*/, //no-indexed
  /^\/downloads\/([a-z0-9\-\_\.]+)?$/, // Dumping ground for downloadable sample files.
  /^\/jobs(\/[a-z0-9\-\_\.]+)?$/, // Dynamically-generated routes for Lever posts.
  /^\/blog\/author\/([a-z\-\_]+)?$/, // Blog author pages have duplicate content and are not in sitemap.
  /^\/blog\/category\/([a-z\-\_]+)?$/, // Blog category pages have duplicate content and are not in sitemap.
  /^\/jobs(\/[a-z0-9\-\_\.]+)?$/, // Dynamically-generated routes for Lever posts.
  /^\/roadmap$/, // Redirects to GitHub.
  /^\/support$/, // Redirects to docs page, but we want to keep the reference around.
];

const testedImages = new Set<string>();

describe("sitemap integration", () => {
  beforeAll(async () => {
    const env = await helper.prepareForIntegrationTest();
    url = env.url;
  }, 1000 * 60);

  afterAll(async () => {
    await helper.shutdown();
  });

  // parse sitemap and make a test for each
  // If you want to test just one page, do this: `TEST_PAGE="/about" ./node_modules/.bin/jest __tests__/integration/html.ts` (note the starting /)
  const pages = process.env.TEST_PAGE
    ? [`https://www.grouparoo.com${process.env.TEST_PAGE}`]
    : readSitemap();
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

  const linkRedirects = async (link) => {
    // If link goes to a redirected path, it is invalid
    const redirects = await nextConfig.redirects();

    const redirectPaths = redirects.map((redirect) => {
      if (redirect.destination.startsWith("/")) return redirect.source;
    });

    for (const i in redirectPaths) {
      if (link === redirectPaths[i]) {
        return true;
      }
    }
  };

  test("read sitemap", async () => {
    if (!process.env.TEST_PAGE) expect(pages.length).toBeGreaterThan(10);
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

      test("it has a title", async () => {
        const title = $("title").text();
        expect(title).toBeTruthy();
      });
      test("SEO: title length less than 60 chars", async () => {
        //what's new posts are noindexed so it's ok if they're longer
        if (!testUrl.includes("whats-new")) {
          const title = $("title").text();
          expect(title.length).toBeLessThanOrEqual(60);
        }
      });
      test("SEO: meta description between 60 chars and 140 chars", async () => {
        const tag = $("meta[name=description]");
        expect(tag).toBeTruthy();
        const metaDescription = tag.attr("content");
        expect(metaDescription.length).toBeGreaterThanOrEqual(60);
        expect(metaDescription.length).toBeLessThanOrEqual(140);
      });

      test("it has a canonical link", async () => {
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

      test("whats-new sub-pages are excluded from sitemap", async () => {
        if (testUrl === `${productionHost}/whats-new/`)
          expect(testUrl).not.toContain("/whats-new/");
      });

      test("image alt tags", async () => {
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

      test(
        "image sources",
        async () => {
          const imgArray: Array<Record<string, any>> = Array.from($("img"));

          const imageTags = imgArray
            .map((i) => i.parent.children.filter((t) => t.name === "noscript"))
            .flat()
            .filter((container) => container.children.length > 0)
            .map((container) => container.children[0].data);

          for (const tag of imageTags) {
            // next.js does a tricky image replacement thing so what we're doing
            // here is traversing the dom a little to find the ultimate src of the
            // image (which next.js stores in a noscript tag)
            const noScript = cheerio.load(tag);
            const imgSrc = noScript("img").attr("src");
            const imgUrl = `${url}${imgSrc}`;

            if (!testedImages.has(imgUrl)) {
              const response = await fetch(imgUrl);
              testedImages.add(imgUrl);
              try {
                expect(response.status).toEqual(200);
              } catch (error) {
                throw new Error(`CANNOT FIND ${imgUrl}`);
              }
            }
          }
        },
        1000 * 20
      );

      test("links", async () => {
        let localPagesNotFound = [];
        let missingRefOnBlank = [];
        let linksWithRedirects = [];

        $("a:not([role='button']):not([role='tab'])").each(async function () {
          const tag = $(this);
          const href = tag.attr("href");
          const id = tag.attr("id");
          const name = href || id;

          try {
            expect(name).toBeTruthy();
          } catch (error) {
            console.log("link missing href or id", tag);
            throw error;
          }

          if (!linkIsValid(href)) localPagesNotFound.push(href);
          if ((await linkRedirects(href)) === true)
            linksWithRedirects.push(href);

          const target = tag.attr("target");
          const rel = tag.attr("rel") || "";
          if (target === "_blank") {
            if (!rel.includes("noopener") && !rel.includes("noreferrer")) {
              missingRefOnBlank.push(name);
            }
          }
        });
        expect(linksWithRedirects).toEqual([]);
        if (!process.env.TEST_PAGE) expect(localPagesNotFound).toEqual([]);
        expect(missingRefOnBlank).toEqual([]);
      });
    });
  }
});
