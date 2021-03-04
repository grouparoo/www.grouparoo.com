import { shallow } from "enzyme";
import IntegrationsPage from "../../pages/integrations/[type]/[plugin]";
import { PluginData } from "../../data/plugins";

describe("page/integrations", () => {
  PluginData.filter((p) => p.useCases).map((plugin) => {
    test(`pages exist for ${plugin.name}`, async () => {
      const page = shallow(
        <IntegrationsPage pageProps={{ plugin: plugin.slug }} />
      );
      expect(page.html()).toContain(`${plugin.name} integration`);
    });
  });

  test.todo("pages exist for destinations");
  test.todo("pages do not exist for plugins without a use case");
});
