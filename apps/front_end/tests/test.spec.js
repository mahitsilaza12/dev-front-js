// @ts-check
const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('Carte affichée correctement', async ({ page }) => {
  await page.goto(process.env.API_BASE_URL_TEST);

  const cards = await page.$$('.card'); 
  expect(cards).not.toBeNull(); 

//  verification 
  for (const card of cards) {
    const title = await card.$('.card-title');
    expect(title).not.toBeNull(); 

    const width = await card.$('.card-text:nth-child(2)');
    expect(width).not.toBeNull();

    const length = await card.$('.card-text:nth-child(3)');
    expect(length).not.toBeNull(); 

    const weight = await card.$('.card-text:nth-child(4)');
    expect(weight).not.toBeNull(); 

    const model = await card.$('.card-text:nth-child(5)');
    expect(model).not.toBeNull(); 
  }
});
