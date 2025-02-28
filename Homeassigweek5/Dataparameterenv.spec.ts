import {chromium , test , expect} from  '@playwright/test'

import dotenv from 'dotenv'


const fileName=process.env.ENVFile
dotenv.config({path:`../../Files/${fileName}.env`})


const uname= process.env.P_Username as string
const pwd= process.env.P_Password as string
const company=process.env.P_Companyname as string
const firstname=process.env.P_Firstname as string
const lastname=process.env.P_Lastname as string
const sourcedrop=process.env.P_Source as string
const marketing=process.env.P_Marketing as string
const curr=process.env.P_Currency as string
const count=process.env.P_Country as string
const state=process.env.P_State as string

test(`Read data from csv File `, async ({ page }) => {

    //const [username,password,companyname,fname,lname,sce,market,cur,coun,ste]=leadData
            
       
            await page.goto("http://leaftaps.com/opentaps/control/main");
            await page.locator("#username").fill(uname);
            await page.locator("#password").fill(pwd);
            await page.click(".decorativeSubmit");
            await page.locator("text =  CRM/SFA").click();
//create lead

    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill(company);
    await page.locator("#createLeadForm_firstName").fill(firstname);
    await page.locator("#createLeadForm_lastName").fill(lastname);
   //selecting direct mail from source dropdown

    const source =  await page.selectOption("#createLeadForm_dataSourceId" , {label :sourcedrop});
    console.log(`value = ${source}`);             

    const Marketingdropdown = await page.selectOption("#createLeadForm_marketingCampaignId",{label :marketing});
    //count of dropdown values from marketingdropdown

    const marketingdropdown = page.locator('#createLeadForm_marketingCampaignId>option')
    const dropdownCount = await marketingdropdown.count();
    console.log(`No of dropdown values : ${dropdownCount}`);

    for (let index = 0; index < dropdownCount ; index++) {
    console.log(await marketingdropdown.nth(index).innerText());
    }

    const industrydropdown = await page.selectOption("#createLeadForm_industryEnumId",{index: 6});
    const inrdropdown = await page.selectOption("#createLeadForm_currencyUomId",{value:curr});
    const countrydropdown = await page.selectOption("#createLeadForm_generalCountryGeoId",{value:count});
    const statedropdown = await page.selectOption("#createLeadForm_generalStateProvinceGeoId",{value:state});
    //get all the state values from dropdown 

    const Statedropdown = page.locator("#createLeadForm_generalStateProvinceGeoId>option")
    const dropdowncount = await Statedropdown.count();
    console.log(`No of dropdown values : ${dropdowncount}`)

    for (let index = 0; index < dropdowncount; index++)
    {
        console.log(await Statedropdown.nth(index).innerText());
    }

    await page.locator("//input[@class ='smallSubmit']").click();
 
});
