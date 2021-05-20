import { shallow } from "enzyme";
import { PluginData, PluginPageData } from "../../data/plugins";
let IntegrationsPage;

describe("page/integrations", () => {
  beforeAll(async () => {
    // TODO: why does this need to be imported async?
    IntegrationsPage = (
      await import("../../pages/integrations/[type]/[plugin]")
    ).default;
  });

  PluginPageData.filter((p) => p.useCases)
    .filter((p) => p.primaryType === "source")
    .map((plugin) => {
      test(`pages exist for Source ${plugin.name}`, async () => {
        const page = shallow(
          <IntegrationsPage pageProps={{ plugin: plugin.slug }} />
        );
        expect(page.html()).toContain(`${plugin.name} integration`);
      });
    });

  PluginPageData.filter((p) => p.useCases)
    .filter((p) => p.primaryType === "destination")
    .map((plugin) => {
      test(`pages exist for Destination ${plugin.name}`, async () => {
        const page = shallow(
          <IntegrationsPage pageProps={{ plugin: plugin.slug }} />
        );
        expect(page.html()).toContain(`${plugin.name} integration`);
      });
    });

  PluginData.filter((p) => !p.useCases).map((plugin) => {
    test(`pages does not exist for ${plugin.name}`, async () => {
      expect(() =>
        shallow(<IntegrationsPage pageProps={{ plugin: plugin.slug }} />)
      ).toThrow();
    });
  });

  PluginData.filter(
    (p) => p.useCases && p.useCases.paragraphOne.length < 1
  ).map((plugin) => {
    test(`pages does not exist for ${plugin.name}`, async () => {
      expect(() =>
        shallow(<IntegrationsPage pageProps={{ plugin: plugin.slug }} />)
      ).toThrow();
    });
  });
});
