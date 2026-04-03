import { test, expect } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';

test('value stream - remove product from cart', async ({ page }) => {
  const poManager = new POManager(page);
  const amazonHomePage = poManager.getAmazonHomePage();
  const airPodsPage = poManager.getAirPodsPage();
  const basketPage = poManager.getBasketPage();

  const product = 'AirPods';

  // go to homepage
  await amazonHomePage.goTo();

  // search product
  await amazonHomePage.validAirPodSearch(product);

  // open first result
  await page.locator('.a-link-normal.s-no-outline').first().click();

  // verify product page
  await expect(airPodsPage.productTitle).toContainText(product);

  // add to cart
  await airPodsPage.add2AirPodsToCart();

  // go to basket
  await basketPage.goToBasket();

  // verify item is in cart
  await expect(basketPage.cartItem).toContainText(product);

  // remove item
  await basketPage.removeItemFromCart();

  // verify item is removed 
  await expect(basketPage.cartItem).toHaveCount(0);
  
});