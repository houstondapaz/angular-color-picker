const gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat');

gulp.task('delivery-js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(uglify({ mangle: false }))
        .pipe(concat('color-picker.min.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('images', function () {
    return gulp.src('./src/css/images/**')
        .pipe(gulp.dest('./dist/css/images'));
});

gulp.task('delivery-style', ['images'], function () {
    return gulp.src('./src/css/*.css')
        .pipe(concat('color-picker.min.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['delivery-js', 'delivery-style']);
