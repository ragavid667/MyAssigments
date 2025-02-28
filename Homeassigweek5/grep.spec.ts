import {chromium , test , expect} from  '@playwright/test'
import fs from 'fs'
import {parse} from 'csv-parse/sync'

const leadData=parse(fs.readFileSync(`../../Files/createlead.csv`, 'utf-8'),{
    columns:true,
    skip_empty_lines:true,
})

test(`Read data from csv File `, {tag:'@Regression'}, async ({ page }) => {

    //const [username,password,companyname,fname,lname,sce,market,cur,coun,ste]=leadData
            
       for(let lead of leadData){
            await page.goto("http://leaftaps.com/opentaps/control/main");
            await page.locator("#username").fill(lead.uname);
            await page.locator("#password").fill(lead.password);
            await page.click(".decorativeSubmit");
            await page.locator("text =  CRM/SFA").click();
//create lead

    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill(lead.companyname);
    await page.locator("#createLeadForm_firstName").fill(lead.firstname);
    await page.locator("#createLeadForm_lastName").fill(lead.lastname);
 }
});