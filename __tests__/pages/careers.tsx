import { shallow } from "enzyme";
import About from "../../pages/about";

describe("page/about", () => {
  test("renders the page", () => {
    const page = shallow(<About />);
    expect(page.html()).toContain("About Grouparoo");
  });
});
