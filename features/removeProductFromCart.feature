Feature: Remove Product From Cart

@Test
Scenario: remove AirPods from shopping basket
 
  Given a Ecomerce application with a "AirPods" you can search and add to Cart
  When search for "AirPods"
  Then click on "AirPods"
  When add "AirPods" to Cart
  Then verify "AirPods" is in the Cart
  When remove "AirPods" from the Cart
  Then verify "AirPods" is removed from the Cart