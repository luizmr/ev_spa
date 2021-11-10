import { CartProduct } from 'models/product';

const ReducePrice = (cart: Array<CartProduct>) => {
	const priceArray: Array<number> = [];

	cart.forEach((obj: CartProduct) => {
		if (obj.price) {
			const price = obj.price * obj.quantity;
			priceArray.push(price);
		}
	});
	const priceReduced = priceArray.reduce((acc, curr) => acc + curr, 0);

	return priceReduced;
};

export default ReducePrice;
