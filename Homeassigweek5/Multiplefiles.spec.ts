import test from '@playwright/test'
import fs from 'fs'
import {faker} from '@faker-js/faker'




let uname:any
let password:any

test.beforeAll(`Read to datafile`,async()=>{
const credentials=JSON.parse(fs.readFileSync('../../Files/credentials.json','utf-8'))
uname=credentials[0].username
password=credentials[0].password
})
test.describe.only(`Grouping the leaftaps testcases`, () => {
    test.describe.configure({mode:'parallel',retries:1})
test.beforeEach(`Login SetUp`,async({page})=>{
        await page.goto("http://leaftaps.com/opentaps/control/login")
        await page.fill("#username",uname)
        await page.fill("#password", password)
        await page.click(".decorativeSubmit")
        await page.locator("text=CRM/SFA").click();
})
})



test(`Create Leaftaps Leads testcases`,async({page})=>{
 
    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill(faker.company.buzzNoun());
    await page.locator("#createLeadForm_firstName").fill(faker.person.firstName());
    await page.locator("#createLeadForm_lastName").fill(faker.person.lastName());
    await page.waitForTimeout(2000)
   await page.locator("[name='submitButton']").click();
})


test.describe.serial(`execute serial`, async () => {
test(`Edit Leaftaps Leads testcases`,async({page})=>{
 
    
await page.locator("//a[text()='Leads']").click();
await page.click('//a[text()="Find Leads"]');

await page.locator("(//input[@name='firstName'])[3]").fill("Ragavi");
await page.click('//button[text() = "Find Leads"]');

await page.waitForSelector('//div[@class = "x-grid3-cell-inner x-grid3-col-partyId"]/a');
await page.click('//div[@class = "x-grid3-cell-inner x-grid3-col-partyId"]/a');
await page.click('//a[text() = "Edit"]');

//updating the lead details 

await page.locator('#updateLeadForm_companyName').fill(faker.company.buzzNoun());

await page.locator('#updateLeadForm_annualRevenue').fill(faker.finance.amount());
await page.locator('#updateLeadForm_departmentName').fill(faker.commerce.department());

await page.locator('#updateLeadForm_description').fill(faker.word.words());
  
await page.locator("(//input[@name='submitButton'])[1]").click();

})
})
test.describe.parallel(`execute parallel`, async () => {
test('Delete the Lead', async({page}) => {

    await page.locator("//a[text()='Leads']").click();
    await page.click('//a[text()="Find Leads"]');
    
    await page.locator("(//input[@name='firstName'])[3]").fill("Ragavi");
    await page.click('//button[text() = "Find Leads"]');
    
    await page.waitForSelector('//div[@class = "x-grid3-cell-inner x-grid3-col-partyId"]/a');
    await page.click('//div[@class = "x-grid3-cell-inner x-grid3-col-partyId"]/a');
    

    //delete the lead
    await page.locator("//a[normalize-space(text())='Delete']").click();

})


})

test.afterEach(`teardown`,async({})=>{
    if(test.info().status =='timedOut'||'failed'){
        console.log("Create jira issue")
    }else{
        console.log(`Testcase is passed`)
    } 
})

test.afterAll(`Upload attachments`,async()=>{
    console.log("upload attachments")
})
