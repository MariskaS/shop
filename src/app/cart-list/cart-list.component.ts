import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CartService } from './cart.service';
import { CartItem } from '../core/interfaces/CartItem';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Output() removeProduct: EventEmitter<any> = new EventEmitter<any>();
  cartList: Array<CartItem>;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartList = this.cartService.getCartItems();
  }

  onRemove(data) {
    this.removeProduct.emit(data);
    this.cartList.splice(data, 1);
  }

  // TODO: show sum of Product
  // getCartItemsPrice(): number {
  //   return this.cartService.getCartItemsPrice();
  // }
}
