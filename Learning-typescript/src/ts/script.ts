import { is } from "@babel/types";

const age: number = 54;
let surname: string = "Potter";
const isAdult: boolean = true;

const arr: number[] = [1, 2, 3, 4];

const arr2: Array<number> = [1, 2, 3];

const arr3 = Array(1, 2, 3, 4);

let nameAndAge: [string, number];

nameAndAge = ["Ania", 11];
nameAndAge[0] = "Test";
nameAndAge[1] = 19;

const red: string = "red";
const green: string = "green";
const blue: string = "blue";

enum RedGreenBlue {
	RED = "red",
	GREEN = "green",
	BLUE = "blue",
}
console.log(RedGreenBlue.GREEN);

function helloWorld(): void {
	console.log("Hello World");
}

function lengthOfWorld(word: string, test?: string): number {
	//test? - parametr opcjonalny(nie trzeba podawać)
	//powinno się definiować typ parametru oraz funkcji!!

	if (test) {
		console.log(test);
	}

	return word.length;
}

console.log(lengthOfWorld("TestWord", "test2"));

const user = { id: 12 };
const user2: object = { id: 12 };
const user3: { id: number; name: string } = { id: 12, name: "Ania" };

type User = { id: number; email: string };

const user4: User = { id: 1, email: "John" };
const user5: User = { id: 12, email: "Ann" };

type Admin = { role: string };

const user6: User & Admin = { id: 3, email: "Tst", role: "ADMIN" }; //Rozszerzamy zakres typów type User

let id: number | string;

id = "test";
id = 1;

function test(code: string | number | boolean): void {
	console.log(`Test: ${code}`);
}
test(true);

type ObjUnion = string | number | object | boolean;

let obj1: ObjUnion;

let isAdmin: true | false

isAdmin = true


let myUnknow: unknown

myUnknow = 'hello world'
myUnknow = 100

let myNumber: number = 90

if(typeof myUnknow === 'number') myNumber = myUnknow
