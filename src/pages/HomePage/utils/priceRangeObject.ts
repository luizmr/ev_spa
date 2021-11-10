const priceRangeObject = (priceRange: { gte: string; lte: string }) => {
	const ZERO_NUMBER = 0;
	const ZERO_STRING = '0';
	return priceRange.lte.length > 0
		? {
				gte:
					priceRange.gte.length > ZERO_NUMBER
						? priceRange.gte
						: ZERO_STRING,
				lte:
					priceRange.lte.length > ZERO_NUMBER
						? priceRange.lte
						: ZERO_STRING,
		  }
		: {
				gte:
					priceRange.gte.length > ZERO_NUMBER
						? priceRange.gte
						: ZERO_STRING,
		  };
};

export default priceRangeObject;
