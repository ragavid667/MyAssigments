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

//updating the lead details 

await page.fill('#updateLeadForm_companyName',"TCS");
await page.fill('#updateLeadForm_annualRevenue',"400000");
await page.fill('#updateLeadForm_departmentName', "HR");
await page.fill('#updateLeadForm_description', "updated");
await page.locator("(//input[@name='submitButton'])[1]").click();

//verifying using assertions
const companyName = await page.locator('#updateLeadForm_companyName').textContent();
  expect(companyName).toBe("TCS"); // Assert that the company name is updated

  const annualRevenue = await page.locator('#updateLeadForm_annualRevenue').textContent();
  expect(annualRevenue).toBe("400000"); // Assert that the annual revenue is updated

  const department = await page.locator('#updateLeadForm_departmentName').textContent();
  expect(department).toBe("HR"); // Assert that the department is updated

  const description = await page.locator('#updateLeadForm_description').textContent();
  expect(description).toBe("updated"); // Assert that the description is updated

});