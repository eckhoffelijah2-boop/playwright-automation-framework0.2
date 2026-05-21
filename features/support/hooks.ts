import { AfterStep, Status, Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { POManager } from '../../pageObjects/POManager';

Before(async function () {
  this.browser = await chromium.launch({
    headless: false,
    slowMo: 200
  });

  this.context = await this.browser.newContext({
    locale: 'de-DE',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  });

  this.page = await this.context.newPage();

  this.poManager = new POManager(this.page);

  this.amazonHomePage = this.poManager.getAmazonHomePage();
  this.airPodsPage = this.poManager.getAirPodsPage();
  this.basketPage = this.poManager.getBasketPage();
  this.searchResultsPage = this.poManager.getSearchResultsPage();
});

After(async function () {

  if (this.context) {
    await this.context.close();
  }

  if (this.browser) {
    await this.browser.close();
  }

});

AfterStep(async function ({ result }) {

  if (result?.status === Status.FAILED) {
  await this.page.screenshot({ path:'screenshot.png'});

  }

});