const incomeSection = document.querySelector(".transactions__income-area");
const expensesSection = document.querySelector(".transactions__expenses-area");
const availableMoney = document.querySelector(".options__available-money");
const addTransactionPanel = document.querySelector(".add-transaction-panel");

const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const categorySelect = document.querySelector("#category");

const addTransactionBtn = document.querySelector(".options__add-transaction");
const deleteTransactionBtn = document.querySelector(".options__delete-all");
const saveBtn = document.querySelector(".add-transaction-panel__save");
const cancelBtn = document.querySelector(".add-transaction-panel__cancel");
const lightModeBtn = document.querySelector(".options__light");
const darkModeBtn = document.querySelector(".options__dark");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];

const showPanel = () => {
	addTransactionPanel.style.display = "flex";
};
const closePanel = () => {
	addTransactionPanel.style.display = "none";
};

const checkForm = () => {
	if (
		nameInput.value !== "" &&
		amountInput.value !== "" &&
		categorySelect.value !== "none"
	) {
	} else {
	}
};
addTransactionBtn.addEventListener("click", showPanel);
cancelBtn.addEventListener("click", closePanel);
