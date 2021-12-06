import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";
import "../../components/Icons";

describe("page/home", () => {
  test("renders the page", () => {
    render(
      <Home
        setReleaseNote={() => {}}
        pageProps={{
          pluginNames: ["AnnoyingPlugin"],
        }}
      />
    );
    expect(screen.getByTestId("header")).toHaveTextContent(
      "Stop writing code to sync data to AnnoyingPlugin"
    );
  });
});
