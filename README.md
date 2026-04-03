# Playwright Automation Framework (UI and API)

## Overview

This project demonstrates a test automation framework built with Playwright. It includes both UI automation using TypeScript and API testing using JavaScript.

The framework focuses on automating key e-commerce user journeys (value streams), such as searching for a product, adding it to the cart, and removing it from the cart.

---

## Tech Stack

* Playwright
* TypeScript (UI tests and page objects)
* JavaScript (API test)
* Node.js

---

## Framework Design

The UI tests are built using the Page Object Model (POM), which separates page interactions from test logic.

Page objects contain:

* locators
* actions

Test files contain:

* assertions
* test flow

This structure improves readability, reusability, and maintainability.

---

## Test Scenarios (Value Streams)

### Search and Add Product to Cart (UI)

File: `searchAndAddProductToCart.spec.ts`

Flow:

* Navigate to Amazon
* Search for AirPods
* Open the first product
* Verify the product title
* Add items to the basket
* Open the basket
* Verify product and quantity

---

### Remove Product from Cart (UI)

File: `removeProductFromCart.spec.ts`

Flow:

* Search for product
* Add product to cart
* Navigate to basket
* Remove product
* Verify cart is empty

---

### Add Product to Cart via API and Verify in UI

File: `addProductToCartViaApi.spec.js`

Flow:

* Open product page
* Add item to cart via UI
* Retrieve cart cookie
* Send API request to add item to cart
* Validate response
* Handle optional popup
* Verify item appears in cart

---

## API and UI Integration

This project demonstrates combining API and UI testing in a single flow.

The API is used to manipulate the application state directly, while the UI is used to verify the result from a user perspective.

This approach improves execution speed and reduces flakiness compared to relying only on UI tests.

---

## Running the Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test:

```bash
npx playwright test searchAndAddProductToCart.spec.ts
```

---

## Project Structure

```
tests/
  searchAndAddProductToCart.spec.ts
  removeProductFromCart.spec.ts
  addProductToCartViaApi.spec.js

pageObjects/
  POManager.ts
  AmazonHomepage.ts
  AirPodsPage.ts
  BasketPage.ts
```

---

## Future Improvements

* Convert API test to TypeScript
* Improve selector robustness
* Add reporting
* Extend value streams (e.g. update quantity, login flow)

---

## Author

This project was created as part of learning test automation with Playwright, with a focus on building maintainable and structured tests around real user flows.
