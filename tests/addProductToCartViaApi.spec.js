import { test, expect } from '@playwright/test';

test('value stream - add product to cart via API and verify in UI', async ({ page, request }) => {

  // Open product page
  await page.goto('https://glogangworldwide.com/products/glo-gang-sun-socks-black');

  // Click add to cart 
  await page.click('button:has-text("Add to cart")');

  // Wait for request to complete
  await page.waitForTimeout(2000);

  //  Get cookies
  const cookies = await page.context().cookies();

  const cartCookie = cookies.find(c => c.name === 'cart');

  if (!cartCookie) {
    throw new Error('Cart cookie still not found');
  }

  // API call
  const response = await request.post('https://glogangworldwide.com/cart/add.js', {
    headers: {
      Cookie: `cart=${cartCookie.value}`
    },
    form: {
      id: '49686174368046',
      quantity: '1'
    }
  });

  expect(response.status()).toBe(200);
 
  await page.getByRole('button', { name: "Nah I'd rather pay full price" }).click();
await expect(page.locator('.m-cart-item__title')).toContainText('Socks');


});