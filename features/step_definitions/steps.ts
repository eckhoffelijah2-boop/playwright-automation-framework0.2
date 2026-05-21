import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

setDefaultTimeout(60 * 1000);



Given('a Ecomerce application with a {string} you can search and add to Cart', async function (productName:string) {
   
    this.product = productName;  
    await this.amazonHomePage.goTo();
         });

When('search for {string}', async function (productName:string) {
    await this.amazonHomePage.validAirPodSearch(productName);
    await this.page.waitForLoadState('domcontentloaded');
         });

Then('click on {string}', async function (productName: string) {
    await this.searchResultsPage.declineCookies();      
    await this.searchResultsPage.clickOnResultItem();
           
         });

When('add {string} to Cart', async function (productName: string) {
    await expect(this.airPodsPage.productTitle).toContainText(this.product);
    await this.airPodsPage.add2AirPodsToCart();
          
         });

Then('verify {string} is in the Cart', async function (productName: string) {
    await this.basketPage.goToBasket();
    await expect(this.basketPage.cartItem(this.product)).toBeVisible({ timeout: 30000 });
    await expect(this.basketPage.cartItem(this.product)).toContainText(this.product);
    await expect(this.basketPage.quantityValue).toHaveText('2'); 
});

When('remove {string} from the Cart', async function (productName: string) {

    await this.basketPage.removeItemFromCart(productName);

});

Then('verify {string} is removed from the Cart', async function (productName: string) {

    await expect(
        this.basketPage.removedMessage(productName)
    ).toBeVisible();

});
           
         

