var gulp = require('gulp');
	concat = require('gulp-concat');
	uglify = require('gulp-uglify');
gulp.task('js', function() {
	return gulp.src('js/*.js')
		.pipe(concat('bundle.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
});
gulp.task('watch', function() {
	gulp.watch(['js/*.js'],['js']);
});