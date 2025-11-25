const input1 = document.querySelector<HTMLInputElement>(".input1")!;
const input2 = document.querySelector<HTMLInputElement>(".input2")!;
const button = document.querySelector("button");

const addValues = (x1: number, x2: number) => x1 + x2;

button?.addEventListener("click", () => {
	const sum = addValues(parseFloat(input1.value), parseFloat(input2.value));
    console.log(sum);
});
