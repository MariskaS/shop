import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';
import { ProductsService } from '../product-list/products.service';

@Injectable()
export class CartService {
  private cartItems: Array<ProductModel> = [];

  constructor(private productsService: ProductsService) {

  }

  addItem(id) {
    const isExist = this.cartItems.find(item => item.id === id);

    if (!isExist) {
      const item = this.productsService.getProductById(id);

      this.cartItems.push(item);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

}
