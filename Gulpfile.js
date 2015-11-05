var gulp = require('gulp');
var del = require('del');
var path = require('path');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var webpack = require('webpack-stream');
var webpack_config = require('./webpack.config.js');

gulp.task('clean:all', function () {
    return del([
        'dist/**/*.*'
    ]);
});

gulp.task('clean:js', function (){
    return del([
        'dist/**/*.js*'
    ]);
});

gulp.task('clean:css', function () {
    return del([
        'dist/**/*.css*'
    ]);
});

gulp.task('sass', function () {
    gulp.src('./main/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy:assets', function () {
    return gulp.src('./main/assets/**/*.*').pipe(gulp.dest('dist'));
});

gulp.task('build', function () {
    return gulp.src('./main/app.js')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('clean-build:js', function(callback) {
    runSequence('clean:js', 'build', callback);
});

gulp.task('clean-build:all', function (callback) {
    runSequence('clean:all', 'sass', 'build', 'copy:assets', callback);
});

gulp.task('default', ['clean-build:js']);
