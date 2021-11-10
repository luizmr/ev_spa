import { Product } from './product';

export interface GraphQlOutput {
	allProducts: Array<Product>;
	_allProductsMeta: { count: number };
}
