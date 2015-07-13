var gulp   = require('gulp');
var concat = require('gulp-concat');
var babel  = require("gulp-babel");

gulp.task('default', ['watch', 'babel']);

gulp.task('concat', function() {
    return gulp.src('src/*.js').pipe(concat('es6.js')).pipe(gulp.dest('dist/'));
});

gulp.task('babel', ['concat'], function () {
    return gulp.src('dist/es6.js').pipe(babel()).pipe(concat('es5.js')).pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['babel']);
});