document.addEventListener("DOMContentLoaded", function () {
	calculator.init();
});

const calculator = {
	buttons: undefined,
	input: undefined,

	init: function () {
		this.buttons = document.querySelectorAll(".num");
		this.input = document.querySelector(".display");

		this.buttons.forEach((button) => {
			button.addEventListener("click", this.buttonClick);
		});
	},
	buttonClick: function (e) {
		const value = e.target.innerHTML;

		if (value === "=") {
			calculator.evaluate();
		} else if (value === "c") {
			calculator.clear();
		} else {
			calculator.addToInput(value);
		}
	},

	addToInput: function (val) {
		this.input.value += val;
	},
	evaluate: function () {
		const result = math.evaluate(calculator.input.value);
		calculator.setInput(result);
	},
	clear: function () {
		calculator.setInput("");
	},
	setInput: function (str) {
		calculator.input.value = str;
	},
};
