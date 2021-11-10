const PreventInputUpDownKey = (e: any) => {
	if (
		e.keyCode === 40 ||
		e.keyCode === 38 ||
		e.key === '-' ||
		e.key === 'e' ||
		e.keyCode === 13
	) {
		e.preventDefault();
	}
};

export default PreventInputUpDownKey;
