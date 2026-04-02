import { test,expect,Locator,Page } from '@playwright/test';

export class AirPodsPage {

      page: Page;
      productTitle: Locator;
      quantityDropDown: Locator;
      quantity2: Locator;
      addToBasketBtn: Locator;
      noThanksButton: Locator;
      
    constructor(page:Page){
      this.page = page;
      this.productTitle = page.locator('#productTitle');
      this.quantityDropDown = page.locator('#a-autoid-2-announce');
      this.quantity2 = page.getByRole('option', { name: '2' });
      this.addToBasketBtn = page.getByRole('button', { name: 'Add to basket', exact: true });
      this.noThanksButton = page.getByRole('button', { name: /no, thank you/i });
    }
 
   async add2AirPodsToCart(){

    
      await this.quantityDropDown.click();
      await this.quantity2.click();
      await this.addToBasketBtn.click();
      if (await this.noThanksButton.isVisible().catch(() => false)) {
        await this.noThanksButton.click();
      }
      
   }

}
