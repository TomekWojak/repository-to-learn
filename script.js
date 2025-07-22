function doubler(callback, ...value) {
	callback(value);
}

const test = (x) => {
	x.forEach((element) => {
		console.log(element);
	});
};

doubler(test, 1, 2, 3)
