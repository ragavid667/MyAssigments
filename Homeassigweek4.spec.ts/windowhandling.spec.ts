import {chromium , expect , test } from  '@playwright/test'
test("window handling",  async({page , context}) => {

await page.goto("https://login.salesforce.com/");

await page.getByLabel('username').fill("ragavid2307@gmail.com");
await page.getByLabel('password').fill("Ragavi@2307.");
await page.locator("//input[@id ='Login']").click();
await page.waitForTimeout(10000);

await page.getByText('Learn More').click();
await page.waitForTimeout(10000);

const [newWindow] = await Promise.all([context.waitForEvent('page'), page.getByText("Learn More", {exact:true}).click()]);
const newWindowTitle = await newWindow.title();
console.log("New window title" , newWindowTitle);

//await newWindow.click('button:Confirm');

const newWindowURL =  newWindow.url();
console.log("name of the url:" , newWindowURL);

 expect (newWindowURL).toBe("https://www.salesforce.com/service/cloud/");
 expect(newWindowTitle).toContain("Service Cloud: AI-powered Customer Service Agent Console | Salesforce US")

await page.bringToFront();



});