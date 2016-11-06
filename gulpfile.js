'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const connect = require('gulp-connect');
const git = require('gulp-git');

gulp.task('scripts', function() {
  browserify({entries: ['src/js/index.js'], debug: true})
    .transform('babelify', {presets: ['es2015'], sourceMaps: true})
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('docs/js'))
    .pipe(connect.reload());
});

// move html/templates/whatever
gulp.task('assets', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('docs/'))
    .pipe(connect.reload());
});

// compile the sass
gulp.task('sass', function() {
  gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('docs/css/'));
});

// move the vendor stuff here
gulp.task('vendor', function() {
  gulp.src('node_modules/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('docs/css/'))
});

// watch my stuffs
gulp.task('watch', function() {
  gulp.watch(['src/**/*.html'], ['assets']);
  gulp.watch(['src/**/*.js'], ['scripts']);
  gulp.watch(['src/scss/*.scss'], ['sass']);
});

// dev server
gulp.task('serve', function() {
  connect.server({
    root: 'docs',
    livereload: true
  });
});

gulp.task('commit', function(){
  //TODO
});

gulp.task('default', ['scripts', 'assets', 'vendor', 'sass', 'serve', 'watch']);
gulp.task('build', ['scripts', 'assets', 'vendor', 'sass']);
gulp.task('publish', ['scripts', 'assets', 'vendor', 'sass', 'commit']);
