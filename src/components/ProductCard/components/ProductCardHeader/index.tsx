import React from 'react';

// models
import { Product } from 'models/product';

type Props = {
	product: Product;
};

const ProductCardHeader = ({ product }: Props) => {
	return (
		<div className="product-card__top">
			<img src={product.image.url} alt={`${product.image.id}`} />
			<p className="product-card__summary">{product.summary}</p>
		</div>
	);
};

export default ProductCardHeader;
