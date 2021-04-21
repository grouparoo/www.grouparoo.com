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

 
   test.each(cases)("it renders the comparison page for %p", async (pageSlug) => {
     const company = pageSlug.charAt(0).toUpperCase() + pageSlug.slice(1);

     const testUrl = url + `/solutions/${pageSlug}`;
     await browser.get(testUrl);
     const header = await browser.findElement(by.tagName("h1")).getText();
     expect(header).toContain(`Grouparoo vs. ${company}`);
     const H2s = await browser.findElements(by.tagName("h2"))
     const H2Texts = await Promise.all(H2s.map(element => element.getText()));
     expect(H2Texts).toContain(`How Grouparoo is different (and better) than ${company}`)

   });
   
 });
 