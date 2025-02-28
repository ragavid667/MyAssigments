import test from "@playwright/test";
import dotenv from 'dotenv'


const fileName=process.env.ENVFile
dotenv.config({path:`Files/${fileName}.env`})


const uname= process.env.P_Username as string
const pwd= process.env.P_Password as string


test(`Learning to read ENV Files from leaftap`,async ({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.fill("#username",uname);
    await page.fill("#password",pwd);
    await page.click(".decorativeSubmit");
    });
