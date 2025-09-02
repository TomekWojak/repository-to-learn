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
const user3: {id: number, name: string} = {id: 12, name: 'Ania'}
