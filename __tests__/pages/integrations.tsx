import { render, screen } from "@testing-library/react";
import { PluginData, PluginPageData } from "../../data/plugins";
let IntegrationsPage;

describe("page/integrations", () => {
  beforeAll(async () => {
    // TODO: why does this need to be imported async?
    IntegrationsPage = (
      await import("../../pages/integrations/[type]/[plugin]")
    ).default;
  });

  describe("sources", () => {
    PluginPageData.filter((p) => p.useCases)
      .filter((p) => p.primaryType === "source")
      .map((plugin) => {
        test(`pages exist for Source ${plugin.name}`, async () => {
          render(<IntegrationsPage pageProps={{ plugin: plugin.slug }} />);
          expect(screen.getByTestId("header")).toHaveTextContent(
            `Sync ${plugin.name} customer data `
          );
        });
      });
  });

  describe("destinations", () => {
    PluginPageData.filter((p) => p.useCases)
      .filter((p) => p.primaryType === "destination")
      .map((plugin) => {
        test(`pages exist for Destination ${plugin.name}`, async () => {
          render(<IntegrationsPage pageProps={{ plugin: plugin.slug }} />);
          expect(screen.getByTestId("header")).toHaveTextContent(
            `${plugin.name} integration `
          );
        });
      });
  });

  describe("plugins without integration page", () => {
    beforeEach(() => {
      jest.spyOn(console, "error");
      //@ts-ignore
      console.error.mockImplementation(() => {});
    });

    afterEach(() => {
      //@ts-ignore
      console.error.mockRestore();
    });

    PluginData.filter((p) => !p.useCases).map((plugin) => {
      test(`page does not exist for ${plugin.name}`, async () => {
        expect(() =>
          render(<IntegrationsPage pageProps={{ plugin: plugin.slug }} />)
        ).toThrow();
      });
    });
  });
});
