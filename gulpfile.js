var gulp = require('gulp'),
    rename = require('gulp-rename');

var gulpTraceur = require('./tools/transpiler/gulp-traceur');


var atToDartOptions = {
    annotations: true,
    types: true,
    script: false,
    outputLanguage: 'dart'
};

var atToJsOptions = {
    annotations: true,
    types: true,
    script: false,
    modules: 'commonjs'
};


gulp.task('compile:js', function(){
    gulp.src('src/**/*.js')
        .pipe(gulpTraceur(atToJsOptions))
        .pipe(gulp.dest('build/js'));
});

gulp.task('compile:dart', function(){
    gulp.src('src/**/*.js')
        .pipe(rename({extname: '.dart'}))
        .pipe(gulpTraceur(atToDartOptions))
        .pipe(gulp.dest('build/dart'));
});

gulp.task('compile', ['compile:dart', 'compile:js']);
gulp.task('default', ['compile']);
