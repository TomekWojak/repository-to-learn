import { pi, square } from "./app.js";

console.log(pi);
const square2 = square(5);
console.log(square2);

const user = {
	name: "Alicja",
	age: 25,
	address: {
		city: "Warszawa",
		zip: "00-001",
	},
};

const {
	name: userName,
	age: newAge,
	address: { city: newCity },
	email = "mail@gmail.com",
} = user;

console.log(userName);
console.log(newAge);
console.log(newCity);
console.log(email);

const product = {
	id: 123,
	title: "Laptop",
	price: 4999,
	specs: {
		cpu: "Intel i7",
		ram: "16GB",
	},
};

function printProduct({ price, id, title, specs: { cpu, ram } }) {
	return `${title} kosztuje ${price}PLN, CPU: ${cpu}, RAM: ${ram}`;
}

console.log(printProduct(product));

const users = [
	{ id: 1, name: "Ala", age: 22 },
	{ id: 2, name: "Bartek" }, // brak wieku
	{ id: 3, name: "Celina", age: 19 },
];

const showUsersData = () => {
	users.forEach(({ id, name, age = 0 }) => {
		console.log(`${name} ma ${age} lat`);
	});
};
showUsersData();

const grades = [10, 9, 8, 7, 6];

const [firstGrade, secondGrade, ...otherGrades] = grades;

const users2 = [
	{ name: "Ala", age: 22 },
	{ name: "Bartek", age: 25 },
	{ name: "Celina", age: 19 },
];

const [firstUser, ...restUsers] = users2;
const { name, age } = firstUser;

const student1Grades = [10, 9, 8];
const student2Grades = [7, 6, 9];

const allGrades = [...student1Grades, ...student2Grades];

const user1 = { name: "Ala", age: 22 };
const user2 = { name: "Bartek", city: "Warszawa" };

const mergedUser = { ...user1, ...user2 };

const productInfo = { name: "Laptop", price: 4000 };
const additionalInfo = { warranty: "2 lata", color: "czarny" };
const morePrices = [100, 200, 300];

const allProducts = { ...productInfo, ...additionalInfo };

const { price } = allProducts;
const allPrices = [price, ...morePrices];
console.log(allPrices);

const input = document.getElementById("username");
input && (input.value = "Anonim");

const age2 = 0;

const displayAge = age2 ? age2 : "brak danych";
// albo
const displayAge2 = age2 || "brak danych";
console.log(displayAge2);

const user3 = {
	name: "Bartek",
	address: {
		city: "Warszawa",
	},
};

const downloadUser = ({ address: { city } }) => {
	return user3.address && city;
};

console.log(downloadUser(user3));
