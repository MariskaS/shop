import { Categories } from '../../product-list/CategoriesEnum';
import { Types } from '../../product-list/TypesEnum';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
  types?: Types[];
  producer?: string;
}
