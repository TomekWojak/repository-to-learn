const gulp = require("gulp"); //Musimy zawsze zaimportować gulpa

function text1(done) {
	console.log(1234);
	done();
}
function text2(done) {
	console.log("abcd");
	done();
}

exports.showTextes = gulp.series(text1, text2);
exports.showTextesP = gulp.parallel(text1, text2);
