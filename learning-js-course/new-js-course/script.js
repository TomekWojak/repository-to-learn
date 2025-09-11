const arr = [50, 80, 120];
let sum = 0;

for (const el of arr) {
	sum += el;
}

const carInfo = {
	brand: "Ford",
	name: "Mustang",
	cost: "$40 000",
	maxSpeed: "300 km/h",
};

carInfo.name = "Focus";

console.log(carInfo);

const arr1 = ["test", "test2", 1, true];
console.log(arr1[arr1.length - 1]);
arr1[1] = "test2!!";

let a = 0 / 0;
let b = 6 / 2;
console.log(isNaN(a));
console.log(isNaN(b));

let c = 100 / 33;

let temp = 10;

switch (temp) {
	case -10:
	case -5:
		console.log("cold");
		break;
	case 0:
		console.log("freezing");
		break;
	case 5:
		console.log("early spring");
		break;
	case 10:
		console.log("spring");
		break;
	case 20:
		console.log("summer");
		break;
	default:
		console.log("unknow temperature");
}

let wha = -6;
let whb = 90;
while (wha <= 6) {
	console.log(wha);
	wha++;
}

while (whb >= 75) {
	console.log(whb);
	whb--;
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let numbers1I = 0;
let numbers1Sum = 0;

while (numbers1I < numbers1.length) {
	let arrEl = numbers1[numbers1I];

	if (arrEl > 5) numbers1Sum += arrEl;

	numbers1I++;
}

console.log(numbers1Sum);
