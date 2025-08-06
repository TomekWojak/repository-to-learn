const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function sassCompiler(done) {
	src("./src/sass/**/*.scss") //** oznaczają że ma przeszukać folder sass, jeśli będą jakieś podfoldery to je również przeszukaj, * - przeszuka wszystkie pliki które mają rozszerzenie .scss */
		.pipe(sass().on("error", sass.logError))
		.pipe(dest("./dist/css"));
	done();
}

exports.default = sassCompiler