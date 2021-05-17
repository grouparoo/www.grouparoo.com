import { shallow } from "enzyme";
import Home from "../../pages/index";
import "../../components/icons";

describe("page/home", () => {
  test("renders the page", () => {
    const page = shallow(
      <Home pageProps={{ pluginNames: ["AnnoyingPlugin"] }} />
    );
    expect(page.html()).toContain(
      "Stop writing code to sync data to AnnoyingPlugin*"
    );
  });
});
