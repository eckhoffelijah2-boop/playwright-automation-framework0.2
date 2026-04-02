import { test,expect,Page } from '@playwright/test';
import {AmazonHome} from './AmazonHomepage';
import {AirPodsPage} from './airPodsPage';
import {BasketPage} from './basketPage';


export class POManager {
 
 page: Page;
 amazonHomePage: AmazonHome;
 airPodsPage: AirPodsPage;
 basketPage: BasketPage;
 
  constructor(page:Page){
  this.page = page; 
  this.amazonHomePage = new AmazonHome(this.page);
  this.airPodsPage = new AirPodsPage(this.page);
  this.basketPage = new BasketPage(this.page);
 }

 getAmazonHomePage()
 {
  return this.amazonHomePage;
 }
 
 getAirPodsPage()
 {
   return this.airPodsPage;
 }
 
 getBasketPage()
 {
  return this.basketPage;
 }

}
