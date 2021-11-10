import React from 'react';

// material-ui
import Button from '@mui/material/Button';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

type Props = {
	itemAdded: boolean;
	handleAddItem: () => void;
	quantityAvailable: number;
};

const ProductCardButton = ({
	itemAdded,
	handleAddItem,
	quantityAvailable,
}: Props) => {
	const CLASS_CONDITION =
		quantityAvailable === 0
			? 'filter-button disabled-button'
			: itemAdded
			? 'added-button'
			: 'filter-button';
	return (
		<Button
			variant="outlined"
			className={CLASS_CONDITION}
			onClick={() => handleAddItem()}
			disabled={quantityAvailable === 0}
		>
			{itemAdded && <CheckOutlinedIcon />}
			<p>{itemAdded ? 'Added' : 'Add to Cart'}</p>
		</Button>
	);
};

export default ProductCardButton;
