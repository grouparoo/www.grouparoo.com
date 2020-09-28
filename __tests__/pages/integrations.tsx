import { shallow } from "enzyme";
import Home from "../../pages/integrations/destinations/mailchimp";

describe("page/integrations/destinations/mailchimp", () => {
  test("renders the page", () => {
    const page = shallow(<Home />);
    expect(page.html()).toContain(
      "Grouparoo keeps your customer data in Mailchimp updated"
    );
  });
});
