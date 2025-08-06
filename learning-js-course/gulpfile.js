// const gulp = require("gulp"); //Musimy zawsze zaimportować gulpa, ale tutaj pobieramy wszystko co zajduje się w obiekcie gulp.
// const { series, parallel } = require("gulp"); //Tutaj pobieramy wybrane przez nas metody API - lepsza optymalizacja

const { series, parallel } = require("gulp");

function sass(done) {
	console.log("Kompiluję SASS");
	done();
}
function html(done) {
	console.log("Minifikuję HTML");
	done();
}
function liveServer(done) {
	console.log("Uruchamiam live server");
	done();
}
const mainFunctions = parallel(sass, html);
exports.default = series(mainFunctions, liveServer);
