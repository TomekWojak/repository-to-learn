function test(...args) {
	return args.filter((el) => typeof el === "number");
}

let test1 = test(1, 2, undefined, null, true, "3", "czesc");
console.log(test1);
