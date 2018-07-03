import { Component, Input, OnInit } from '@angular/core';

import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cartList: Array<ProductModel>;

  cartColumns = [
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

}
