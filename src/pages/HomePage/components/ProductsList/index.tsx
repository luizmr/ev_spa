import React from 'react';

// components
import ProductCard from 'components/ProductCard';
import LoadingComponent from './components/LoadingComponent';

// models
import { Product } from 'models/product';

type Props = {
	products: Array<Product>;
	loading: boolean;
};

const ProductsList = ({ products, loading }: Props) => {
	return (
		<div className="products-list">
			{loading ? (
				<LoadingComponent />
			) : (
				<>
					{products.map((obj: Product) => (
						<ProductCard product={obj} />
					))}
				</>
			)}
		</div>
	);
};

export default ProductsList;
