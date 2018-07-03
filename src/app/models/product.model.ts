import { Product } from '../core/Product';
import { Categories } from '../core/CategoriesEnum';
import { Types } from '../core/TypesEnum';

export class ProductModel implements Product {
  constructor(public id: string,
              public name: string,
              public description: string,
              public price: number,
              public category: Categories,
              public types: Types[],
              public isAvailable: boolean) {
  }
}

