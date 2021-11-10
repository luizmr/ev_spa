import { CartProduct } from '../../models/product';
import * as actionTypes from './cart-types';

const INITIAL_STATE = {
	cart: [],
};

const cartReducer = (
	state = INITIAL_STATE,
	action: { type: string; payload: { item: CartProduct } },
) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART: {
			const productFound: CartProduct | undefined = state.cart.find(
				(obj: CartProduct) => obj.id === action.payload.item.id,
			);
			if (productFound) {
				const newCart = state.cart.map((obj: CartProduct) => {
					if (obj.id === productFound['id']) {
						return {
							...obj,
							quantity: action.payload.item.quantity,
						};
					}
					return obj;
				});

				return {
					...state,
					cart: newCart,
				};
			}
			return { ...state, cart: [...state.cart, action.payload.item] };
		}
		case actionTypes.REMOVE_FROM_CART: {
			const newCart = [...state.cart];

			if (action.payload.item.quantity <= 1) {
				const index = state.cart.findIndex((cartItem: CartProduct) => {
					return cartItem.id === action.payload.item.id;
				});
				if (index >= 0) {
					newCart.splice(index, 1);
				}
				return { ...state, cart: newCart };
			}

			const productFound: CartProduct | undefined = state.cart.find(
				(obj: CartProduct) => obj.id === action.payload.item.id,
			);

			const newCartRemoval = state.cart.map((obj: CartProduct) => {
				if (productFound && obj.id === productFound['id']) {
					return {
						...obj,
						quantity: action.payload.item.quantity,
					};
				}
				return obj;
			});

			return {
				...state,
				cart: newCartRemoval,
			};
		}
		case actionTypes.REMOVE_ALL: {
			return {
				...state,
				cart: [],
			};
		}
		default:
			return state;
	}
};

export default cartReducer;
