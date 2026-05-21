Playwright Automation Framework (UI, API, and Cucumber BDD)
Overview

This project demonstrates a test automation framework built with Playwright.
It includes:

UI automation using Playwright and TypeScript
API testing
Cucumber BDD integration using Gherkin feature files

The framework automates key e-commerce value streams such as:

searching for a product
adding a product to the cart
removing a product from the cart

The framework was designed with scalability and maintainability in mind using:

Page Object Model (POM)
reusable Cucumber step definitions
hooks
custom World constructor
reusable locators
parameterized scenarios
Tech Stack
Playwright
TypeScript
Cucumber (BDD)
Gherkin
Node.js
Framework Design

The framework follows the Page Object Model (POM) design pattern.

Page objects contain:

locators
reusable page actions

Step definitions contain:

business logic
assertions
reusable workflow steps

Feature files contain:

readable business scenarios written in Gherkin syntax

The framework also uses:

Cucumber hooks (Before, After, AfterStep)
Custom World constructor for scenario state management
automatic screenshot capture on failed steps

This structure improves:

readability
maintainability
scalability
reusability
Cucumber BDD Implementation

The framework supports Behavior Driven Development (BDD) using Cucumber.

Examples of implemented features:

Search and add product to cart
Remove product from cart

The framework uses:

reusable step definitions
feature tags
parameterized scenarios
hooks for setup and cleanup
custom World constructor instead of global variables

Example feature:

@Regression
Scenario: search for product and adding it to cart

  Given a Ecomerce application with a "AirPods" you can search and add to Cart
  When search for "AirPods"
  Then click on "AirPods"
  When add "AirPods" to Cart
  Then verify "AirPods" is in the Cart
Test Scenarios (Value Streams)
Search and Add Product to Cart (UI)

Feature: amazonSearchFunction.feature

Flow:

Navigate to Amazon
Search for product
Open first search result
Verify product page
Add item to basket
Verify item and quantity in cart
Remove Product from Cart (UI)

Feature: removeProductFromCart.feature

Flow:

Search for product
Add product to cart
Navigate to basket
Remove product
Verify removal confirmation
Add Product to Cart via API and Verify in UI

File: addProductToCartViaApi.spec.js

Flow:

Open product page
Add item via UI
Retrieve cart cookie
Send API request
Validate API response
Verify cart update in UI
Hooks and Test Lifecycle

The framework uses Cucumber hooks for test lifecycle management.

Implemented hooks:

Before Hook

Used for:

browser launch
browser context setup
page initialization
page object initialization
After Hook

Used for:

browser cleanup
context cleanup
AfterStep Hook

Used for:

automatic screenshot capture when a step fails

Example:

AfterStep(async function ({ result }) {

  if (result?.status === Status.FAILED) {

    await this.page.screenshot({
      path: 'screenshot.png'
    });

  }

});
Custom World Constructor

The framework uses a custom Cucumber World constructor instead of global variables.

Scenario state is stored using:

this.browser
this.context
this.page
this.product

This improves:

scenario isolation
framework scalability
maintainability
Tags

The framework supports Cucumber tags for selective execution.

Example:

@Regression
Scenario: remove AirPods from shopping basket

Run regression tests:

npx cucumber-js --tags "@Regression"
Running the Tests

Install dependencies:

npm install

Run all Cucumber tests:

npx cucumber-js

Run in debug mode:

PWDEBUG=1 npx cucumber-js

Run regression suite:

npx cucumber-js --tags "@Regression"

Run a specific feature:

npx cucumber-js features/removeProductFromCart.feature
Project Structure
features/
  amazonSearchFunction.feature
  removeProductFromCart.feature

  step_definitions/
    steps.ts

  support/
    hooks.ts
    world.ts

pageObjects/
  POManager.ts
  AmazonHomepage.ts
  SearchResultsPage.ts
  AirPodsPage.ts
  BasketPage.ts

tests/
  addProductToCartViaApi.spec.js
Future Improvements
Convert API test to TypeScript
Add HTML reporting
Add CI/CD integration
Improve selector robustness
Add environment configuration
Add cross-browser execution
Extend value streams (login, quantity updates, checkout flow)
Add data-driven testing
Author

This project was created as part of learning test automation with Playwright and Cucumber, with a focus on building scalable and maintainable automation frameworks around real-world user workflows.
