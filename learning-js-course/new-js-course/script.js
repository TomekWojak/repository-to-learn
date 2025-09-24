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

//(carInfo);

const arr1 = ["test", "test2", 1, true];
//(arr1[arr1.length - 1]);
arr1[1] = "test2!!";

let a = 0 / 0;
let b = 6 / 2;
//(isNaN(a));
//(isNaN(b));

let c = 100 / 33;

let temp = 10;

switch (temp) {
	case -10:
	case -5:
		//("cold");
		break;
	case 0:
		//("freezing");
		break;
	case 5:
		//("early spring");
		break;
	case 10:
		//("spring");
		break;
	case 20:
		//("summer");
		break;
	default:
	//("unknow temperature");
}

let wha = -6;
let whb = 90;
while (wha <= 6) {
	//(wha);
	wha++;
}

while (whb >= 75) {
	//(whb);
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

//(numbers1Sum);

const testArr = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
let sm = 0;

for (let i = 0; i < testArr.length; i++) {
	let index = testArr[i];
	sm += index;

	// if (index > 0) (index);
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
	i, j;
}

let objecT = {};
let Tcejbo = {};

console.log(objecT === Tcejbo);

let Data = { a: 12, b: 15, c: 17 };
delete Data.b;
Data;

let result = "15" + 20; //1520

result = +"15" + 20; // 35 - automatyczna konwersja na liczbę

// operatory relacyjne

let objj = { a: 12, b: 15, c: 16 };
"a" in objj; // sprawdza czy istnieje klucz
"q" in objj;

let arrr = ["a", "b", "c"];
0 in arrr; // sprawdza czy istnieje index
4 in arrr;

const date = new Date(2025, 9, 12);
date instanceof Date; // Sprawdza czy Date jest konstruktorem date

typeof 20;

if ({ a: 10 } == "[object Object]") "done"; // Każdy obiekt przy zamianie na string wywołuje swoją metodę .toString() co daje "[object Object]"

// falsy values
if (0) "t";
if (-0) "t";
if ("") "t";
if (NaN) "t";
if (null) "t";
if (undefined) "t";
if (false) "t";
if (0n) "t";
if (-0n) "t";

// truthly values
if (" ") "t";
if (".") "t";
if ("test") "t";
if (1) "t";
if (-1) "t";
if (true) "t";
if ({}) "t";
if ([]) "t";
if (function test() {}) "t";

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
// 	(u);

// 	var o = 100
// }
// (u);
// (o);

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
firstTv;

let fooo = function (a, b) {
	return a + b;
};
fooo(5, 10);

fooo = function (a, b) {
	return a - b;
};
fooo(5, 10);

const testFnMultiply = function (a, b) {
	return a * b;
};

testFnMultiply(3, 6);

function greaterThan6(arr, callback) {
	arr.forEach((el) => {
		if (el > 6) callback(el);
	});
}

function showResults(element) {
	element;
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
foooo(aD, dataD);

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
		data;
	}

	for (let i = 0; i < arr.length; i++) {
		nestedFn(arr[i]);
	}
}
nestFn(ar); //zagnieżdzanie funkcji - lepsza czytelność - wszystko w jednym miejscu

function op(...params) {
	params.forEach((param) => param);
}

op(1, 2, 3, 4, 5);

function po(a, b, c, d) {
	a, b, c, d;
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

createLaptop(createComp("amd", "nvidia", "32gb", "1tb"));

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

// (case1);
// (case2);

let phone = {
	brand: "Xiaomi",
	model: "Redmi note",
	manufactureDate: 2025,
	connect(contact) {
		`Połączenie z ${contact}`;
	},
	getInfo() {
		this.brand, this.model, this.manufactureDate;
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
		`${this.name} employees:`;

		for (let i = 0; i < this.employees.length; i++) {
			this.employees[i];
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
tv1, tv2;

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
		if (this.students.length === 0) return "Szkoła nie ma studentów!";

		this.students.forEach((student) => (student.name, student.surname));
	},
	showStudentsByName(studentName) {
		if (this.students.length === 0) return "Szkoła nie ma studentów!";

		this.students.forEach(({ name }) => {
			if (name == studentName) {
				name;
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
schoolObj.getNumStudents();
schoolObj.resetStudents();
schoolObj.students;

const obbj = { a: 1, b: 2 };

const getObj = (data) => ({ ...data, info: "new items" }); // jeśli nie chcemy tworzyć ciała funkcji

// IIFE

(function (data) {
	data;
	var be = 10;
	`b: ${be}`;
})("test");

function Car(brand, name, color) {
	this.brand = brand;
	this.name = name;
	this.color = color;
	this.year = 2025;

	this.printData = function () {
		this.brand, this.name, this.color, this.year;
	};
}

const newCar = new Car("Ford", "Mustang", "green");

class Magazine {
	constructor(title, adverts) {
		this.title = title;
		this.adverts = adverts;
	}

	addAdvert(name, website) {
		const obj = {
			name,
			website,
		};
		this.adverts.push(obj);
	}
	printAdverts() {
		for (let i = 0; i < this.adverts.length; i++) {
			this.adverts[i];
		}
	}
}

const testObj = new Magazine("Testowy magazyn", []);
testObj;
testObj.addAdvert("Nowa praca w pobliżu", "getnewjob.com");
testObj.printAdverts();

function MakeCar(brand, model) {
	this.brand = brand;
	this.model = model;

	this.printInfo = function () {
		this.brand;
	};
}

// let car1 = MakeCar("Ford", "Mustang"); // Bład, musi być słówko kluczowe new, bo inaczej brand i model zostaną dodane do obiektu window

window.aka = "test";
console.log(window.aka);
console.log(window);
function Vehicle(brand, model) {
	if (this instanceof Vehicle == false) {
		return new Vehicle(brand, model);
	}

	this.brand = brand;
	this.model = model;
}
const test5 = new Vehicle("Ford", "Mustang");

class Con {
	constructor(name) {
		this.name = name;
	}

	normal = function () {
		console.log(this.name);
	};
	arrow = () => {
		console.log(this.name);
	};
}

const noc = new Con("Car");
noc.arrow();

const user = {
	_name: null,

	set name(newValue) {
		if (newValue.length > 2) {
			this._name = newValue;
		} else {
			console.log("Name too short");
		}
	},
	get name() {
		return this._name;
	},
};

user.name = "Ania";

const truck = {
	_brand: null,
	_model: null,
	_topSpeed: 0,

	set brand(truckBrand) {
		this._brand = truckBrand;
	},
	get brand() {
		return this._brand;
	},
	set model(truckModel) {
		this._model = truckModel;
	},
	get model() {
		return this._model;
	},
	set topSpeed(truckSpeed) {
		if (truckSpeed > 0) {
			this._topSpeed = truckSpeed;
		} else {
			console.log("Speed too low!");
		}
	},
	get topSpeed() {
		return this._topSpeed;
	},
};

truck.brand = "Test truck";
truck.model = "t300";
truck.topSpeed = 150;

class carFactory {
	#make = null;
	#model = null;
	#rentalPrice = null;

	constructor(make, model, rentalPrice) {
		this.make = make;
		this.model = model;
		this.rentalPrice = rentalPrice;
	}

	set make(makeInfo) {
		this.#make = makeInfo;
	}
	get make() {
		return this.#make;
	}
	set model(modelInfo) {
		this.#model = modelInfo;
	}
	get model() {
		return this.#model;
	}
	set rentalPrice(moneyInfo) {
		if (moneyInfo > 0) {
			this.#rentalPrice = moneyInfo;
		} else {
			console.log("Price is a wrong number!");
		}
	}
	get rentalPrice() {
		return this.#rentalPrice;
	}

	getCarInfo() {
		return `Car: ${this.#make} ${this.#model}, rental price: ${
			this.#rentalPrice
		} / day`;
	}
}

const carOne = new carFactory("Toyota", "Corrola", 150);
console.log(carOne);
// const carTwo = new carFactory();

// carOne.make = "Toyota";
// carOne.model = "Corolla";
// carOne.rentalPrice = 100;
// console.log(carOne.getCarInfo());

// function oof() {
// 	data3 = 99;
// }
// oof();
// console.log(data3); // bez deklaracji let lub const - wrzucamy zmienną do window

let yy = 5;

// if (true) {
// 	console.log(yy); // Temporal dead zone
// 	let yy = 5;
// }

const txxt = "TEST";

// const sttr = new String(txxt);
// console.log(sttr.toLowerCase());

const sttr = txxt.toLowerCase(); // Js automatycznie konwertuje prymityw na instancję obiektu String (opakowywuje string w obiekt), po czym używa na niej metodę,  następnie usuwa obiekt. - nie trzeba już używać new String, Number, Boolean -  może to powodować błędy np. w porównianiu szczegółowym ===
const rtts = new String("test");
// console.log(rtts);

let stttr = "Hello World!";
stttr[0] = "R"; // Nie zadziała - string jest niemutowalny!
// console.log(stttr[0]);

const rar = ["H", "E", "L", "L", "O"];
rar[0] = "R"; // Tablica jest mutowalna - zadziała
// console.log(rar);

const k = Math.round(12.56);
const l = Math.round(12.5);
const m = Math.round(12.49);
const n = Math.ceil(15.3);
const o = Math.floor(19.99);
const p = Math.sqrt(25);
const r = Math.trunc(15.323);

const stringEl = "Kasia ma kota, Kasia ma psa";
console.log(stringEl.indexOf("Kasia"));
console.log(stringEl.indexOf("Kasia", 5));
console.log(stringEl.lastIndexOf("Kasia"));

const tab = new Array(8);
tab.fill("test");

const tabArr = [
	"Ania",
	"Kasia",
	"Bartek",
	"Grzegorz",
	"Adam",
	"Zbigniew",
	"Daniel",
];
console.log(tabArr.sort());

const nums = [1, 5, 30, 100, 50, 39, 23];

const sortedNumbers = nums.sort((a, b) => a - b);
console.log(sortedNumbers);

const arrTest = ["a", "b", "c", "d", "e"];
let tes = arrTest.splice(0, 2, "test", "test2");
arrTest.splice(1, 0, "x", "y", "z");
console.log(arrTest);

let uArray = ["Ania", "Ola", "Grzegorz", "Sylwia", " Bartek"];
let newUArray = uArray.map((el) => el + "!");

newUArray = [1, 2, 3, 4, 5, 6, 7, 8].map(Math.sqrt);
console.log(newUArray); // możemy nawet wykonać callback Math w map.

let filtered = newUArray.filter(function (value) {
	return value > 2;
});
console.log(filtered);

let reduced = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((acc, curr) => {
	return acc + curr;
	// acc początkowo -> 0, curr początkowo -> 1
	// 0 + 1 = 1
	// 1 trafia do acc, acc -> 1, curr -> 2
	// 1 + 2 = 3
	// itd.
});

const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr6.every((value) => value > 0)); // Sprawdzamy, czy kazdy element w tablicy spełnia podany warunek

const boj = { a: 3, b: 10, c: "text", d: [1, 2, 3], e: { text: true } };
const boj2 = { test: 30 };

// Object.assign({}, boj2, boj);
Object.assign(boj2, boj);
console.log(boj2);
console.log(boj);
// console.log(boj.d === boj2.d);
console.log(boj.a === boj2.a);

const arr7 = [
	[1, 2],
	[3, 4],
];
const arr8 = [...arr7];
console.log(arr7, arr8);
console.log(arr7[0] === arr8[0]); // true (ta sama tablica!)
// Podsumowywujac,  Object.assign i spread robi płytką kopię - prymitywy -> kopiowane są ich wartości, objekty i tablice -> przekazywane są ich referencje

const boj3 = { a: 50, b: "text", c: false };
const ObjEntries = Object.entries(boj3);

for (const [key, value] of ObjEntries) {
	console.log(key, value);
}

const objectToStringify = {
	str: "hello",
	a: 50,
	data: {
		b: 10,
		arr: [1, 2, 3, 4],
	},
	date: new Date(),
};

const strData = JSON.stringify(objectToStringify);
console.log(strData);
const strGetData = JSON.parse(strData);
console.log(strGetData);
strGetData.date = new Date(strGetData.date);
console.log(strGetData);

// JSON STRINGIFY => JSON PARSE tworzą deep copy. Oznacza to że np. tablica w obiekcie przed stringify i tablica w obiekcie po parse to dwie osobne tablice.

const student1 = {
	name: "Asia",
	showInfo(surname, city) {
		console.log(`${this.name} ${surname} mieszka w ${city}`);
	},
};

student1.showInfo("Kowalska", "Poznaniu");

const student2 = {
	name: "Bartek",
};

student1.showInfo.call(student2, "Nowak", "Gdańsku"); // 'Pożyczyliśmy' metodę z student1
student1.showInfo.apply(student2, ["Kowal", "Gdynii"]); // Podobne do call z tą różnicą, że argumenty podajemy w tablicy

let studentInfo = student1.showInfo.bind(student2, "Bartolini", "Rogóżnicy");
studentInfo(); // Tworzy się funkcja przypisana do konkretnego obiektu - tutaj do student2. Funkcję możemy wywoływać kiedy i gdzie chcemy

let ddd = 90;

function bar() {
	let e = 10;

	function test() {
		let num = 45;
		// console.log(ddd, e, num);
	}

	return test;
}
const testFn = bar();
testFn();

function counter() {
	let count = 0;

	return function () {
		count++;
		console.log(count);
	};
}

const ct = counter();
const cb = counter();
ct();
ct();
ct();
ct();
cb();
// Mamy dostęp do zmiennej count, pomimo iż funkcja counter() została dawno zakończona. Wynika to z tego że funkcje pamiętają swoje środowisko. Gdy wywołujemy ct() - czyli tak naprawdę zwracaną w counter() funkcję ona nadal ma dostęp do swojego środowiska, czyli bloku funkcji counter

function test(x) {
	return function (y) {
		return x * y;
	};
}

// Klucz: JS przechowuje referencję do środowiska, a nie kopię wartości w momencie tworzenia. Dlatego zmienne można modyfikować.

const multiplyArguments = test(15);
console.log(multiplyArguments(2));

function prvData() {
	let privData = 999;

	function showPrivData() {
		console.log(privData);
	}
	function setData(value) {
		privData = value;
	}

	return {
		showPrivData,
		setData,
	};
}

const prvDataObj = prvData();

prvDataObj.setData(45);
prvDataObj.showPrivData();

// practicing closures
const addBtn = document.querySelectorAll(".add");
const removeBtn = document.querySelectorAll(".remove");
function changeValue() {
	let amount = 0;

	function increaseValue() {
		amount++;
		return amount;
	}
	function decreaseValue() {
		amount--;

		return amount;
	}

	return {
		increaseValue,
		decreaseValue,
	};
}
document.querySelectorAll(".card").forEach((card) => {
	const changingValue = changeValue();

	const addBtn = card.querySelector(".add");
	const removeBtn = card.querySelector(".remove");
	const value = card.querySelector(".amount");

	addBtn.addEventListener("click", () => {
		value.innerText = changingValue.increaseValue();
	});

	removeBtn.addEventListener("click", () => {
		value.innerText = changingValue.decreaseValue();
	});
});

// function elementsFactory(element) {
// 	return () => {
// 		return document.createElement(element);
// 	};
// }

// const createDiv = elementsFactory("div");
// createDiv();
// createDiv();
// createDiv();

// const createParagraph = elementsFactory("p");
// createParagraph();
// createParagraph();
// createParagraph();

// function test(element) {
// 	return document.createElement(element);
// }

const stwURL = "https://swapi.dev/api/";

const showStwInfo = async (ext) => {
	try {
		const response = await fetch(stwURL + ext);
		const data = await response.json();
		// console.log(data);
	} catch (err) {
		console.log(err);
	}
};
showStwInfo("people/1/");

// Asynchroniczność

function first() {
	console.log("first");
}
function second() {
	first();
}
function third() {
	second();
}
third();

// Pierwsza wrzucona na stos funkcja: third
// Druga wrzucona na stos funkcja: second
// Trzecia wrzucona na stos funkcja: first
// first jest ostatnią funkcją wrzuconą na stos, a więc będzie ona pierwszą funkcją usuniętą ze stosu, potem second i na końcu third. => stos jest pusty, wykonuje się WEB API funkcji asynchronicznych. => Callback który czekał zostaje przekazany do kolejki zadań - jest gotowy, aby był wykonany.

const objectTest = {
	data: "Hello",
	testFn: function () {
		setTimeout(() => {
			console.log(this);
		}, 100);
	},
};
const bat = [3, 2, 1];
function oof(a, b, c) {
	console.log(a, b, c);
}
oof(...bat);

const nm = "Bartek";
const chars = [...nm];
// console.log(chars);

// objectTest.testFn()

const tasks = [
	{ name: "task1", completed: true },
	{ name: "task2", completed: false },
	{ name: "task3", completed: true },
	{ name: "task4", completed: false },
];

// tasks.push({ name: "task5", completed: true });  // git ale zamiast tego można zrobić

const newTasksTlist = [...tasks, { name: "task5", completed: true }];
console.log(newTasksTlist);

const [num, name, ...params] = [1, "test", 2, true, "text"];

const [as, , cs] = [1, 2, 3];

const getBbbjj = () => {
	const city = "Kraków";
	const street = "Piłsudzkiego";

	return {
		city,
		street,
	};
};

const { city, street } = getBbbjj();

function prntUser({ city, street }) {
	console.log(street, city);
}
prntUser(getBbbjj());

const hugeObj = {
	name: "test",
	id: 5,
	employment: {
		company: "example.com",
		adress: {
			country: "Poland",
		},
	},
};

// const {
// 	id,
// 	employment: { company },
// 	employment: { adress: country },
// } = hugeObj;

const {
	employment: {
		adress: { street: companyStreet = "Test" },
	},
} = hugeObj;

const tab6 = [1, 2, 3, 4, 5, 6, 7, 100];
for (const el of tab6) {
	// console.log(el);
}

const sttrr = "text";
for (const char of sttrr) {
	console.log(char);
}

const map1 = new Map();
const car = { car: "Mercedes" };
map1.set("test", { name: "Ania", age: 20 });
map1.set(car, { topSpeed: 250 });

// console.log(map1.get('test'));
console.log(map1);

for (const entry of map1) {
	// console.log(entry); // entry to tablica z parą klucz-wartość (tak jak np. po użyciu Object.entries())
}

const nSet = new Set([1, 2, 3, 4, 5, 6, 3, 1, 1, 1, 3, 7]);
// Set zawiera unikalne, niepowtarzalne wartości
for (const el of nSet) {
	// console.log(el);
}

const cards = document.querySelectorAll(".card");

for (const card of cards) {
	// console.log(card);
}

const arrOfNums = [1, 5, 10, 25, 34, 100];
const txt = "text";
obj = {
	a: 10,
	text: "Przykładowy tekst",
	c: true,
};
for (const num of arrOfNums) {
	// console.log(num);
}
for (const num in arrOfNums) {
	// console.log(num);  // indeksy
}

for (const char of txt) {
	// console.log(char);
}
for (const char in txt) {
	console.log(char); // również indeksy
}

// for (const el of obj) {
// 	// console.log(el); Obj is not iterable
// }
for (const el in obj) {
	// console.log(el); // klucze
}

// console.log(obj.propertyIsEnumerable("a"));

Object.defineProperty(obj, "test", {
	value: 15,
	configurable: false,
	enumerable: false,
	writable: false,
});
// delete obj.test
// console.log(obj.propertyIsEnumerable('test'));
// console.log(obj);
// for (const el in obj) {
// 	console.log(el); // klucze
// }

const map2 = new Map();
map2.set("a", 1);
map2.set(10, { test: "text" });
// console.log(map2.get("a"));
// console.log(map2.size);
console.log(map2);
const iterator = map2.entries();

let results = iterator.next();
console.log(results);
while (!results.done) {
	console.log(results.value);
	results = iterator.next();
}

for (const [key, value] of map2) {
	// console.log(key, value);
}

map2.forEach((value, key) => {
	// console.log(value, key);
});
// W przypadku map foreach przyjmuje kolejno argumenty: wartość, klucz, mapa

const map3 = new Map([
	["key1", 8],
	["key2", 100],
]);
// map3.forEach((value, key) => {
// 	console.log(key, value);
// });
// for (const [key, value] of map3) {
// 	console.log(key, value);
// }

const set1 = new Set();

set1.add(5);
set1.add(NaN);
set1.add({ b: 50 });
set1.add("string");
set1.add(5);
set1.add(5);
// set1.clear() // Kasuje wszystkie elementy, tak samo w Map

let arr3 = Array.from(set1);
console.log(arr3);

class Carr {
	constructor(name, brand) {
		this.name = name;
		this.brand = brand;
	}

	printCar() {
		console.log(this.name, this.brand);
	}
}
const caar = new Carr("Ford", "Mustang");
// caar.printCar()
// klasy działają zawsze w strict mode

let Animal = class {
	constructor(name) {
		this.name = name;
		this._age = 1;
	}
	getName = () => {
		console.log(this.name);
	};
	set age(animalAge) {
		if (animalAge > 0) {
			this._age = animalAge;
		} else {
			console.log("Mniejsze od 0");
		}
	}
	get age() {
		return this._age;
	}
	static getNewAnimal() {
		return new Animal("Default animal"); // Można wywołać na klasie, bez słówka 'new', nie zadziała na instancji!
	}
};
const animal1 = new Animal("Elephant");
animal1.getName();
animal1.age = 12;
const animal2 = Animal.getNewAnimal();
console.log(animal2);
animal2.getName();
console.dir(Animal);
// setter będzie wywalał błąd jeśli będzie miał tą samą nazwę co this.nazwa
// bo będziemy wtedy ciągle próbowali wywołać ten setter

// let _c = 10;
// console.log(_c++);
// console.log(_c);
// console.log(++_c);
// console.log(_c);

console.log("------------");
console.log("------------");

// KOERCJE - ĆWICZENIA

console.log(1 == "1"); // string jest zamieniany na number => 1 == 1
console.log("test" == 2); // string jest zamieniany na number => NaN == 2
console.log(true == 5); // boolean jest zamieniany na number => true = 1, 1 == 5
console.log("abc" == NaN); // string jest zamieniany na number => NaN, NaN == NaN // false
console.log([] == []); // false
console.log({} == {}); // false
console.log({ a: 10 } == "[object Object]"); // true - obiekt po koercji na string wygląda tak: [object Object]

console.log("5" == 5); // true
console.log("0" == false); // true
console.log(" " == 0); // true - w takim zestawieniu, js traktuje string jako pusty
console.log(true == 1); // true
console.log(false == 1); // false
console.log(true == 2); // false
console.log([1] == 1); // true
console.log([] == ""); // true
console.log([] == 0); // true
console.log(null == undefined); // true
console.log(null == 0); // false
console.log(undefined == 0); // false

console.log(false == "0"); // true, false: 0, "0": 0
console.log(false == []); // true, false: 0, []: "" => 0
console.log("0" == []); // false, []: ""
console.log([0] == false); // true, [0]: "0" => 0, false: 0
console.log([0] == "0"); // true, [0]: "0"
console.log([0] == 0); // true, [0]: "0" => 0
console.log([null] == 0); // true, [null]: "" => 0
console.log([undefined] == 0); // true, [undefined]: "" => 0
console.log(null == false); // false
console.log(undefined == false); // false

console.log([] == 0); // true, []: "" => 0
console.log([1, 2] == "1,2"); // true, [1,2].toString() => '1,2'
console.log([null] == 0); // true, [null].toString() => "" => 0
console.log([undefined] == false); // true, [undefined].toString() => "" => 0, false: 0
console.log([NaN] == "NaN"); // true, [NaN].toString() => 'NaN', 'NaN' nie jest równe niczemu, nawet sobie, ale tu mamy porównanie wartości w stringu.
console.log([0] == false); // true, [0].toString() => "0" => 0, false: 0
console.log([1] == true); // true, [1].toString() => "1" => 1, true: 1
console.log([1] == "1"); // true, [1].toString() => "1"
console.log(null == undefined); // true
console.log("" == 0); // true, "" => 0
console.log(2 * undefined);

// Operatory matematyczne

console.log(1 + []); // "1", number + "" = string
console.log(1 + [1]); // "11" number + "" = string
console.log([1, 2] - 1); // NaN, '1,2' - 1 = NaN, gdyby zamiast "," była "." => 1.2 - 1 = 0.2
console.log([] - 1); // -1, "" => 0
console.log([null] + 1); // "1", [null] => "", number + "" = string
console.log([undefined] + 1); // "1", [undefined] => "", number + "" = string

// EXTENDS I SUPER
class OtherAnimal {
	constructor(name) {
		this.name = name;

		if (Animal.count === undefined) Animal.count = 0; // Taki zapis pozwala nam kontrolować ilość obiektów utworzonych na podstawie danej klasy.
		this.id = Animal.count;
		Animal.count++;
		this._type = "animal";
	}
	set type(animalType) {
		if (typeof animalType === "string") {
			this._type = animalType;
		}
	}
	get type() {
		return this._type;
	}
	printName() {
		console.log(`Animal: ${this.name}`);
	}
}

class Human extends OtherAnimal {
	constructor(name) {
		super(name);
		this._age = 0;
	}
	set age(humanAge) {
		if (typeof humanAge === "number") this._age = humanAge;
	}
	get age() {
		return this._age;
	}
	printName() {
		// super.printName()
		console.log(`Human: ${this.name}`);
	}
}

const human1 = new Human("Bartek");
human1.age = 10;
human1.printName(); // Domyślnie bierze sobie z klasy, na podstawie której został utworzony, ale możemy tą metodę 'przysłonić', nadpisać

function dataAnalysis(data) {
	console.log(data);
}
function error(err) {
	console.log(err);
}

// fetch("https://api.chucknorris.io/jokes/random")
// 	.then((res) => res.json())
// 	.then((data) => dataAnalysis(data))
// 	.catch((err) => console.log(err));

// async function getData() {
// 	try {
// 		const response = await fetch("https://api.chucknorris.io/jokes/random");
// 		const data = await response.json();
// 		console.log(data);
// 	} catch (err) {
// 		console.log(err);
// 	}
// }
// getData();

let symbol1 = Symbol("Symbol1");
let symbol2 = Symbol("Symbol1");
// Każde wywołanie Symbol() tworzy unikatową wartość

// console.log(symbol1 === symbol2); // false
// console.log(symbol1 == symbol2); // false

obj = {
	a: 10,
};
obj[symbol1] = 100;
// console.log(obj[symbol1]);

for (const el in obj) {
	console.log(el); // nie dostaniemy symbolu ponieważ nie jest on iterowalny
}

console.log(Object.getOwnPropertySymbols(obj));

// stara metoda na domyślny parametr funkcji

function test1(x) {
	// if (typeof x === "undefined") x = 20;
	console.log(x);
}

// test1()
// test1(1)

function test2(a, b = 44, c = { test: "text" }) {
	console.log(a, b, c);
}
test2(6);

function test3([a = 2, b = 5] = []) {
	console.log(a, b);
}
// Ustawiamy domyślne wartości dla przypadku kiedy jako argument podamy pustą tablicę i co ciekawe - jeśli wgl nic nie podamy, to trzeba ustawić tablicę jako domyślny parametr
test3([10, 20]);
test3([]);

function test4({ a = 1, b = 2 } = {}) {
	console.log(a, b);
}
test4({ a: 10 });

test4();

const tx = 10;
const xt = { a: "red" };
function tsts(x) {
	x = 5;
	console.log(x);
}
function stst(obj) {
	obj = null;
	console.log(obj);
}

tsts(tx);
stst(xt);
console.log(xt);
console.log(tx);

obj = {
	city: "Kraków",
};

function divide(strings, ...values) {
	console.log(strings);
	console.log(values);
}

const txtx = `Hello from ${obj.city}`;
console.log(txtx);
const txtx2 = divide`Hello from ${obj.city}`;
// taki zapis funkcji rozbija template na stringi i wartości zapisane w ${}

const arr5 = Array.of(5, 3, 2, 1, "test", { a: 10 }, 44);
const arr9 = Array.from([1, 2, 3, 4], (a) => a * 2); // Mapujemy bez użycia metody .map()
const arr10 = Array.from(
	[1, 2, 3, 4],
	function (a) {
		return a * this.value;
	},
	{ value: 4 }
);
console.log(arr10);
const arr11 = [1, 2, 3, 4, 5];
// console.log(arr.fill(100)); // fill zamienia wszystkie elementy na podany w nawiasie, lub może też uzupełnić tablicę [empty, empty]
// console.log(arr.fill(100, 2)); // wypełnia ale od indeksu 2
// console.log(arr.fill(100, 1, 3)); // od indeksu 1 do 3 nie włącznie

// console.log(arr11.find(el => el > 4)); // Pierwszy element spełniający warunek
// console.log(arr11.findIndex(el => el > 4)); // Index pierwszego elementu który spełnia warunek

const arr12 = [4, 100, 20, 300, 232, 10];
console.log(arr12.copyWithin(1, 3));
// Skopiuj elementy od indeksu 3 do końca i wklej je w miejscu indeksu 1

const testArray = [180, "text", { a: 10 }, 30];
// for (const el of testArray.values()) {
// 	console.log(el);
// } // wartości
// for (const el of testArray.keys()) {
// 	console.log(el);
// } // indeksy
// for (const [key, value] of testArray.entries()) {
// 	console.log(key, value);
// } // indeks i wartość

console.log(Math.trunc(3.2));
console.log(Math.sign(-5));
console.log(Math.cbrt(64));
console.log(Math.log2(2));
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isInteger(10));
console.log(isFinite(1 / 0));
console.log(isNaN(null * 2)); // 0 => false
console.log("-----------");
const arr13 = [1, 2, 3, 4, 5, 6];
const filteredd = arr13.filter((x) => x > 2);
// console.log(filteredd);
const reducedd = arr13.reduce((acc, curr) => acc + curr);
// console.log(reducedd);
const found = arr13.find((el) => el > 2);
// console.log(found);
const foundIndex = arr13.findIndex((i) => i > 3);
console.log(foundIndex);
const info = arr13.every((item) => item > 0); // every zwraca true jeśli każdy element w tablicy spełnił warunek
// console.log(info);

const atLeastOne = arr13.some((el) => el > 3); // some zwraca true jesli chociaż jeden element spełnia dany warunek
// console.log(atLeastOne);
console.log("-----------");

let pow = 5 ** 2; // Operator potęgowania
console.log(Object.getOwnPropertyDescriptors(obj)); // Pokazuje wszystkie konfiguracje konkretnego obiektu, np. configurable, enumerable itp.
const strring = "Hello";
console.log(strring.padStart(20, "t")); // określamy ilość znaków i czym ma być uzupełniona ta ilość - z przodu stringa.
console.log(strring.padEnd(20, "t")); // określamy ilość znaków i czym ma być uzupełniona ta ilość - z tyłu stringa.

// async function* getData() {
// 	yield await Promise.resolve("Wykonano 1");
// 	yield await Promise.resolve("Wykonano 2");
// 	yield await Promise.resolve("Wykonano 3");
// 	yield await Promise.resolve("Wykonano 4");
// }

// async function testIter() {
// 	let dataIter1 = getData();
// 	console.log(dataIter1);
// 	for await (let val of dataIter1) {
// 		console.log(val);
// 	}
// }
// testIter();

function* foo() {
	yield "test";
}
const tstIterator = foo();
console.log(tstIterator.next());
console.log(tstIterator.next());

function* genRandomId() {
	while (true) {
		let num = Math.trunc(Math.random() * 1000);
		yield num;
	}
}

const generatedId = genRandomId();
console.log(generatedId.next());
console.log(generatedId.next());
console.log(generatedId.next());
console.log(generatedId.next());

function* genRandomMaxIter() {
	while (true) {
		let maxValue = yield;
		let v = Math.trunc(Math.random() * maxValue);
		yield v;
	}
}
const custArray = [...Array(10).keys()];
const randomMaxNumIter = genRandomMaxIter();

custArray.forEach((el) => {
	randomMaxNumIter.next(); // zatrzymujemy się przed przypisaniem wartości do maxValue
	const random = randomMaxNumIter.next(100);
	console.log(`random: ${random.value}`);
});

const car2 = {
	name: "Ford",
	topSpeed: 300,
	printInfo() {
		console.log(this.name, this.topSpeed);
	},
};
console.log(Reflect.get(car2, "name"));
console.log(Reflect.has(car2, "name"));
console.log(Reflect.has(car2, "brand"));

Reflect.set(car2, "brand", "testBrand");
console.log(car2);
console.log(Reflect.ownKeys(car2));
Reflect.deleteProperty(car2, "brand");
console.log(car2);

class TTest {
	constructor(a, b) {
		this.a = a;
		this.b = b;
	}
}
obj = Reflect.construct(TTest, [1, 2]);
console.log(obj);
console.log(Reflect.ownKeys([1, 2, 3, 4, 5]));

obj = {
	a: 1,
	b: 100,
	str: "text",
};
const handler = {
	get(target, prop, receiver) {
		if (prop === "a") return "A+++";
		return target[prop] + "!";
	},
	set(target, prop, value) {
		if (prop === "a" || prop === "b") {
			if (Number.isInteger(value)) {
				target[prop] = value;
			}
		} else if (prop === "str" && typeof value === "string") {
			target[prop] = value;
		}
	},
};

const proxy1 = new Proxy(obj, handler);
console.log("proxy:", proxy1.a);
console.log("proxy:", proxy1.str);
proxy1.b = 12;
console.log("proxy b:", proxy1.b);
proxy1.str = "test";
console.log("proxy str:", proxy1.str);

const user10 = { name: "Kacper" };

const proxy = new Proxy(user10, {
	get(target, prop) {
		console.log(`Próba pobrania ${prop}`);
		return target[prop];
	},
	set(target, prop, value) {
		if (prop === "favFood" && typeof value === "string" && value.length > 5) {
			return (target[prop] = value);
		} else {
			console.log("Wprowadź poprawne dane");
		}
	},
});

proxy.favFood = "Hamburger";
console.log(proxy.favFood);
// console.log(proxy.name);

const target1 = { a: 1, b: 2 };

const proxyT1 = new Proxy(target1, {
	get(target, prop) {
		console.log(`GET ${prop} => ${target[prop]}`);
		return target[prop];
	},
	set(target, prop, value) {
		console.log(`SET ${prop} => ${value}`);
		target[prop] = value;
		return true;
	},
});

proxyT1.b = 10;
const user13 = { id: 7, name: "Ada", age: 30, score: 50 };

const schema = {
	id: "number",
	name: "string",
	age: "number",
	score: { type: "number", min: 0, max: 100 },
};

function createValidatedProxy(target, schema) {
	return new Proxy(target, {
		set(target, prop, value) {
			const hasKey = Reflect.has(target, prop);

			if (!hasKey) throw new Error("Klucz nie istnieje w obiekcie!");

			if (prop === "id") {
				return true;
			} else if (prop === "age" && typeof value === schema.age) {
				target[prop] = value;
				return true;
			} else if (prop === "name" && typeof value === schema.name) {
				target[prop] = value;
				return true;
			} else if (
				prop === "score" &&
				typeof value === schema.score.type &&
				value > 0 &&
				value <= 100
			) {
				target[prop] = value;
				return true;
			} else {
				throw new Error("Element nie pasuje do żadnych kryteriów");
			}
		},
	});
}

const proxyT2 = createValidatedProxy(user13, schema);

const arr15 = [1, 2, 3, 4, 5, 6, [32, 43], [7, 8, 9, [10, 11, 12]]];
console.log(arr15.flat()); // Spłaszczamy tablicę do zagnieżdżenia pierwszego stopnia
console.log(arr15.flat(2)); // Spłaszczamy tablicę do zagnieżdżenia drugiego stopnia
console.log([1, 2, 3].flatMap((x) => [x, x * 2])); // Zostaje zwrócona tablica [1, 1*2], [2, 2*2], [3, 3*2], a następnie tablice są spłaszczane do jednej
console.log([1, 2, 3].flatMap((el) => el * 2));
// flatMap działa do zagnieżdżenia pierwszego stopnia

const entries = new Map([
	["a", 20],
	["str", "text"],
	["obj", { ad: 10 }],
]);
const oobbjj = Object.fromEntries(entries);

const xx = null || 10;
console.log(xx); // 10
// || działa, ale gdy mamy np. "" || 10, a chcemy dopuścić "" to mimo wszystko i tak wyświetli 10, z tego powodu, że || odrzuca wszystkie falsy values

const yyy = null ?? 20; // Jeśli lewa strona to null lub undefined => zwróć prawą
console.log(yyy); // 20

let ob = {
	a: 10,
	obj: {
		b: 20,
		data: {
			str: "test",
		},
	},
};
console.log(ob?.obj?.data?.str);

const url = "https://jakiesciekaweapi/api";

// function testApi() {
// 	return new Promise((resolve, reject) => {
// 		fetch(url).then((res) => res.json().then((data) => resolve(data)));
// 	}).catch((err) => reject(err));
// }

// testApi()
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err));

// function testApi() {
// 	return Promise.resolve(fetch(url).then((res) => res.json()));
// }
// testApi()
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));
// // W obu przypadkach do resolve() przekazywany jest prawidłowy obiekt, który jesteśmy w stanie odczytać

const promiseArr = [
	Promise.resolve(20),
	Promise.reject(null),
	Promise.resolve({ str: "ok" }),
	Promise.reject(new Error("Error")),
];
Promise.allSettled(promiseArr).then((results) => {
	console.log("All promises settled", results);
	results.forEach(({ status, value }) => console.log(status, value));
});
// Pokazuje stan wszystkich promisów, a także zwrócone wartości każdego z nich

console.log("Ania, Anna, Ola, Karol".replaceAll(/a/g, "b"));

const promisesArr2 = [
	Promise.resolve("g"),
	Promise.resolve("i"),
	Promise.resolve("t"),
];

const resultsP = Promise.any(promisesArr2);
resultsP.then((status) => console.log(status));
// Jeśli wszystkie resolved => pierwszy promise
// Jeśli wszystkie rejected => error
// Jeśli chociaż jeden resolved => pierwszy promis

let v = 10;
let z = 20;

v &&= z;
// Jeśli v istnieje, przypisz do v wartość z

