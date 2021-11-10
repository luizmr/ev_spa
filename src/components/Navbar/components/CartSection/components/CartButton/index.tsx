import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// material-ui
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// models
import { CartProduct } from 'models/product';

// utils
import ReducePrice from 'utils/reducePrice';
import ReduceQuantity from 'utils/reduceQuantity';

type Props = {
	cart: Array<CartProduct>;
};

const CartButton = ({ cart }: Props) => {
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const [totalQuantity, setTotalQuantity] = useState<number>(0);

	useEffect(() => {
		if (cart.length) {
			const reducedPrice = ReducePrice(cart);
			const reducedQuantity = ReduceQuantity(cart);
			setTotalPrice(reducedPrice);
			setTotalQuantity(reducedQuantity);
		}
	}, [cart]);
	return (
		<div className="cart-button">
			<Button variant="contained">
				<Badge badgeContent={totalQuantity} color="primary">
					<ShoppingCartOutlinedIcon color="action" />
				</Badge>
				<p>Sub total: {totalPrice.toFixed(2)} €</p>
				<span className="cart-button__third-element"></span>
			</Button>
		</div>
	);
};

const mapStateToProps = (state: { cart: { cart: Array<CartProduct> } }) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps)(CartButton);
