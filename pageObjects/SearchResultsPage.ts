import { Locator, Page } from '@playwright/test';

export class SearchResultsPage {

    page: Page;
    firstSearchResultItem: Locator;
    cookieDeclineButton:Locator;

    constructor(page: Page) {

        this.page = page;
        this.cookieDeclineButton = this.page.getByRole('button', { name: 'Decline' });
        this.firstSearchResultItem =  page.getByRole('link', { name: /AirPods/i }).first();
    }

    async declineCookies() {

    if (await this.cookieDeclineButton.isVisible()) {
        await this.cookieDeclineButton.click();
    }
}

    async clickOnResultItem() {
  const firstResult = this.page.getByRole('link', { name: /AirPods/i }).first();

  await firstResult.waitFor({
    state: 'attached',
    timeout: 30000
  });

  await firstResult.click();
}
}