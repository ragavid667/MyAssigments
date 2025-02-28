import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('textbox', { name: 'Type characters' }).click();
  await page.getByRole('textbox', { name: 'Type characters' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Type characters' }).fill('RYCGFF');
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('link', { name: 'Shop Books' }).click();
});