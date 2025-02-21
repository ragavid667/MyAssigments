import {test ,expect} from "@playwright/test";
test ( 'Interacting with Checkbox' , async ({page}) => {

await page.goto("https://leafground.com/checkbox.xhtml");


await page.locator("//span[normalize-space(text())='Basic']").click();
await page.locator("//span[normalize-space(text())='Ajax']").click();
await expect(page.locator("//span[normalize-space(text())='Checked']")).toBeVisible();
const checkboxes =  page.locator(".card").filter({hasText: "Choose your favorite language(s)"});

await page.locator("//label[normalize-space(text())='Java']").click();
await page.locator("//label[normalize-space(text())='Javascript']").click();
//tristate checkbox
//const tristatecheckbox = page.locator(".card").filter({hasText: "Tri State Checkbox"});
//await page.locator("//div[@class ='ui-chkbox ui-widget']").click();
//const tristatestatus = await expect(page.locator("//span[normalize-space(text())='State has been changed.']")).toBeVisible();
//console.log('state has been changes:'  , "tristatestatus")


//toggle switch
await page.locator("(//div[@class='ui-toggleswitch ui-widget']//div)[2]").click();
await expect(page.locator("//span[normalize-space(text())='Checked']")).toBeVisible();
//verify checkbox is disabled
const verifycheckbox = page.locator(".card").filter({hasText :"Verify if check box is disabled"});
const checkbox = page.locator('input[type="checkbox"]:disabled');
await expect (checkbox).toBeDisabled();
//selecting multiple options

await page.locator("//ul[@data-label='Cities']").click();
await page.locator("(//li[@data-item-value='Paris']//label[1]").click();
await page.locator("//li[@data-item-value='London']//label[1]").click();
await page.locator("//li[@data-item-value='Berlin']//label[1]").click();


  await page.waitForTimeout(6000);

  await page.close();
});