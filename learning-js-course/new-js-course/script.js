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

//console.log(carInfo);

const arr1 = ["test", "test2", 1, true];
//console.log(arr1[arr1.length - 1]);
arr1[1] = "test2!!";

let a = 0 / 0;
let b = 6 / 2;
//console.log(isNaN(a));
//console.log(isNaN(b));

let c = 100 / 33;

let temp = 10;

switch (temp) {
	case -10:
	case -5:
		//console.log("cold");
		break;
	case 0:
		//console.log("freezing");
		break;
	case 5:
		//console.log("early spring");
		break;
	case 10:
		//console.log("spring");
		break;
	case 20:
		//console.log("summer");
		break;
	default:
	//console.log("unknow temperature");
}

let wha = -6;
let whb = 90;
while (wha <= 6) {
	//console.log(wha);
	wha++;
}

while (whb >= 75) {
	//console.log(whb);
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

// //console.log(numbers1Sum);

const testArr = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
let sm = 0;

for (let i = 0; i < testArr.length; i++) {
	let index = testArr[i];
	sm += index;

	// if (index > 0) console.log(index);
}

const set = new Set();

for (let i = 0; i < 4; i++) {
	let random;
	do {
		random = Math.floor(Math.random() * testArr.length);
	} while (set.has(random));

	set.add(random);
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let summ = 0;
for (let i = 0; i < arr2.length; i++) {
	let num = arr2[i];

	if (num % 2 === 0) summ += num;
}

let A = 10;
let B = A; //10 jest kopiowane do zmiennej A - mają inne adresy

let obj = { a: 10 };
let data = obj; // data i obj odwołują się do tego samego obiektu - do tego samego obiektu  w pamięci. Do data została przekazana referencja do obiektu obj
// np. let obj = {}, let obj2 = {} - są to 2 różne od siebie obiekty - zajmują inne miejsce, adres a pamięci

let ab = 8,
	bc = 10;

for (let i = 0, j = 5; i < 10; i++, j--) {
	console.log(i, j);
}

let Data = { a: 12, b: 15, c: 17 };
delete Data.b;
console.log(Data);

let result = "15" + 20; //1520

result = +"15" + 20; // 35 - automatyczna konwersja na liczbę

// operatory relacyjne

let objj = { a: 12, b: 15, c: 16 };
console.log("a" in objj); // sprawdza czy istnieje klucz
console.log("q" in objj);

let arrr = ["a", "b", "c"];
console.log(0 in arrr); // sprawdza czy istnieje index
console.log(4 in arrr);

const date = new Date(2025, 9, 12);
console.log(date instanceof Date); // Sprawdza czy Date jest konstruktorem date

console.log(typeof 20);

if ({ a: 10 } == "[object Object]") console.log("done"); // Każdy obiekt przy zamianie na string wywołuje swoją metodę .toString() co daje "[object Object]"

// falsy values
if (0) console.log("t");
if (-0) console.log("t");
if ("") console.log("t");
if (NaN) console.log("t");
if (null) console.log("t");
if (undefined) console.log("t");
if (false) console.log("t");
if (0n) console.log("t");
if (-0n) console.log("t");

// truthly values
if(' ') console.log('t');
if('.') console.log('t');
if('test') console.log('t');
if(1) console.log('t');
if(-1) console.log('t');
if(true) console.log('t');
if({}) console.log('t');
if([]) console.log('t');
if(function test(){}) console.log('t');