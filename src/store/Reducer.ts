import { combineReducers } from 'redux';
import cartReducer from './ShoppingCart/cart-reducer';

const reducer = combineReducers({
	cart: cartReducer,
});

export default reducer;
