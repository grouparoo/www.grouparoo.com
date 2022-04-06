import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import "../../components/Icons";

describe("page/home", () => {
  test("renders the page", () => {
    render(
      <Home
        pageProps={{
          pluginNames: ["AnnoyingPlugin"],
        }}
      />
    );

    const header = screen.getByTestId("header");
    expect(header).toHaveTextContent(
      "Stop writing code to sync data to AnnoyingPlugin*"
    );
    expect(header).toHaveTextContent(
      "* Sorry, AnnoyingPlugin - we don't mean to pick on you specifically."
    );
  });
});
