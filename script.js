function makeWrapper(prefix, suffix) {
	return function (text) {
		console.log(prefix + text + suffix);
		return prefix + text + suffix;
	};
}

const test = makeWrapper("[", "]");
const test2 = makeWrapper('{','}')
test('Umieść mnie w nawiasie kwadratowym');
test2('Umieść mnie w nawiasie klamrowym')
