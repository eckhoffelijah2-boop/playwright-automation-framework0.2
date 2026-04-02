import { test,expect,Locator,Page } from '@playwright/test';
export class AmazonHome {

    page:Page;
    acceptCookiesBtn: Locator;
    searchBox:Locator;
    searchBtn:Locator;
   
   constructor(page:Page)
    {
     this.page = page;
     this.acceptCookiesBtn = page.getByRole('button', { name: 'Accept' });
     this.searchBox = page.getByRole('searchbox', { name: 'Search Amazon.de' });
     this.searchBtn = page.getByRole('button', { name: 'Go', exact: true });
    }

    async goTo()
   {
    await this.page.goto('https://www.amazon.de/?&tag=googdeaen-21&ref=pd_sl_7qhccgoot7_e&adgrpid=154228170936&hvpone=&hvptwo=&hvadid=675212901583&hvpos=&hvnetw=g&hvrand=113983762822001701&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9043396&hvtargid=kwd-10573980&hydadcr=10627_2211717&language=en_GB&gad_source=1');
   }

   async validAirPodSearch(product:string) 
    {    
       if (await this.acceptCookiesBtn.isVisible().catch(() => false)) {
    await this.acceptCookiesBtn.click();
       }
      await this.searchBox.click();
      await this.searchBox.fill(product);
      await this.searchBtn.click();


    }


}

