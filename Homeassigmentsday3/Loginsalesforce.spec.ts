import {chromium , test } from  '@playwright/test'
test("To launch a browser",  async() => {
const Browser = await chromium.launch({headless:false , channel: "chrome"});
const context = await Browser.newContext();
const page = await context.newPage();
await page.goto("https://login.salesforce.com/");
const url = page.url();
console.log(url);
const title = await page.title();
console.log(title);
await page.locator("//input[@id ='username']").fill("ragavid2307@gmail.com");
await page.locator("//input[@id = 'password']").fill("Ragavi@2307")
await page.locator("//input[@id ='Login']").click();


});