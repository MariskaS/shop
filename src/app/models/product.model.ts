import { Categories } from '../product-list/CategoriesEnum';
import { Types } from '../product-list/TypesEnum';
import { Product } from '../core/interfaces/Product';

export class ProductModel implements Product {
  constructor(public id: string,
              public name: string,
              public description: string,
              public price: number,
              public category: Categories,
              public isAvailable: boolean,
              public types?: Types[]) {
  }
}

