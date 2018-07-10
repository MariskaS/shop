import { Component, OnInit } from '@angular/core';

import { CartService } from './cart.service';
import { ProductModel } from '../models/product.model';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartList: Array<ProductModel>;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartList = this.cartService.getCartItems();
  }
}
