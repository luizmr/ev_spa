const generateNumberArray = (length: number): Array<number> => {
	let generatedArray = [];
	if (length === 0) {
		generatedArray.push(0);
	} else {
		for (let i = 1; i <= length; i++) {
			generatedArray.push(i);
		}
	}
	return generatedArray;
};

export default generateNumberArray;
