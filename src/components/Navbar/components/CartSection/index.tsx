import React from 'react';

// components
import CartButton from './components/CartButton';
import LanguageSelect from './components/LanguageSelect';

const CartSection = () => {
	return (
		<div className="cart-section">
			<LanguageSelect />
			<CartButton />
		</div>
	);
};

export default CartSection;
