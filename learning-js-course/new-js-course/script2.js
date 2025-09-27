const data = 4512;

export function getData() {
	return data;
}
export const multiply = (a, b) => {
	return a * b;
};
export let x = 10;

export function changeXValue(newValue) {
	x = newValue;
}

export default {
	getData,
};
