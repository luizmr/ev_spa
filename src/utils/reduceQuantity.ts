import { CartProduct } from 'models/product';

const ReduceQuantity = (cart: Array<CartProduct>) => {
	const quantityArray: Array<number> = [];

	cart.forEach((obj: CartProduct) => {
		quantityArray.push(obj.quantity);
	});
	const quantityReduced = quantityArray.reduce((acc, curr) => acc + curr, 0);

	return quantityReduced;
};

export default ReduceQuantity;
