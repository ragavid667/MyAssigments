import {chromium , expect , test } from  '@playwright/test'
test("Create a Lead",  async({page}) => {
/*const Browser = await chromium.launch({headless:false});
const context = await Browser.newContext();
const page = await context.newPage(); */
await page.goto("https://login.salesforce.com/");

await page.getByLabel('username').fill("ragavid2307@gmail.com");
await page.getByLabel('password').fill("Ragavi@2307.");
await page.locator("//input[@id ='Login']").click();
await page.waitForTimeout(10000);
await page.locator("//div[@class = 'slds-icon-waffle']").click(); 
await page.waitForTimeout(10000); 
await page.getByText('View All').click();

await page.click("//p[normalize-space(text())='Sales']");
await page.waitForTimeout(10000); 
await page.locator("//a[contains(text(),'Leads')]").click();
await page.waitForTimeout(10000); 
await page.click("//button[normalize-space(text())='New']");
await page.waitForTimeout(10000); 
await page.selectOption("#salutation" , {label: "Mrs."});
await page.locator("//input[@name='lastName']").fill("Dayanithi");
await page.locator("//input[@name='Company']").fill("infosys");
await page.locator("//button[@name='SaveEdit']").click();


});
