var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

gulp.task('compile-html', function () {
	gulp.src(['src/**/*.html'])
		.pipe(htmlmin({removeComments: true, collapseWhitespace: true}))
		.pipe(gulp.dest('www/'));
});
