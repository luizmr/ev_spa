export interface Product {
	id: string;
	rating: number;
	image: { id: string; url: string };
	price: number;
	summary: string;
	name: string;
	quantityavailable: number;
}

export interface CartProduct {
	id: string;
	rating: number;
	image: { id: string; url: string };
	price: number;
	summary: string;
	name: string;
	quantityavailable: number;
	quantity: number;
}
