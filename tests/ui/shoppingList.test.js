const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://shopping-8fpi.onrender.com/Shopping-List');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  