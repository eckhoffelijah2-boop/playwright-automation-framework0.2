import { test,expect,Locator,Page } from '@playwright/test';
import {POManager} from '../pageObjects/POManager';

test('value stream - search and add product to cart', async ({ page }) => {
  const poManager = new POManager(page);
  const amazonHomePage = poManager.getAmazonHomePage();
  const airPodsPage = poManager.getAirPodsPage();
  const basketPage = poManager.getBasketPage();
  const searchResultsPage = poManager.getSearchResultsPage();
 
  const product = 'AirPods';
 // amazon home Page
  await amazonHomePage.goTo();
  await amazonHomePage.validAirPodSearch(product);
 
  // airpods search page
  await searchResultsPage.declineCookies();
  await searchResultsPage.clickOnResultItem();
  
  //airpods page
  await expect(airPodsPage.productTitle).toContainText(product);
  await airPodsPage.add2AirPodsToCart();
 
  //basket page
  await basketPage.goToBasket();
  await expect(basketPage.cartItem(product)).toContainText(product);
  await expect(basketPage.quantityValue).toHaveText('2'); 
  
});


