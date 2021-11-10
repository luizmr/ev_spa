const PreventInputScrolling = (id: string) => {
	const input = document.getElementById(`${id}`);
	input &&
		input.addEventListener('wheel', function (event) {
			event.preventDefault();
			input.blur();
		});
};

export default PreventInputScrolling;
