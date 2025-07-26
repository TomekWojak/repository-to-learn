const numbers = [1, 2, 3, 4, 5, 6];
function processNumbers(arr) {
	return function (first, second) {
		const filtered = arr.filter(first);
		const changed = arr.map(second);

		return {
			filtered,
			changed,
		};
	};
}

const filterNumbers = (x) => {
	return x % 2 === 0;
};
const newNumbers = (x) => {
	return x * 10;
};

const summary = processNumbers(numbers)
console.log(summary(filterNumbers, newNumbers).filtered)
console.log(summary(filterNumbers, newNumbers).changed)
