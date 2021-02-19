import { shallow } from "enzyme";
import MailchimpPage from "../../pages/integrations/destinations/mailchimp";

describe("page/integrations/destinations/mailchimp", () => {
  test("renders the page", () => {
    const page = shallow(<MailchimpPage />);
    expect(page.html()).toContain(
      "Grouparoo keeps your customer data in Mailchimp updated"
    );
  });
});
