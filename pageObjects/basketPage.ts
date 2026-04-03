import { test,expect,Locator,Page } from '@playwright/test';


export class BasketPage {
    correctBasketPage: Locator;
    cartItem: Locator;
    quantityValue: Locator;
    deleteButton: Locator;

    constructor(page:Page){
        this.correctBasketPage = page.getByRole('link', { name: 'items in shopping basket' });
        this.cartItem = page.getByRole('listitem').filter({ hasText: 'AirPods' });
        this.quantityValue = page.getByText('2', { exact: true }).nth(1);
        this.deleteButton = page.getByRole('button', { name: /Delete.*AirPods/i });
    }
  async goToBasket(){
      await this.correctBasketPage.click();
      
  }
   async removeItemFromCart() {
    await this.deleteButton.click();
  }

}

