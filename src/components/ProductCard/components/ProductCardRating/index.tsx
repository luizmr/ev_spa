import React from 'react';

// material-ui
import { Rating } from '@mui/material';

// models
import { Product } from 'models/product';

type Props = {
	product: Product;
};

const ProductCardRating = ({ product }: Props) => {
	return (
		<div className="product-card__stars">
			<Rating
				name="rating-stars"
				defaultValue={product.rating}
				precision={0.1}
				readOnly
				size="small"
			/>
			<p>{(Math.round(product.rating * 100) / 100).toFixed(2)}</p>
		</div>
	);
};

export default ProductCardRating;
