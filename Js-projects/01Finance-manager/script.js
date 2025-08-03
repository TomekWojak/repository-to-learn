const incomesList = document.querySelector(".manager__list--incomes");
const expensesList = document.querySelector(".manager__list--expenses");
const addTransactionBtn = document.querySelector(".manager__btn--add");
const removeTransactionsBtn = document.querySelector(".manager__btn--remove");
const lightModeBtn = document.querySelector(".manager__theme-btn--light");
const darkModeBtn = document.querySelector(".manager__theme-btn--dark");
const summaryPrice = document.querySelector(".manager__summary-price");
const addTransactionPanel = document.querySelector(".add-transaction-panel");
const nameInput = document.querySelector("#name-input");
const priceInput = document.querySelector("#price-input");
const options = document.querySelector("select");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const lists = [incomesList, expensesList];
let root = document.documentElement;
let total = 0;
let isPositive;
let icon;

const setDarkMode = () => {
	root.style.setProperty("--border-color", "#fff");
	root.style.setProperty("--text-color", "#fff");
	root.style.setProperty("--main-color", "#202020");
	root.style.setProperty("--btn-txt-hover", "#202020");
	root.style.setProperty("--btn-hover", "#fff");
};
const setLightMode = () => {
	root.style.setProperty("--border-color", "#33333355");
	root.style.setProperty("--text-color", "#000");
	root.style.setProperty("--main-color", "#fff");
	root.style.setProperty("--btn-txt-hover", "#fff");
	root.style.setProperty("--btn-hover", "#242222");
};

const handlePanelVisibility = () => {
	addTransactionPanel.classList.toggle("active");
	nameInput.value = "";
	priceInput.value = "";
	options.selectedIndex = 0;
};

const checkInputs = () => {
	let value = parseFloat(priceInput.value);
	const priceRegexp = /^[1-9]\d*(\.\d+)?$/;

	if (
		nameInput.value !== "" &&
		priceInput.value !== "" &&
		options.value !== "none"
	) {
		if (value === 0) {
			return alert("Podana kwota nie może być równa 0");
		} else if (!priceRegexp.test(value)) {
			return alert("Podana kwota musi być większa od 0");
		} else if (options.value === "income") {
			total += value;
			isPositive = true;
		} else if (options.value !== "income") {
			total -= value;
			isPositive = false;
		}
		setIcon();
		createTransaction();
		handlePanelVisibility();
		summaryPrice.textContent = `${total}zł`;
	} else {
		return alert("Uzupełnij wszystkie pola!");
	}
};

const createTransaction = () => {
	const newTransaction = document.createElement("li");
	newTransaction.innerHTML = `
                                <div class="manager__li-category">
                                    ${icon}
                                    ${nameInput.value}
                                </div>
                                <div class="manager__li-price-info">
                                    <span class="manager__price">${priceInput.value}zł</span>
                                    <button class="manager__delete-transaction" aria-label="Usuń transakcję"><i
                                            class="fa-solid fa-circle-xmark"></i></button>
                                </div>
`;
	newTransaction.classList.add("manager__li");
	newTransaction.classList.add("manager__income");
	if (isPositive) {
		incomesList.append(newTransaction);
		newTransaction.classList.add("income");
	} else {
		expensesList.append(newTransaction);
		newTransaction.classList.add("expense");
	}
};

const setIcon = () => {
	switch (options.value) {
		case "income":
			icon = '<i class="fa-solid fa-money-bill-wave"></i>';
			break;
		case "shopping":
			icon = '<i class="fa-solid fa-bag-shopping"></i>';
			break;
		case "entertainment":
			icon = '<i class="fa-solid fa-film"></i>';
			break;
		case "food":
			icon = '<i class="fa-solid fa-burger"></i>';
			break;
	}
};

lists.forEach((list) =>
	list.addEventListener("click", (e) => {
		if (e.target.matches(".manager__delete-transaction")) {
			const parent = e.target.closest(".manager__li");
			const price = parseFloat(
				parent.querySelector(".manager__price").textContent
			);
			if (parent.classList.contains("income")) {
				total -= price;
			} else {
				total += price;
			}
			summaryPrice.textContent = `${total}zł`;
			parent.remove();
		}
	})
);

const clearAll = () => {
	lists.forEach((list) => (list.textContent = ""));
	summaryPrice.textContent = "0zł";
	total = 0;
};

removeTransactionsBtn.addEventListener("click", clearAll);
cancelBtn.addEventListener("click", handlePanelVisibility);
saveBtn.addEventListener("click", checkInputs);
addTransactionBtn.addEventListener("click", handlePanelVisibility);
lightModeBtn.addEventListener("click", setLightMode);
darkModeBtn.addEventListener("click", setDarkMode);
