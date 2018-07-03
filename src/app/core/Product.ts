import { Categories } from './CategoriesEnum';
import { Types } from './TypesEnum';

export interface Product {
  name: string;
  description: string;
  price: number;
  category: Categories;
  types: Types[];
  isAvailable: boolean;
}
