import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addToCart } from 'store/ShoppingCart/cart-actions';

// components
import ProductCardHeader from './components/ProductCardHeader';
import ProductCardRating from './components/ProductCardRating';
import ProductCardQuantity from './components/ProductCardQuantity';
import ProductCardButton from './components/ProductCardButton';

// models
import { CartProduct, Product } from 'models/product';

type Props = {
	product: Product;
	cart: Array<CartProduct>;
	addToCart: any;
};

const ProductCard = ({ product, cart, addToCart }: Props) => {
	const [itemQuantity, setItemQuantity] = useState<number>(
		product.quantityavailable >= 1 ? 1 : 0,
	);
	const [quantityAvailable, setQuantityAvailable] = useState<number>(
		product.quantityavailable,
	);
	const [itemAdded, setItemAdded] = useState<boolean>(false);
	const [cardProduct, setCardProduct] = useState<CartProduct>({
		...product,
		quantity: 0,
	});

	const handleChangeItemQuantity = (event: any) => {
		const {
			target: { value },
		} = event;
		setItemQuantity(value);
	};

	const handleAddItem = () => {
		setItemAdded(true);
		addToCart({
			...cardProduct,
			quantity: cardProduct.quantity + itemQuantity,
		});
		setTimeout(() => {
			setItemAdded(false);
		}, 2000);
	};

	useEffect(() => {
		if (cart.length) {
			const productFound = cart.find((el) => el.id === product.id);
			if (productFound) {
				setCardProduct(productFound);
				setQuantityAvailable(
					product.quantityavailable - productFound.quantity,
				);
				setItemQuantity(
					product.quantityavailable - productFound.quantity === 0
						? 0
						: 1,
				);
			}
		}
	}, [cart]);

	return (
		<div className="product-card">
			<ProductCardHeader product={product} />
			<div className="product-card__bottom">
				<ProductCardRating product={product} />
				<ProductCardQuantity
					product={product}
					itemQuantity={itemQuantity}
					handleChangeItemQuantity={handleChangeItemQuantity}
					quantityAvailable={quantityAvailable}
				/>
				<ProductCardButton
					itemAdded={itemAdded}
					handleAddItem={handleAddItem}
					quantityAvailable={quantityAvailable}
				/>
			</div>
		</div>
	);
};

const mapStateToProps = (state: { cart: { cart: Array<CartProduct> } }) => {
	return {
		cart: state.cart.cart,
	};
};

export default connect(mapStateToProps, {
	addToCart,
})(ProductCard);
