import {chromium , test , expect} from  '@playwright/test'
import fs from 'fs'
import {parse} from 'csv-parse/sync'

const leadData=parse(fs.readFileSync(`../../Files/createlead.csv`, 'utf-8'),{
    columns:true,
    skip_empty_lines:true,
})

test(`Read data from csv File `, async ({ page }) => {

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
   //selecting direct mail from source dropdown

    const source =  await page.selectOption("#createLeadForm_dataSourceId" , {label :lead.sourcedropdown});
    console.log(`value = ${source}`);             

    const Marketingdropdown = await page.selectOption("#createLeadForm_marketingCampaignId",{label :lead.marketing});
    //count of dropdown values from marketingdropdown

    const marketingdropdown = page.locator('#createLeadForm_marketingCampaignId>option')
    const dropdownCount = await marketingdropdown.count();
    console.log(`No of dropdown values : ${dropdownCount}`);

    for (let index = 0; index < dropdownCount ; index++) {
    console.log(await marketingdropdown.nth(index).innerText());
    }

    const industrydropdown = await page.selectOption("#createLeadForm_industryEnumId",{index: 6});
    const inrdropdown = await page.selectOption("#createLeadForm_currencyUomId",{value:lead.currency});
    const countrydropdown = await page.selectOption("#createLeadForm_generalCountryGeoId",{value:lead.country});
    const statedropdown = await page.selectOption("#createLeadForm_generalStateProvinceGeoId",{value:lead.state});
    //get all the state values from dropdown 

    const Statedropdown = page.locator("#createLeadForm_generalStateProvinceGeoId>option")
    const dropdowncount = await Statedropdown.count();
    console.log(`No of dropdown values : ${dropdowncount}`)

    for (let index = 0; index < dropdowncount; index++)
    {
        console.log(await Statedropdown.nth(index).innerText());
    }

    await page.locator("//input[@class ='smallSubmit']").click();
 }
});
