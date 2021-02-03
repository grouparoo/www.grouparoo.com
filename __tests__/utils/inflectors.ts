import { titleize } from "../../utils/inflectors";

describe("titleize", () => {
  test("capitalizes the first letter of every word", () => {
    const res = titleize("hello world");
    expect(res).toBe("Hello World");
  });
  test("removes underscores", () => {
    const res = titleize("_hello__world!_");
    expect(res).toBe("Hello World!");
  });
  test("does not remove hyphens", () => {
    const res = titleize("hello-world");
    expect(res).toBe("Hello-World");
  });
});
