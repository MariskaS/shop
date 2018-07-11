import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() buy: EventEmitter<any> = new EventEmitter<any>();
  @Input() products: Array<ProductModel>;

  // TODO - issues/1
  productColumns = [
    {key: 'id', title: 'ID'},
    {key: 'name', title: 'Name'},
    {key: 'description', title: 'Description'},
    {key: 'price', title: 'Price'},
    {key: 'category', title: 'Category'},
    {key: 'types', title: 'Types(s)'},
    {key: 'isAvailable', title: 'isAvailable'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Sent product to the cart.
   * @param product
   */
  onBuy(product): void {
    this.buy.emit(product.id);
  }

}

