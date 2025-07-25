const grades = [1, 4, 6, 3, 2, 5];

function handleGrades(arr) {
	return function () {
		let initialValue = 0;
		const filtered = arr.filter((el) => el >= 4);
		const changed = arr.map((el) => (el < 6 ? el + 1 : 6));
		const sum = arr.reduce((acc, cum) => acc + cum, initialValue);
		const average = sum / arr.length;

		return {
			filtered: filtered,
			changed: changed,
			average: average,
		};
	};
}

const showGrades = handleGrades(grades)

console.log(showGrades().filtered);
console.log(showGrades().changed);
console.log(showGrades().average);