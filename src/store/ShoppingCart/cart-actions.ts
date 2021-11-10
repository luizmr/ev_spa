import { CartProduct } from '../../models/product';
import * as actionTypes from './cart-types';

export const addToCart = (item: CartProduct) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			item,
		},
	};
};

export const removeFromCart = (item: CartProduct) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: {
			item,
		},
	};
};

export const removeAllFromCart = () => {
	return {
		type: actionTypes.REMOVE_ALL,
	};
};
