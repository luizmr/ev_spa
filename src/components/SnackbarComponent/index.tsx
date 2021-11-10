import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// material-ui
import Snackbar from '@mui/material/Snackbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// models
import { CartProduct } from 'models/product';

type Props = {
	cart: Array<CartProduct>;
};

const SnackbarComponent = ({ cart }: Props) => {
	const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
	const [counter, setCounter] = useState<number>(0);

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	useEffect(() => {
		let timer: ReturnType<typeof setTimeout>;
		if (cart.length) {
			setOpenSnackbar(true);
			timer = setTimeout(() => {
				handleCloseSnackbar();
			}, 2000);
		}
		return () => clearTimeout(timer);
	}, [cart]);

	return (
		<Snackbar
			open={openSnackbar}
			autoHideDuration={6000}
			onClose={handleCloseSnackbar}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		>
			<div className="snackbar-successful">
				<CheckCircleIcon />
				<p>Added to the cart successfully</p>
			</div>
		</Snackbar>
	);
};

const mapStateToProps = (state: { cart: { cart: Array<CartProduct> } }) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps)(SnackbarComponent);
