import {test ,expect} from "@playwright/test";
test ( 'Interacting with Buttons' , async ({page}) => {

await page.goto("https://leafground.com/button.xhtml");


const homepagetitle = await page.title();
console.log("homepage title is :" , homepagetitle)
 

const cardselect = page.locator(".card").filter({hasText: "Click and Confirm title."});
const buttonclick = cardselect.getByRole("button").filter({hasText: "Click"});
// Click the button and wait for the navigation 
const [newPage] = await Promise.all([page.context().waitForEvent('page'),buttonclick.click()]);  // Wait for a new page to open if it does //click the button
await page.waitForTimeout(30000);  

await newPage.waitForLoadState('load');

const newtitle = await newPage.title();
console.log("name of the newpage title:",newtitle);
await page.goBack();


    await page.waitForTimeout(30000);

   // const buttonresponse = await newtitle.toContain('Dashboard');
   // expect(buttonresponse).toBeTruthy();

   // newpage title is not displayed in console
  

//button disabled
  const button = page.locator(".card").filter({hasText: "Confirm if the button is disabled.."});
  await expect (page.locator('button:disabled')).toBeDisabled(); // Locate a disabled button 
  

  //click image button and hidden button
    await page.locator(".card").filter({hasText: "Click Image Button and Click on any hidden button"}).locator("//span[normalize-space(text())='Image']").click();
    await expect(page.locator(".ui-overlaypanel-content")).toBeVisible();
//hidden image is not clicked
  
  // Locate all buttons with the 'rounded' class
  const roundedButtons = page.locator("(//div[@class='card'])[7]//button");  
  const count =  await roundedButtons.count(); // Get the number of rounded buttons
  console.log('Number of rounded buttons:', count)// Log the number of rounded buttons
  
  
});
