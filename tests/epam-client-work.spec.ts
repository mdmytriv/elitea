import { test, expect } from '@playwright/test';

test('Verify Client Work text is visible on EPAM website', async ({ page }) => {
  // Navigate to EPAM website
  await page.goto('https://www.epam.com/');

  // Click on the "Services" link in the header menu
  await page.click('text=Services');

  // Click on the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Wait for the "Client Work" text to be visible
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});