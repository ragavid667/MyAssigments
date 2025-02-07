import {chromium , expect , test } from  '@playwright/test'
test("To launch a browser",  async() => {
const Browser = await chromium.launch({headless:false});
const context = await Browser.newContext();
const page = await context.newPage();
await page.goto("https://login.salesforce.com/");

await page.getByLabel('username').fill("ragavid2307@gmail.com");
await page.getByLabel('password').fill("Ragavi@2307.");
await page.locator("//input[@id ='Login']").click();
await page.waitForTimeout(10000);


await page.locator("//div[@class = 'slds-icon-waffle']").click(); 
await page.waitForTimeout(10000); 
await page.getByText('View All').click();
await page.getByPlaceholder('Search apps or items...').fill("Service"); 

await page.locator("(//div[@class='slds-app-launcher__tile-body slds-truncate']//div)[1]").click();
await page.waitForTimeout(10000); 
await page.locator("//a[contains(text(),'Accounts')]").click();
await page.waitForTimeout(10000); 
await page.getByRole('button', { name: 'New' }).click();
await page.locator("//input[@name='Name']").fill("Ragavi");
await page.locator("//button[@name='SaveEdit']").click();
//verify toast message
const toastmessage = page.locator("//span[contains(@class='toastMessage slds-text-heading--small')]");
await expect(toastmessage).toBeVisible();




});