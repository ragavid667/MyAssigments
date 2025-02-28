import {chromium , test , expect} from  '@playwright/test'
import fs from 'fs'
import loginData from "../../Files/createlead.json"


test(`Read data from Json File ${loginData[0].TestCaseid}`, async ({ page }) => {
            
        
            await page.goto("http://leaftaps.com/opentaps/control/main");
            await page.locator("#username").fill(loginData[0].username);
            await page.locator("#passtword").fill(loginData[0].password);
            await page.click(".decorativeSubmit");
            await page.locator("text =  CRM/SFA").click();
//create lead

    await page.locator("//a[text()='Leads']").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName").fill(loginData[0].companyname);
    await page.locator("#createLeadForm_firstName").fill(loginData[0].firstname);
    await page.locator("#createLeadForm_lastName").fill(loginData[0].lastname);
   //selecting direct mail from source dropdown

    const source =  await page.selectOption("#createLeadForm_dataSourceId" , {label :loginData[0].sourcedropdown});
    console.log(`value = ${source}`);             

    const Marketingdropdown = await page.selectOption("#createLeadForm_marketingCampaignId" , {label :loginData[0].marketing});
    //count of dropdown values from marketingdropdown

    const marketingdropdown = page.locator('#createLeadForm_marketingCampaignId>option')
    const dropdownCount = await marketingdropdown.count();
    console.log(`No of dropdown values : ${dropdownCount}`);

    for (let index = 0; index < dropdownCount ; index++) {
    console.log(await marketingdropdown.nth(index).innerText());
    }

    const industrydropdown = await page.selectOption("#createLeadForm_industryEnumId" , {index: 5});
    const inrdropdown = await page.selectOption("#createLeadForm_currencyUomId" , {value :loginData[0].inr});
    const countrydropdown = await page.selectOption("#createLeadForm_generalCountryGeoId" , {value :loginData[0].country});
    const statedropdown = await page.selectOption("#createLeadForm_generalStateProvinceGeoId" , {value :loginData[0].state});
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




