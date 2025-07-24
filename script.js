// function makeAppender(suffix) {
// 	return function (text) {
// 		console.log(text + suffix);
// 		return text + suffix;
// 	};
// }
// const test = makeAppender("!!!");
// test('Witaj')

function makeAppender(text, suffix){
    console.log(text + suffix);
    return text + suffix
}

makeAppender('Witaj', '!!!')
