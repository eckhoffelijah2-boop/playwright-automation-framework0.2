Feature: Greeting

@Regression
Scenario Outline: search for product and adding it to cart

  Given a Ecomerce application with a "<product>" you can search and add to Cart
  When search for "<product>"
  Then click on "<product>"
  When add "<product>" to Cart
  Then verify "<product>" is in the Cart

Examples:
  | product |
  | AirPods |
  