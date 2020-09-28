import { shallow } from "enzyme";
import Home from "../../pages/index";

describe("page/home", () => {
  test("renders the page", () => {
    const page = shallow(<Home />);
    expect(page.html()).toContain(
      "Sync, Segment, and Send your Product Data Everywhere"
    );
  });
});
