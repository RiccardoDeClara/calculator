const checkUpdateText = (textValue, value, updateText) => {
	const operators = ["÷", "x", "+", "-"];
	let val = textValue;
	if (val.includes("Error")) {
		val = "";
	}
	const lastEl = val.length - 1;
	if (operators.includes(value) && operators.includes(val?.[lastEl])) {
		return;
	}
	if (!val || !(operators.includes(value) && val?.[lastEl] === value.trim())) {
		updateText(val + value);
	}
};

export { checkUpdateText };
