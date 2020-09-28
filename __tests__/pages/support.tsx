import { shallow } from "enzyme";
import Support from "../../pages/support";

describe("page/support", () => {
  test("renders the page", () => {
    const page = shallow(<Support />);
    expect(page.html()).toContain("Github Issues");
  });
});
