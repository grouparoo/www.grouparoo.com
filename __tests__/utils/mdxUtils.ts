import path from "path";
import { getBreadcrumbs } from "../../utils/mdxUtils";

const pagesDir = path.join(__dirname, "../../pages");

describe("getBreadcumbs()", () => {
  test("it uses titles to build breadcrumbs", () => {
    const fullPath = path.join(
      pagesDir,
      "docs/getting-started/product-concepts.mdx"
    );
    const { breadcrumbs } = getBreadcrumbs(fullPath);
    expect(breadcrumbs).toEqual([
      {
        path: "/docs",
        title: "Docs",
      },
      {
        path: "/docs/getting-started",
        title: "Try Grouparoo Now!",
      },
      {
        path: "/docs/getting-started/product-concepts",
        title: "Product Concepts",
      },
    ]);
  });
  test("it titleizes (and removes hyphens) paths for files it can't find", () => {
    const fullPath = path.join(pagesDir, "this/path_is/definitely-not-real");
    const { breadcrumbs } = getBreadcrumbs(fullPath);
    expect(breadcrumbs).toEqual([
      {
        path: "/this",
        title: "This",
      },
      {
        path: "/this/path_is",
        title: "Path Is",
      },
      {
        path: "/this/path_is/definitely-not-real",
        title: "Definitely Not Real",
      },
    ]);
  });
});
