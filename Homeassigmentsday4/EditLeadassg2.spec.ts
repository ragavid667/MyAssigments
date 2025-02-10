/*1. Navigate to the url http://leaftaps.com/opentaps/control/main
2. Enter the username as ‘Demosalesmanager’
3. Enter the password as ‘crmsfa’
4. Click the Login button
5. Click CRM/SFA
6. Click Leads
7. Click Find Leads
8. Enter the first name
9. Click Find Leads button
10. Click the first resulting Lead ID
11. Click Edit
12. Edit Company name
13. Edit Annual Revenue
14. Edit Department
15. Enter Description
16. Click Update
17. Verify the edited fields using appropriate assertions*/




import {chromium , test , expect} from  '@playwright/test'
test("Create a Lead",  async({page}) => {

await page.goto("http://leaftaps.com/opentaps/control/main");
//login page
await page.locator("//input[@id = 'username']").fill("Demosalesmanager");
await page.locator("//input[@id = 'password']").fill("crmsfa");
await page.locator("//input[@class = 'decorativeSubmit']").click();
await page.locator("text =  CRM/SFA").click();
//edit lead details
await page.locator("//a[text()='Leads']").click();
await page.click('//a[text()="Find Leads"]');

await page.locator("(//input[@name='firstName'])[3]").fill("Ragavi");
await page.click('//button[text() = "Find Leads"]');

await page.waitForSelector('//div[@class = "x-grid3-cell-inner x-grid3-col-partyId"]/a');
await page.click('//div[@class = "x-grid3-cell-inner x-grid3-col-partyId"]/a');
await page.click('//a[text() = "Edit"]');

//updating the lead details and assert the updated fields
await expect(page.locator('//input[@id ="updateLeadForm_companyName"]')).toBeVisible();
await page.fill('#updateLeadForm_companyName',"TCS");
await expect(page.locator('//input[@id ="updateLeadForm_annualRevenue"]')).toBeVisible();
await page.fill('#updateLeadForm_annualRevenue',"400000");
await expect(page.locator('//input[@id ="updateLeadForm_departmentName"]')).toBeVisible();
await page.fill('#updateLeadForm_departmentName', "HR");
const description = await page.locator('//input[@id = "updateLeadForm_description"]').textContent();
  expect(description).toBe("updated"); // Assert that the description is updated  --error in description assert

//await expect(page.locator('//input[@id ="updateLeadForm_description"]')).toBeChecked();
//await page.fill('#updateLeadForm_description', "updated");
await page.locator("(//input[@name='submitButton'])[1]").click();




  
});