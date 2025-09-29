document.addEventListener("DOMContentLoaded", function () {
	calculator.init();
});

const calculator = {
	buttons: undefined,
	input: undefined,

	init: function () {
		this.buttons = document.querySelectorAll(".num");
		this.input = document.querySelector(".input");

        this.buttons.forEach(button => {
            button.addEventListener("click", this.buttonClick);
        });
	},
    buttonClick: function(e){
        const value = e.target.innerHTML
        console.log(value);
    }
};
