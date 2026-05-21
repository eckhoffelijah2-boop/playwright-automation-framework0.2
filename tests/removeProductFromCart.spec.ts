import { test, expect } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';

test.only('value stream - remove product from cart', async ({ page }) => {
  const poManager = new POManager(page);
  const amazonHomePage = poManager.getAmazonHomePage();
  const airPodsPage = poManager.getAirPodsPage();
  const basketPage = poManager.getBasketPage();
  const searchResultsPage = poManager.getSearchResultsPage();

  const product = 'AirPods';

  // go to homepage
  await amazonHomePage.goTo();

  // search product
  await amazonHomePage.validAirPodSearch(product);

  // open first result
  await searchResultsPage.declineCookies();
  await searchResultsPage.clickOnResultItem();

  // verify product page
  await expect(airPodsPage.productTitle).toContainText(product);

  // add to cart
  await airPodsPage.add2AirPodsToCart();

  // go to basket
  await basketPage.goToBasket();

  // verify item is in cart
  await expect(basketPage.cartItem(product)).toContainText(product);

  // remove item
  await basketPage.removeItemFromCart(product);

  // verify item is removed 
  await expect(basketPage.removedMessage(product)).toBeVisible();
  
});