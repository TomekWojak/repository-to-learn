function sum(x, ...rest) {
	let total = 0;

	for (const number of rest) {
		total += number;
	}
	console.log(total);
}
