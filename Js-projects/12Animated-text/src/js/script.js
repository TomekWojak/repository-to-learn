const modal = document.querySelector(".modal");
const input = document.querySelector(".modal-input");
const modalBtn = document.querySelector(".modal-btn");
const saveBtn = document.querySelector(".save-btn");
const text = document.querySelector(".text");
const errorMsg = document.querySelector(".error-msg");

let inputValue = "To jest testowa wiadomość";
let timeout;
let index = 1;
let speed = 80;

const writingAnimation = () => {
	text.innerHTML = inputValue.slice(0, index);
	index++;

	if (index > inputValue.length) return;

	timeout = setTimeout(writingAnimation, speed);
};
const showModal = () => {
	modal.classList.add("active");
};
const closeModal = () => {
	if (input.value == "") {
		errorMsg.textContent = "Wprowadź tekst";
		return;
	}
	inputValue = input.value;
	modal.classList.remove("active");
	clearStuff();
	writingAnimation();
};
const clearStuff = () => {
	index = 1;
	input.value = "";
	errorMsg.textContent = "";
	clearTimeout(timeout);
};

saveBtn.addEventListener("click", closeModal);
modalBtn.addEventListener("click", showModal);
writingAnimation();
