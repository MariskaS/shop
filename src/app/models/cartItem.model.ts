import { CartItem } from '../core/interfaces/CartItem';
import { Product } from '../core/interfaces/Product';

export class CartItemModel implements CartItem {
  constructor(public product: Product,
              public quantity: number) {

  }
}

