let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cubes = numbers.map((el) => el * el * el);

const test = [];

for (number of numbers) {
	test.push(number * number * number);
}

let storkList = [
	{ name: "ser", price: 3 },
	{ name: "chleb", price: 3 },
	{ name: "masło", price: 2 },
];

const test2 = storkList.map(el => el.price)
console.log(test2);
