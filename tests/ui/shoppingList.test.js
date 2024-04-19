const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://shopping-8fpi.onrender.com/shopping-list');
    const list = await page.$('dl');
    expect(list).toBeTruthy();
  });
  