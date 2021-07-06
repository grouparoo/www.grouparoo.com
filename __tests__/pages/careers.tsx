import { render, screen } from "@testing-library/react";
import About from "../../pages/about";

describe("page/about", () => {
  test("renders the page", () => {
    render(<About pageProps={{}} />);
    const heading = screen.getByTestId("header");
    expect(heading).toHaveTextContent("About Grouparoo");
  });
});
