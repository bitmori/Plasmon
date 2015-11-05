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

gulp.task('sass:photon', function () {
    gulp.src('./photon/sass/photon.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy:assets', function () {
    return gulp.src('./main/assets/**/*.*').pipe(gulp.dest('./dist'));
});

gulp.task('copy:fonts', function () {
    return gulp.src('./photon/fonts/**/*.*').pipe(gulp.dest('./dist/fonts'));
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
    runSequence('clean:all', ['sass:photon', 'build', 'copy:assets', 'copy:fonts'], callback);
});

gulp.task('default', ['clean-build:js']);
