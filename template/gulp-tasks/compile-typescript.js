var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('compile-typescript', function () {
	gulp.src(['src/modules.ts', 'src/**/*.ts'])
		.pipe(typescript({ target: "ES5", removeComments: false, sortOutput: true }))
		.js
		.pipe(gulp.dest('www/js-src/'));

	gulp.src(['www/js-src/modules.js', 'www/js-src/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(uglify({mangle: false}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('www/js/'));
});
