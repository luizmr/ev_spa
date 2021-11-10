import React from 'react';

// material-ui
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// models
import { Product } from 'models/product';

// utils
import generateNumberArray from 'utils/generateNumberArray';

type Props = {
	product: Product;
	itemQuantity: number;
	handleChangeItemQuantity: (e: any) => void;
	quantityAvailable: number;
};

const ProductCardQuantity = ({
	product,
	itemQuantity,
	handleChangeItemQuantity,
	quantityAvailable,
}: Props) => {
	return (
		<div className="product-card__quantity">
			<p>€{Math.round(product.price * 100) / 100}</p>
			<FormControl sx={{ m: 1, minWidth: 100 }}>
				<Select
					id="select-quantity"
					value={itemQuantity}
					disableUnderline
					size="small"
					onChange={(e) => handleChangeItemQuantity(e)}
					disabled={quantityAvailable === 0}
				>
					{generateNumberArray(quantityAvailable).map(
						(obj: number) => (
							<MenuItem value={obj}>{obj}</MenuItem>
						),
					)}
				</Select>
			</FormControl>
		</div>
	);
};

export default ProductCardQuantity;
