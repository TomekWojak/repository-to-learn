function createCounter(start, step) {
	let current = start;

	return function () {
		const results = current;
		current += step;
		return results;
	};
}
const counter = createCounter(10, 5);
console.log(counter(10,5));
console.log(counter(10,5));
console.log(counter(10,5));