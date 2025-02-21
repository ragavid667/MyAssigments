import {test, expect} from "@playwright/test";
import { log } from "util";

test('Interact with Autowait', async ({ page }) => {
    
    await page.goto('https://leafground.com/waits.xhtml');  


//wait for visibility
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"})
    await buttonToClick.click();

    await expect(page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button").filter({hasText:"I am here"})).toBeVisible({timeout:12000});
    await page.waitForTimeout(3000);

//wait for invisibility
    const cardToSelect2= page.locator(".card").filter({hasText:"Wait for Invisibility (1 - 10 Sec)"});
    const buttonToClick2 = cardToSelect2.getByRole("button").filter({hasText:"Click"})
    await buttonToClick2.click();

    await expect(page.locator(".card").filter({hasText:"Wait for Invisibility (1 - 10 Sec)"}).getByRole("button").filter({hasText:"I am I am about to hide"})).toBeHidden({timeout:12000});

    //wait for clickable
    const cardToSelect3= page.locator(".card").filter({hasText:"Wait for Clickability"});
    const buttonToClick3 = cardToSelect3.getByRole("button").filter({hasText:"Click First Button"});
    await buttonToClick3.click();

    const buttonclick4 = cardToSelect3.getByRole("button").filter({hasText:"Click Second"});
    await buttonclick4.click();

    //wait for text change
    const cardToSelect4= page.locator(".card").filter({hasText:"Wait for Text Change (1 - 10 Sec)"});
    const buttonToClick5 = cardToSelect4.getByRole("button").filter({hasText:"Click"});
    await buttonToClick5.click();
    await expect(page.locator(".card").filter({hasText:"Wait for Text Change (1 - 10 Sec)"}).getByRole("button").filter({hasText:"Did you notice?"})).toBeVisible({timeout:12000});

});
