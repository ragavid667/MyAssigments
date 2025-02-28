import {chromium , expect , test } from  '@playwright/test'

import fs from 'fs'
import {faker} from '@faker-js/faker'
import loginData from "../../Files/legaldata.json"


test.beforeEach(`Login SetUp`, async({page})=>{
    await page.goto("https://login.salesforce.com/");
    
    await page.getByLabel('username').fill("ragavid2307@gmail.com");
    await page.getByLabel('password').fill("Ragavi@2307.");
    await page.locator("//input[@id ='Login']").click();
    await page.waitForTimeout(10000);

})  


test(`Legal Entities`, async({page}) => {


await page.locator("//div[@class = 'slds-icon-waffle']").click(); 
await page.waitForTimeout(10000); 
await page.getByText('View All').click();
await page.waitForTimeout(10000); 
//await page.getByPlaceholder('Search apps or items...').fill("Legal Entities"); 
await page.click("//p[normalize-space(text())='Legal Entities']");
await page.click("//span[normalize-space(text())='Recently Viewed | Legal Entities']");
await page.click(".slds-icon slds-icon-text-default slds-icon_xx-small");
await page.click("//span[normalize-space(text())='New Legal Entity']");
const entity= await page.fill("(//label[contains(.,'*Legal Entity Name')]/following::input)[1]", "Salesforce Automation by Ragavi");
expect (entity).toBe("Salesforce Automation by Ragavi");
await page.click("//button[name='SaveEdit']");


})


test(`Update data from Json File ${loginData[0].Testcaseid}`, async ({ page }) => {
    
    
    await page.locator("//div[@class = 'slds-icon-waffle']").click(); 
    await page.waitForTimeout(10000); 
    await page.getByText('View All').click();
    //await page.getByPlaceholder('Search apps or items...').fill("Legal Entities"); 
    await page.click("//p[normalize-space(text())='Legal Entities']");
    await page.click("//span[normalize-space(text())='Recently Viewed | Legal Entities']");
    await page.click(".slds-icon slds-icon-text-default slds-icon_xx-small");
    await page.click("//span[normalize-space(text())='New Legal Entity']");
    await page.locator("(//label[contains(.,'*Legal Entity Name')]/following::input)[1]").fill(loginData[0].Newlegalname);
    await page.fill("//input[name='CompanyName']","TestLeaf");
    await page.locator("//label[normalize-space(text())='Description']/following::textarea").fill(loginData[0].Description)
    await page.click("//button[contains(.,'Active')]");
    await page.click("//button[name='SaveEdit']");

    page.on('dialog', async (dialog:any) => {
        const message = dialog.message();
        console.log(`The message says ${message}`);   
         
    })
})