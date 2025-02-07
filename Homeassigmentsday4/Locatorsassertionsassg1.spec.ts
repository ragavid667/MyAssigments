import {chromium , test , expect} from  '@playwright/test'
test("Create a Lead",  async({page}) => {

await page.goto("http://leaftaps.com/opentaps/control/main");

await page.locator("//input[@id = 'username']").fill("Demosalesmanager");
await page.locator("//input[@id = 'password']").fill("crmsfa");
await page.locator("//input[@class = 'decorativeSubmit']").click();
await page.locator("text =  CRM/SFA").click();
//create lead
await page.locator("//a[text()='Leads']").click();
await page.locator("//a[text()='Create Lead']").click();
await page.fill("#createLeadForm_companyName", "infosys");
await page.fill("#createLeadForm_firstName", "Ragavi");
await page.fill("#createLeadForm_lastName","Dayanithi");
await page.fill("#createLeadForm_personalTitle","details");
await page.fill("#createLeadForm_generalProfTitle","fulldetails");
await page.fill("#createLeadForm_annualRevenue","300000");
await page.fill("#createLeadForm_departmentName","IT");
await page.fill("#createLeadForm_primaryPhoneNumber","7847353984");
await page.locator("//input[@class ='smallSubmit']").click();

/*

//expect verifying auto-retrying assertions
await expect(page.locator("#createLeadForm_companyName")).toHaveText("infosys");
await expect(page.locator("#createLeadForm_firstName")).toHaveText("Ragavi");
await expect(page.locator("#createLeadForm_lastName")).toHaveText("Dayanithi");


//expect non -retrying assertions
const companyName = await page.locator('createLeadForm_companyName').textContent();
expect(companyName).toBe("infosys");

const firstName = await page.locator('createLeadForm_firstName').textContent();
expect(firstName).toBe("Ragavi");

const lastName = await page.locator('createLeadForm_lastName').textContent();
expect(lastName).toBe("Dayanithi");


*/
});

test("Edit a Lead",  async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    await page.locator("//input[@id = 'username']").fill("Demosalesmanager");
    await page.locator("//input[@id = 'password']").fill("crmsfa");
    await page.locator("//input[@class = 'decorativeSubmit']").click();
    await page.locator("text =  CRM/SFA").click();
    //create lead
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.fill("#createLeadForm_companyName", "infosys");
    await page.fill("#createLeadForm_firstName", "Ragavi");
    await page.fill("#createLeadForm_lastName","Dayanithi");
    await page.locator("//input[@class ='smallSubmit']").click();
    await page.click('//a[text() = "Edit"]');
    await page.fill('#updateLeadForm_companyName',"TCS");
    await page.locator("(//input[@name='submitButton'])[1]").click();


});