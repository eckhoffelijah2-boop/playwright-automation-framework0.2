import { test,expect,Locator,Page } from '@playwright/test';


export class BasketPage {
    page: Page;
    correctBasketPage: Locator;
    quantityValue: Locator;
    

    constructor(page:Page){
        this.page = page;

        this.correctBasketPage = page.getByRole('link', { name: 'items in shopping basket' });
        //this.cartItem = page.getByRole('listitem').filter({ hasText: /AirPods/i });
        this.quantityValue = page.getByText('2', { exact: true }).nth(1);
        //this.deleteButton = page.getByRole('button', { name: /Delete.*AirPods/i });
    }

     cartItem(product: string): Locator {

        return this.page.getByRole('listitem').filter({ hasText: product }).first();
            
    }

     deleteButton(product: string): Locator {
    return this.page.getByRole('button', { name: /Delete Apple AirPods/i });
  }

  async goToBasket(){
      await this.correctBasketPage.click();
      
  }
   async removeItemFromCart(product: string) {
    await this.deleteButton(product).waitFor({ state: 'visible', timeout: 30000 });
    await this.deleteButton(product).click();
  }

  removedMessage(product: string): Locator {
  return this.page
    .locator('[id^="sc-list-item-removed-msg-text-delete"]')
    .filter({ hasText: product });
}

}

