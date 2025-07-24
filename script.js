function createDiscount(discount) {
	return function (price) {
		return price - price * (discount / 100);
	};
}

const tenPercentOff = createDiscount(10);
const twentyFivePercentOff = createDiscount(25)
console.log(tenPercentOff(100));
console.log(twentyFivePercentOff(200));