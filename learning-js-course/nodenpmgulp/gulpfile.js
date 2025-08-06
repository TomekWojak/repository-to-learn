const { src, dest, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

const paths = {
	sass: "./src/sass/**/*.scss",
	js: "./src/js/**/*.js",
	img: "./src/img/*",
	sassDest: "./dist/css",
	jsDest: "./dist/js",
	imgDest: "./dist/img",
};

function sassCompiler(done) {
	src(paths.sass) //** oznaczają że ma przeszukać folder sass, jeśli będą jakieś podfoldery to je również przeszukaj, * - przeszuka wszystkie pliki które mają rozszerzenie .scss */
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(cssnano())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest(paths.sassDest));
	done();
}

function javaScript(done) {
	src(paths.js)
		.pipe(
			babel({
				presets: ["@babel/env"],
			})
		)
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest(paths.jsDest));
	done();
}
function convertImages(done) {
	src(paths.img, { encoding: false })
		.pipe(imagemin())
		.pipe(dest(paths.imgDest));
	done();
}

exports.default = series(sassCompiler, javaScript, convertImages);
