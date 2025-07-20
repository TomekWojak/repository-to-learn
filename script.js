const me = {
	name: "Tomek",
	lastName: "Xyz",
	age: 20,
};

for (let key in me) {
	console.log(`Klucz ${key} ma wartość ${me[key]}`);
}

const test = Object.entries(me)
console.log(test);

for(const [key, value] of test){
    console.log(key, value);
}