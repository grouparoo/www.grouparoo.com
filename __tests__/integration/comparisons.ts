/**
 * @jest-environment jest-environment-webdriver
 * 
 * 
 */

 import * as helper from "../helpers/specHelper";

 let url: string;
 
 // stub the selenium injected variables
 declare var browser: any;
 declare var by: any;

 // comparison pages to test
 const cases = ["census", "segment", "hightouch"];

 
 describe("integration/comparisons", () => {
   beforeAll(async () => {
     const env = await helper.prepareForIntegrationTest();
     url = env.url;
   }, 1000 * 60);
 
   afterAll(async () => {
     await helper.shutdown();
   });


    test.each(cases)("it renders the copy for %p", async (pageSlug) => {
      const company = pageSlug.charAt(0).toUpperCase() + pageSlug.slice(1);
 
      const testUrl = url + `/solutions/${pageSlug}-alternative`;
      await browser.get(testUrl);
      await sleep();
      const header = await browser.findElement(by.tagName("h1")).getText();
      expect(header).toContain(`Grouparoo vs. ${company}`);
      const H2s = await browser.findElements(by.tagName("h2"))
      const H2Texts = await Promise.all(H2s.map(element => element.getText()));
      expect(H2Texts).toContain(`How Grouparoo is different (and better) than ${company}`)
 
    });
 
    test.each(cases)("it renders the features banner for %p", async (pageSlug) => {
 
     const testUrl = url + `/solutions/${pageSlug}-alternative`;
     await browser.get(testUrl);
     await sleep();
     const header = await browser.findElement(by.tagName("h2")).getText();
     expect(header).toContain("Grouparoo is the customer data platform that meets you where you are at");
     const H3s = await browser.findElements(by.tagName("h3"))
     const H3Texts = await Promise.all(H3s.map(element => element.getText()));
     expect(H3Texts).toContain(`🖥 Use your normal workflow`)
 
   });
 
   test.each(cases)("it renders section dividers for %p", async (pageSlug) => {
 
     const testUrl = url + `/solutions/${pageSlug}-alternative`;
     await browser.get(testUrl);
     await sleep();
     const H3s = await browser.findElements(by.tagName("h3"))
     const H3Texts = await Promise.all(H3s.map(element => element.getText()));
     expect(H3Texts).toContain(`Easily define profiles, no matter your data.`)
 
   });
 
   test.each(cases)("it renders a comparison chart for %p", async (pageSlug) => {
     const table = await browser.findElement(by.id("featureComparisons"));
     const cells = await table.findElements(by.tagName("td"))
     const cellTexts = await Promise.all(cells.map(element => element.getText()));
     expect(cellTexts).toContain(`Free tier`)
 
   });
   
 });
 

async function sleep (time=1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), time)
  })
}



