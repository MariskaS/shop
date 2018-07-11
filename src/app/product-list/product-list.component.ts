import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ProductsService } from './products.service';
import { ProductModel } from '../models/product.model';
import { CartService } from '../cart-list/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() buy: EventEmitter<any> = new EventEmitter<any>();

  products: Array<ProductModel>;

  constructor(private productsService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuy(data) {
    this.buy.emit(data);
    this.cartService.addItem(data);
    console.log('product ' + data + ' added to cart');
  }
}

