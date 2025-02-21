import {test, expect} from "@playwright/test";
import { log } from "util";

test('Interact with radio buttons on leafground.com', async ({ page }) => {
    
    await page.goto('https://leafground.com/radio.xhtml');  
    
    // Step 1: Identify and assert the default selected radio button
    const defaultSelectedRadio = await page.locator('.ui-radiobutton-box ui-widget ui-corner-all ui-state-default ui-state-active');
    const isDefaultSelected = await defaultSelectedRadio.isChecked();
    expect(isDefaultSelected).toBe(true);  // Assert that the default radio button is selected
    
    //fav browser to be checked
  await page.locator(".card").filter({hasText:"Your most favorite browser"})
  const defaultRadioButton = await page.locator('input[type="radio"]:checked');
  const defaultRadioValue = await defaultRadioButton.getAttribute('value');
  console.log(` selected radio button value: ${defaultRadioValue}`);
  expect(defaultRadioValue).toBe('Chrome');
    
    // Step 4: Click one of the cities (we'll select "Bangalore")
    await page.locator('label:has-text("Bangalore")').click();  // Click the label for "Bangalore"
    const isBangaloreChecked = await page.locator('label:has-text("Bangalore")').locator('input').isChecked();
    expect(isBangaloreChecked).toBe(true);  // Assert that Bangalore is selected
    
    // Step 5: Select the age group (select default option)
    await page.locator('label:has-text("21-40")').click();  // Click the label for the "21-40" age group
    const isAgeGroupSelected = await page.locator('label:has-text("21-40")').locator('input').isChecked();
    expect(isAgeGroupSelected).toBe(true);  // Assert that "21-40" age group is selected
  });