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
 const cases = ["reverse-etl", "customer-data-platform"];

 
 describe("integration/comparisons", () => {
   beforeAll(async () => {
     const env = await helper.prepareForIntegrationTest();
     url = env.url;
   }, 1000 * 60);
 
   afterAll(async () => {
     await helper.shutdown();
   });


    test.each(cases)("it renders the copy for %p", async (pageSlug) => {
    
      const testUrl = url + `/solutions/${pageSlug}`;
      await browser.get(testUrl);
      await sleep();
      const H2s = await browser.findElements(by.tagName("h2"))
      const H2Texts = await Promise.all(H2s.map(element => element.getText()));
      expect(H2Texts).toContain(`Get Started with Grouparoo`)
 
    });
 
    test.each(cases)("it renders the features banner for %p", async (pageSlug) => {
 
     const testUrl = url + `/solutions/${pageSlug}`;
     await browser.get(testUrl);
     await sleep();
     const header = await browser.findElement(by.tagName("h2")).getText();
     expect(header).toContain("that meets you where you are");
     const H3s = await browser.findElements(by.tagName("h3"))
     const H3Texts = await Promise.all(H3s.map(element => element.getText()));
     expect(H3Texts).toContain(`🛍 Market more meaningfully`)
 
   });
 
   test.each(cases)("it renders section dividers for %p", async (pageSlug) => {
 
     const testUrl = url + `/solutions/${pageSlug}`;
     await browser.get(testUrl);
     await sleep();
     const H3s = await browser.findElements(by.tagName("h3"))
     const H3Texts = await Promise.all(H3s.map(element => element.getText()));

     expect(H3Texts.length).toBeGreaterThan(0)
 
   });
   
 });
 

async function sleep (time=1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(null), time)
  })
}



