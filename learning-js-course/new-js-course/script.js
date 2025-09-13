const testVariable = 10;

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

//console.log(numbers1Sum);

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
if (" ") console.log("t");
if (".") console.log("t");
if ("test") console.log("t");
if (1) console.log("t");
if (-1) console.log("t");
if (true) console.log("t");
if ({}) console.log("t");
if ([]) console.log("t");
if (function test() {}) console.log("t");

let numd; // zmienna ZADEKLAROWANA, NIEZDEFINIOWANA
numd = 12; //zmienna ZADEKLAROWANA, ZDEFINIOWANA

c; // błąd - c jest niezadeklarowaną zmienną

// SCOPES

let _a = 21;
const _txt = "Ania";

if (true) {
	let _a = 10;
	let _txt = "Bartek";

	// _a -> 10
	// _txt -> 'Bartek'
}

// _a -> 21
// _txt -> 'Ania'

// var u = 10;

// if (true) {
// 	var u = 20;
// 	console.log(u);

// 	var o = 100
// }
// console.log(u);
// console.log(o);

function foo(name) {
	if (name === "Kasia") {
		return;
	}

	return name;
}

function averageValue(a, b, c, d) {
	const x = (a + b + c + d) / 4;

	return x;
}

const average = averageValue(2, 4, 8, 10);
const average2 = averageValue(30, 60, 90, 120);
const average3 = averageValue(5, 10, 15, 20);

function hireNewEmployee(name, surname, email, age, proffesion) {
	if (
		name.length < 3 ||
		surname.length < 3 ||
		email.length < 10 ||
		age < 18 ||
		(proffesion.toLowerCase() !== "programmer" &&
			proffesion.toLowerCase() !== "admin" &&
			proffesion.toLowerCase() !== "manager")
	) {
		return null;
	}

	const obj = {
		company: "Test Ltd.",
		name: name,
		surname: surname,
		age: age,
		email: email,
		proffesion: proffesion,
	};

	return obj;
}

const employee1 = hireNewEmployee(
	"Jan",
	"Kowalski",
	"jan.kowalski@gmail.com",
	25,
	"programmer"
);

function createNewDevice(brand, screenSize, color) {
	if (color !== "white" && color !== "black" && color !== "silver") return null;

	const newTv = {
		brand,
		screenSize,
		color,
	};
	return newTv;
}

const firstTv = createNewDevice("Sony", 42, "white");
console.log(firstTv);

let fooo = function (a, b) {
	return a + b;
};
console.log(fooo(5, 10));

fooo = function (a, b) {
	return a - b;
};
console.log(fooo(5, 10));

const testFnMultiply = function (a, b) {
	return a * b;
};

console.log(testFnMultiply(3, 6));

function greaterThan6(arr, callback) {
	arr.forEach((el) => {
		if (el > 6) callback(el);
	});
}

function showResults(element) {
	console.log(element);
}

greaterThan6([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], showResults);

function sumAll() {
	let result = 0;
	for (let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}

	return result;
}

function foooo(num, obj) {
	num = 12;
	obj.data = "!test";

	return {
		num,
		aD,
		obj,
		dataD,
	};
}
let aD = 7;
let dataD = { data: "text" };
console.log(foooo(aD, dataD));

// num przyjmuje kopię wartości aD, przez co oryginalna zmienna aD zostaje taka sama.
// obj przyjmuje referencję do obiektu dataD, przez co jest zmieniany oryginalny obiekt!!
const ar = [1, 2, 3, 4, 5, 6, 7];

function tst(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] *= 3;
	}
}
tst(ar);

function nestFn(arr) {
	function nestedFn(data) {
		console.log(data);
	}

	for (let i = 0; i < arr.length; i++) {
		nestedFn(arr[i]);
	}
}
nestFn(ar); //zagnieżdzanie funkcji - lepsza czytelność - wszystko w jednym miejscu

function op(...params) {
	params.forEach((param) => console.log(param));
}

op(1, 2, 3, 4, 5);

function po(a, b, c, d) {
	console.log(a, b, c, d);
}

const raa = [1, 2, 3, 4];

po(...raa);

const dataa = {
	name: "Bartek",
	city: "Gdańsk",
};

const createComp = (cpu, gpu, ram, dysk) => {
	return {
		cpu,
		gpu,
		ram,
		dysk,
	};
};

const createLaptop = (obj) => {
	return {
		...obj,
		type: "laptop",
		weight: 2.5,
	};
};

console.log(createLaptop(createComp("amd", "nvidia", "32gb", "1tb")));

const createUser = (name, contact) => {
	const user = {
		name,
		...(typeof contact === "string"
			? { email: contact }
			: typeof contact === "number"
			? { telephone: contact }
			: {}),
	};

	return user;
};

const case1 = createUser("Ola", "ola@example.com");
const case2 = createUser("Kasia", 989321920);

// console.log(case1);
// console.log(case2);

let phone = {
	brand: "Xiaomi",
	model: "Redmi note",
	manufactureDate: 2025,
	connect(contact) {
		console.log(`Połączenie z ${contact}`);
	},
	getInfo() {
		console.log(this.brand, this.model, this.manufactureDate);
	},
};

const tvFactory = {
	name: "Factory",
	city: "Poznań",
	employees: [],
	brand: "Sharp",
	addEmployee(name, surname) {
		const obj = {
			name,
			surname,
			email: `${name.toLowerCase()}.${surname.toLowerCase()}@example.com`,
		};
		this.employees.push(obj);
	},
	showEmployees() {
		console.log(`${this.name} employees:`);

		for (let i = 0; i < this.employees.length; i++) {
			console.log(this.employees[i]);
		}
	},
	makeTv(model, color) {
		return {
			brand: this.brand,
			model,
			color,
		};
	},
};

tvFactory.addEmployee("Bartek", "Nowak");
tvFactory.addEmployee("Adam", "Kowalski");

tvFactory.showEmployees();

const tv1 = tvFactory.makeTv("Lg", "silver");
const tv2 = tvFactory.makeTv("Apple", "black");
console.log(tv1, tv2);

tvFactory.name = "Factory Ltd."; // oba poprawne
tvFactory["name"] = "TV Factory Ltd."; // oba poprawne

const factoryName = "name";

tvFactory[factoryName] = "test";

const schoolObj = {
	name: "SchoolName",
	city: "Warszawa",
	students: [],

	addStudent(name, surname) {
		const studentInfo = {
			name,
			surname,
		};
		this.students.push(studentInfo);
	},
	showStudents() {
		if (this.students.length === 0)
			return console.log("Szkoła nie ma studentów!");

		this.students.forEach((student) =>
			console.log(student.name, student.surname)
		);
	},
	showStudentsByName(studentName) {
		if (this.students.length === 0)
			return console.log("Szkoła nie ma studentów!");

		this.students.forEach(({ name }) => {
			if (name == studentName) {
				console.log(name);
			}
		});
	},
	getNumStudents() {
		return this.students.length;
	},
	resetStudents() {
		this.students = [];
	},
};

schoolObj.addStudent("Tomek", "Kowalski");
schoolObj.addStudent("Bartek", "Nowak");
schoolObj.addStudent("Ania", "Wierzba");
schoolObj.addStudent("Ania", "Wierzba");
schoolObj.showStudents();
schoolObj.showStudentsByName("Ania");
console.log(schoolObj.getNumStudents());
schoolObj.resetStudents();
console.log(schoolObj.students);

const obbj = { a: 1, b: 2 };

const getObj = (data) => ({ ...data, info: "new items" }); // jeśli nie chcemy tworzyć ciała funkcji

// IIFE

(function (data) {
	console.log(data);
	var be = 10;
	console.log(`b: ${be}`);
})("test");

function testsss() {}
console.log(window.testsss);
