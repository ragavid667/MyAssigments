import {test,expect} from "@playwright/test";


test('Interact with frames', async ({ page }) => {
    
    await page.goto('https://leafground.com/frame.xhtml'); 

    const iframeElement = await page.locator('iframe'); // Locate the iframe on the page
    const iframe = await iframeElement.contentFrame();

    //Interact with the iframe using framelocator
    const innerframe = page.frameLocator("(//iframe)[1]")
    const firstframe = await innerframe.locator("#Click");
    await firstframe.click();
    const assert = await firstframe.innerText();
    await expect(assert).toContain("Hurray! You Clicked Me.")
    await page.waitForTimeout(3000);




// To get the frames
const allFrame = page.frames();

console.log(allFrame);

//To get the count of frames

const frameCount = allFrame.length;
console.log(`The total frames is ${frameCount}`);

for(let iframe of allFrame){
const title = await iframe.title()
console.log(`The title of the frame is ${title}`);
}
//nested frames

const card = page.locator(".card").filter({hasText:"Inside Nested frame"});
const frame_one = card.frameLocator("iframe");
const frame_two = frame_one.frameLocator("iframe");
await frame_two.locator('#Click').click()
await page.waitForTimeout(3000);

const changedText = await frame_two.locator('span').innerText();
await expect(changedText).toContain("Hurray! You Clicked Me.");
await page.waitForTimeout(3000);

});