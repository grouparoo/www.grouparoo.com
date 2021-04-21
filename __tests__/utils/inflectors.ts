import { titleize, arrayToReadableList, possessiveNoun } from "../../utils/inflectors";

describe("#titleize", () => {
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

describe('#arrayToReadableList', () => {
  test("throws error for empty array", () => {
    expect(() => arrayToReadableList([])).toThrow(/string array empty/)
  })
  test("parses single item array correctly", () => {
    expect(arrayToReadableList(["item1"])).toEqual("item1");
  })
  test("parses two item array correctly", () => {
    expect(arrayToReadableList(["item1", "item2"])).toEqual("item1 and item2");
  })
  test("parses 3+ item array correctly", () => {
    expect(arrayToReadableList(["item1", "item2", "item3"])).toEqual("item1, item2, and item3");

  })
})

describe('#possessiveNoun', () => {
  test("returns empty string if given empty string", () => {
    expect(possessiveNoun('')).toEqual('');
  })
  test("returns a word ending in 's' with an ending apostrophe", () => {
    expect(possessiveNoun("Grouparoo")).toEqual("Grouparoo's")
  })
  test("returns a word ending in anything except 's' with an ending '\'s'", () => {
    expect(possessiveNoun("Ellis")).toEqual("Ellis'");
  })
})