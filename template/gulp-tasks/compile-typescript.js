var gulp = require('gulp');
var typescript = require('gulp-typescript');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');

gulp.task('compile-typescript', function () {
	return runSequence('compile-typescript-step1', 'compile-typescript-step2');
});

gulp.task('compile-typescript-step1', function () {
	return gulp.src(['src/modules.ts', 'src/**/*.ts'])
		.pipe(typescript({ target: "ES5", removeComments: false, sortOutput: true }))
		.js
		.pipe(gulp.dest('www/js-src/'));
});

gulp.task('compile-typescript-step2', function () {
	return gulp.src(['www/js-src/modules.js', 'www/js-src/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat("app.js"))
		.pipe(uglify({ mangle: false }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('www/js/'));
});