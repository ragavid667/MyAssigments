import {chromium , expect , test } from  '@playwright/test'
test ("Create Individual" , async({page}) =>  {
    await page.goto("https://login.salesforce.com/");

    await page.getByLabel('username').fill("ragavid2307@gmail.com");
    await page.getByLabel('password').fill("Ragavi@2307.");
    await page.locator("//input[@id ='Login']").click();
    await page.waitForTimeout(10000);
    await page.locator("//div[@class = 'slds-icon-waffle']").click(); 
    await page.waitForTimeout(10000); 
    await page.getByText('View All').click();
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.click("//p[normalize-space(text())='Individuals']");
    await page.waitForTimeout(50000);
    await page.click("//one-app-nav-bar-item-root[@aria-hidden='false']//one-app-nav-bar-item-dropdown[1]");
    //await page.click("//span[normalize-space(text())='Recently Viewed | Individuals']");
    await page.waitForTimeout(50000);
    await page.click("//span[normalize-space(text())='New Individual']");
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.locator("//input[@placeholder='Last Name']").fill("Dayanithi")
    await page.locator("//button[@title='Save']").click();



});

//editing the individuals

test ("Edit Individual" , async({page}) =>  {
    await page.goto("https://login.salesforce.com/");

    await page.getByLabel('username').fill("ragavid2307@gmail.com");
    await page.getByLabel('password').fill("Ragavi@2307.");
    await page.locator("//input[@id ='Login']").click();
    await page.waitForTimeout(10000);
    await page.locator("//div[@class = 'slds-icon-waffle']").click(); 
    await page.waitForTimeout(10000); 
    await page.getByText('View All').click();
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.click("//p[normalize-space(text())='Individuals']");
    await page.waitForTimeout(50000);
    await page.click("//span[normalize-space(text())='Recently Viewed | Individuals']");
    await page.click("(//a[@title='ragavi'])[2]");
    await page.click("//a[@title='Edit']");
    await page.selectOption("#select" , {value: "Mr."});
    await page.fill('#First Name' , "Ragavi");
    await page.click("//button[@title='Save']");




});