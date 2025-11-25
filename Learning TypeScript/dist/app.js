let age = 20; // type inference
let test; // jeśli puste - trzeba okreslić co to
// w funkcjach zawsze okreslać typy parametrów
const logAge = (age) => {
    console.log(`Cześć, mam ${age} lat`);
};
logAge(20);
logAge("dwadziescia");
export {};
