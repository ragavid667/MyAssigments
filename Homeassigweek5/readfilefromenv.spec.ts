import test from "@playwright/test";
import dotenv from 'dotenv'

//env file reading for salesforce account
const fileName=process.env.ENVFile
dotenv.config({path:`Files/${fileName}.env`})


const uname= process.env.E_username as string
const pass= process.env.E_password as string

//test annotation 
test.only(`Learning to read ENV Files`, async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", uname);
    await page.fill("#password", pass);
    await page.click("#Login");
})

test.skip(`Skip the test execution`, async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", uname);
    await page.fill("#password", pass);
    await page.click("#Login");
})


test.fail(`Mark tests with known issues`, async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", uname);
    await page.fill("#password", pass);
    await page.click("#Login");
})


test.fixme(`Indicate tests that need fixes`, async ({ page }) => {
    await page.goto("https://login.salesforce.com/")
    await page.fill("#username", uname);
    await page.fill("#password", pass);
    await page.click("#Login");
})


test(`Test to handle multiple page`, async ({browserName,page,context}) => {
    test.slow(browserName=== 'webkit',"Running in Safari will be slow")
    await page.goto("https://www.amazon.in/");
    const page_one  = await context.newPage();
    await page_one.goto(`https://www.flipkart.com/`);
    const page_two  = await context.newPage();
    await page_two.goto(`https://www.testleaf.com/course/fresher-software-testing-bootcamp-training-course.html`);
})

test.only(`learn to use annotations step`,async ({page})=>{ 
    test.step("Load the url",async()=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    })

    test.step("Enter the username as demoCSR",async()=>{
    await page.fill("#username","demoCSR")
    })

    test.step("Enter the passwrod as crmsfa",async()=>{
    await page.fill("#password","crmsfa")
    })

    test.step("click on login button",async()=>{
    await page.click(".decorativeSubmit")
})

})


