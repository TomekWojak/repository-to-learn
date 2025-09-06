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
