const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('https://shopping-8fpi.onrender.com'); 
    const homeLink = await page.$('a[href="/"]');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  