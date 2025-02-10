/*1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Create Lead
8. Fill the Company Name
9. Fill the First Name
10. Fill the Last Name
11. Fill the Salutation
12. Fill the Title
13. Fill the Annual Revenue
14. Fill the Department
15. Fill the Phone number
16. Click Create Lead button
17. Verify the company name, first name, last name and the status using auto retrying and 
non-retrying assertions
*/



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

//Assertion for company name
await expect (page.locator('//input[@id = "createLeadForm_companyName"]')).toBeVisible();
await page.fill("#createLeadForm_companyName", "infosys");
//Assertion for firstName
await expect (page.locator('//input[@id = "createLeadForm_firstName"]')).toBeChecked();
await page.fill("#createLeadForm_firstName", "Ragavi");
//Assertion for lastName
await expect (page.locator('//input[@id = "createLeadForm_lastName"]')).toBeChecked();
await page.fill("#createLeadForm_lastName","Dayanithi");

await page.fill("#createLeadForm_personalTitle","details");
await page.fill("#createLeadForm_generalProfTitle","fulldetails");
await page.fill("#createLeadForm_annualRevenue","300000");
await page.fill("#createLeadForm_departmentName","IT");
await page.fill("#createLeadForm_primaryPhoneNumber","7847353984");
await page.locator("//input[@class ='smallSubmit']").click();



//expect verifying auto-retrying assertions
await expect(page.locator("#createLeadForm_companyName")).toBeChecked();
await expect(page.locator("#createLeadForm_firstName")).toBeVisible();
await expect(page.locator("#createLeadForm_lastName")).toBeChecked();

/*
//expect non -retrying assertions
const companyName = await page.locator('createLeadForm_companyName').textContent();
expect(companyName).toBe("infosys");

const firstName = await page.locator('createLeadForm_firstName').textContent();
expect(firstName).toBe("Ragavi");

const lastName = await page.locator('createLeadForm_lastName').textContent();
expect(lastName).toBe("Dayanithi");


*/
});



/*1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button 
12.Click Edit
13.Change the company name
14.Click Update

*/

test("Edit a Lead",  async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    await page.locator("//input[@id = 'username']").fill("Demosalesmanager");
    await page.locator("//input[@id = 'password']").fill("crmsfa");
    await page.locator("//input[@class = 'decorativeSubmit']").click();
    await page.locator("text =  CRM/SFA").click();
    //Create lead
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