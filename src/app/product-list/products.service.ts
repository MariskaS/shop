import { Injectable } from '@angular/core';

import { ProductModel } from '../models/product.model';

import { Categories } from './CategoriesEnum';
import { Types } from './TypesEnum';

@Injectable()
export class ProductsService {
  private products: Array<ProductModel> = [
    new ProductModel(
      '2',
      'Name 2',
      'Description',
      34,
      Categories.Category2,
      false,
      [Types.Type1, Types.Type4]
    ),
    new ProductModel(
      '1',
      'Name 1',
      'Description',
      452,
      Categories.Category1,
      false,
      [Types.Type1, Types.Type4]
    ),
    new ProductModel(
      '3',
      'Name 3',
      'Description',
      56,
      Categories.Category3,
      true,
      [Types.Type1, Types.Type2, Types.Type3]
    ),
    new ProductModel(
      '4',
      'Name 4',
      'Description',
      45,
      Categories.Category4,
      true,
      [Types.Type1, Types.Type3]
    ),
    new ProductModel(
      '5',
      'Name 5',
      'Description',
      88,
      Categories.Category4,
      true,
      [Types.Type1, Types.Type2, Types.Type3, Types.Type4]
    ),
  ];

  getProducts(): Array<ProductModel> {
    return this.products;
  }

  getProductById(id: string): ProductModel {
    return this.products.find((item) => {
      return id === item.id;
    });
  }
}
