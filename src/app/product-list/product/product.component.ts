import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../products.service';
import { CartService } from '../../cart-list/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<ProductModel>;

  productColumns = [
    {key: 'id', title: 'ID'},
    {key: 'name', title: 'Name'},
    {key: 'description', title: 'Description'},
    {key: 'price', title: 'Price'},
    {key: 'category', title: 'Category'},
    {key: 'types', title: 'Types(s)'},
    {key: 'isAvailable', title: 'isAvailable'},
  ];

  constructor(private productsService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  /**
   * Sent product to the cart.
   * @param product
   */
  onBuy(product): void {

    this.cartService.addItem(product.id);
    console.log('product ' + product.name + ' added to cart');
  }

}
