import { Injectable } from '@angular/core';

import { ProductsService } from '../product-list/products.service';
import { CartItem } from '../core/interfaces/CartItem';
import { CartItemModel } from '../models/cartItem.model';

@Injectable()
export class CartService {
  private cartItems: Array<CartItem> = [];

  constructor(private productsService: ProductsService) {

  }

  addItem(id) {
    const cartItem = this.cartItems.find(item => item.product.id === id);

    if (!cartItem) {
      const item = this.productsService.getProductById(id);

      this.cartItems.push(new CartItemModel(item, 1));
    } else {
      cartItem.quantity += 1;
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  // TODO: show sum of Product
  // getCartItemsPrice() {
  //   return this.cartItems.reduce((sum, {product}) => sum + product.price, 0);
  // }
}
