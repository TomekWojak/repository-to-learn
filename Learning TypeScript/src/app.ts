let age = 20; // type inference
let test: number; // jeśli puste - trzeba okreslić co to

// w funkcjach zawsze okreslać typy parametrów

// union type
const logAge = (age: number | string) => {
	console.log(`Cześć, mam ${age} lat`);
};

logAge(20);
logAge("dwadziescia");

const button = document.querySelector("button");

const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
	return hasDiscount ? originalPrice * 0.8 : originalPrice;
};

button?.addEventListener("click", () => {
	const originalPrice = 50;
	const hasDiscount =
		new URLSearchParams(window.location.search).get("discount") === "true";

	console.log(calculatePrice(originalPrice, hasDiscount));
});
