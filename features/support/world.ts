import {
  setWorldConstructor,
  World
} from '@cucumber/cucumber';

import {
  Browser,
  BrowserContext,
  Page
} from '@playwright/test';

import { POManager } from '../../pageObjects/POManager';

export class CustomWorld extends World {

  browser!: Browser;

  context!: BrowserContext;

  page!: Page;

  poManager!: POManager;

  amazonHomePage: any;

  airPodsPage: any;

  basketPage: any;

  searchResultsPage: any;

  product!: string;

}

setWorldConstructor(CustomWorld);