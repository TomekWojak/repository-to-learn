let age = 20; // type inference
let test: number; // jeśli puste - trzeba okreslić co to

// w funkcjach zawsze okreslać typy parametrów

const logAge = (age: number | string) => {
	console.log(`Cześć, mam ${age} lat`);
};

logAge(20);
logAge("dwadziescia");
