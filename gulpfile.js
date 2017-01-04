var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify');

gulp.task('sass',function() {
	gulp.src('./scss/*.scss')
		.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
		.pipe(gulp.dest('./css'))
});

gulp.task('sass:watch',function(){
	gulp.watch('./scss/*.scss',['sass'])
})

gulp.task('uglify',function(){
	gulp.src(['./js/*.js','!./js/app.js'])
		.pipe(uglify())
		.pipe(gulp.dest('dest/js'))
})

gulp.task('default',['sass','sass:watch']);
