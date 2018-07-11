import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CartItem } from '../../core/interfaces/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartList: Array<CartItem>;
  @Output() removeProduct: EventEmitter<any> = new EventEmitter();

  // TODO - issues/1
  cartColumns = [
    {key: 'id', title: 'ID'},
    {key: 'name', title: 'Name'},
    {key: 'description', title: 'Description'},
    {key: 'price', title: 'Price'},
    {key: 'quantity', title: 'Quantity'},
    {key: 'category', title: 'Category'},
    {key: 'types', title: 'Types(s)'}
  ];

  constructor() {
  }

  ngOnInit() {

  }

  /**
   * Remove product.
   * @param idx
   */
  onRemove(idx): void {
    this.removeProduct.emit(idx);
  }

}
