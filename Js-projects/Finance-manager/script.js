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
	clearAreas();
};
const clearAreas = () => {
	nameInput.value = "";
	amountInput.value = "";
	categorySelect.selectedIndex = 0;
};

const checkForm = () => {
	if (
		nameInput.value !== "" &&
		amountInput.value !== "" &&
		categorySelect.value !== "none"
	) {
		createNewTransaction();
	} else {
		alert("Wypełnij wszystkie pola");
	}
};

const createNewTransaction = () => {
	const newTransaction = document.createElement("div");
	newTransaction.classList.add("transactions__transaction");
	newTransaction.setAttribute("id", ID);
	selectCategory();
	checkCategory(selectedCategory);
	newTransaction.innerHTML = `<p class="transactions__transaction-name">${categoryIcon} ${nameInput.value}</p>
    <p class="transactions__transaction-amount">${amountInput.value}zł <button
    class="transactions__transaction-delete" aria-label="Usuń transakcję z listy"><i
    class="fas fa-times"></i></button></p>`;

	amountInput.value > 0
		? incomeSection.append(newTransaction) &&
		  newTransaction.classList.add("income")
		: expensesSection.append(newTransaction) &&
		  newTransaction.classList.add("expenses");

	moneyArr.push(parseFloat(amountInput.value));

	closePanel();
	ID++;
};

const checkCategory = (transaction) => {
	switch (transaction) {
		case "[ + ] Przychód":
			categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
			break;
		case "[ - ] Zakupy":
			categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
			break;
		case "[ - ] Jedzenie":
			categoryIcon = '<i class="fas fa-hamburger"></i>';
			break;
		case "[ - ] Kino":
			categoryIcon = '<i class="fas fa-film"></i>';
			break;
	}
};

const selectCategory = () => {
	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
};

saveBtn.addEventListener("click", checkForm);
addTransactionBtn.addEventListener("click", showPanel);
cancelBtn.addEventListener("click", closePanel);
