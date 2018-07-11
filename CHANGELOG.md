# Changelog
All notable changes to this project will be documented in this file.
  
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Task2] - 2018-07-11
### Added
- CartModule, ProductsModule, CoreModule, SharedModule
- HighlightDirective (add color for row by hover)
- CartComponent: added logic to show/change quantity of added product and logic for remove product - onRemove()
- ProductComponent: added directive ngClass for add class to isAvailable text ('red' - if false and 'green' - if true)
- ProductComponent: disable button 'Buy' if product no isAvailable
- HeaderComponent: added to CoreModule for future modifications

### Changed
- ProductListComponent: delegated the display of the list of products to ProductComponent
- ProductComponent: move method onBuy() to ProductListComponent


## [Task1] - 2018-07-06
### Added

#### Components
- Cart component
- Cart List component
- Product component
- Product List component

#### Core
- TypesEnum (contains an array of product types)
- CategoriesEnum (contains enum with several categories)
- Product (contains interface of product)

#### Models
- ProductModel (contains model of product)

#### Functionality
By clicking on the "buy" button:
- method addItem() gets array of product id
- In a method addItem() there is a check, exists or not in cartItems array products with such id
- If it does not exist, then the product is pushed to the cartItems array
- In Card Component we get the list of products added to the basket,
 using the getCartItems() method, and sent to the Card List component 
 (using [cartList]="cartList" in template)
- In Card List component we show the message 'Your basket is empty' if the basket is empty,
 and also show the count of added products

Functionality for table:
- To be able to sort in the table in the future, for all table thead was
  created an array of objects that contains a pair - a key and a value
  
[Task1]: https://github.com/MariskaS/shop/commits/Task1
[Task2]: https://github.com/MariskaS/shop/commits/Task2
