import { test,expect,Locator,Page } from '@playwright/test';


export class BasketPage {
    correctBasketPage: Locator;
    cartItem: Locator;
    quantityValue: Locator;

    constructor(page:Page){
        this.correctBasketPage = page.getByRole('link', { name: 'items in shopping basket' });
        this.cartItem = page.getByRole('listitem').filter({ hasText: 'AirPods' });
        this.quantityValue = page.getByText('2', { exact: true }).nth(1);
    }
  async goToBasket(){
      await this.correctBasketPage.click();
      
  }

}

