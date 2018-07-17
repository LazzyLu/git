const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');

gulp.task('sass',function(){
	gulp.src('src/scss/*.scss').pipe(sass().on("error",sass.logError)).pipe(cssnano()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('src/css'))
})
gulp.task('default',function(){
	gulp.watch('src/scss/*.scss',['sass']);
})

