import {test ,expect} from "@playwright/test";


test ( 'Interacting with dropdown' , async ({page}) =>  {

    await page.goto("https://leafground.com/select.xhtml");

  const dropdownselect =  page.locator(".card").filter({hasText: "Which is your favorite UI Automation tool?"});
  await page.locator('select').nth(0).selectOption({ label: 'Selenium' });

  // Add assertions options were selected correctly)
  
  const selectedUI = await page.locator('select').nth(0).inputValue();
  expect(selectedUI).toBe('Selenium');

  // Get the count and print all the values in the dropdown
  const options = await page.locator('select').nth(0).locator('option');
  const optionCount = await options.count();
  console.log(`Total options in the first dropdown: ${optionCount}`);

  for (let i = 0; i < optionCount; i++) {
    const optionText = await options.nth(i).innerText();
    console.log(`Option ${i + 1}: ${optionText}`);
  }
  await page.waitForTimeout(3000); 

  //  Choose your preferred country (e.g., India)
  const selectcities = page.locator(".card").filter({hasText :"Choose your preferred country."});
  await page.locator('select').nth(1).selectOption({ value: 'India' });
  const selectvalues = await page.locator('select').nth(1).inputValue();
  expect(selectvalues).toBe('India');

  //  Confirm cities corresponding to country (India) is loaded
  // Assuming the cities dropdown is loaded upon country selection
  const selectcitybelongs = page.locator(".card").filter({hasText :"Confirm Cities belongs to Country is loaded."});
  const cityOptions = await page.locator('select').nth(2).locator('option');
  const cityCount = await cityOptions.count();
  console.log(`Cities loaded for India: ${cityCount}`);
  for (let i = 0; i < cityCount; i++) {
    const cityText = await cityOptions.nth(i).innerText();
    console.log(`City ${i + 1}: ${cityText}`);
  }

  // Step 6: Choose any three courses from the dropdown
  const course = page.locator(".card").filter({hasText :"Choose the Course"});
  await page.locator('select').nth(3).selectOption({ value: 'Java' });
  await page.locator('select').nth(3).selectOption({ value: 'Python' });
  await page.locator('select').nth(3).selectOption({ value: 'Selenium' });

  // Step 7: Choose a language and print all the values from the language dropdown

  const languageOptions = await page.locator('select').nth(4).locator('option');
  const languageCount = await languageOptions.count();
  console.log(`Total languages available: ${languageCount}`);
  for (let i = 0; i < languageCount; i++) {
    const languageText = await languageOptions.nth(i).innerText();
    console.log(`Language ${i + 1}: ${languageText}`);
  }

  // Step 8: Select 'Two' irrespective of the language chosen
  await page.locator('select').nth(5).selectOption({ label: 'Two' });

  

});
