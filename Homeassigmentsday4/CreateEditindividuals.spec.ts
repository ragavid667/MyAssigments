/*1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name*/


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

/*1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher 
4. Click on the Individuals tab 
5. Search the Individuals last name
6. Click on the Dropdown icon and Select Edit
7. Select Salutation as 'Mr'
8. Now enter the first name
9. Click on Save and Verify the first name
*/

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
    await page.click("//span[contains(.,'ragavi Locked Name: Item ragavi')]");
    await page.click("//div[normalize-space(text())='Edit']");
    await page.click("(//a[@class='select'])[1]");
    await page.selectOption("#select" , {value: "Mr."});
    await page.fill('#First Name' , "Ragavi");
    await page.click("//button[@title='Save']");

// error in individuals tab not able to locator element for new individual and edit the individual tab


});